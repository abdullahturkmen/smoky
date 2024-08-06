import { FC, useState } from 'react';
import { initialUser, User } from '../core/_models';
import { useListView } from '../core/ListViewProvider';
import { UsersListLoading } from '../components/loading/UsersListLoading';
import { createUser, updateUser } from '../core/_requests';
import { useQueryResponse } from '../core/QueryResponseProvider';
import Select from "react-select";

type Props = {
  isUserLoading: boolean
  user: User
}

const domainOptions = [
  { value: "a", label: "www.smoky.com" },
  { value: "b", label: "www.abdullahturkmen.com" },
];

const roleOptions = [
  { value: "admin", label: "Admin" },
  { value: "editor", label: "Editor" },
];



const UserEditModalForm: FC<Props> = ({ user, isUserLoading }) => {
  const { setItemIdForUpdate } = useListView();
  const { refetch } = useQueryResponse();

  const [userForEdit, setUserForEdit] = useState<User>({
    ...user,
    avatar: user.avatar || initialUser.avatar,
    role: user.role || initialUser.role,
    position: user.position || initialUser.position,
    name: user.name || initialUser.name,
    email: user.email || initialUser.email,
  });

  const [selectedRole, setSelectedRole] = useState(roleOptions[1]);
  const [selectedDomain, setSelectedDomain] = useState(null);

  const roleChange = (selectedOption) => {
    setSelectedRole(selectedOption);

    if (selectedOption.value === "editor") {
      setSelectedDomain(null);
    }
  };

  const domainChange = (selectedOption) => {
    setSelectedDomain(selectedOption);
  };

  const isSubmitButtonDisabled = !userForEdit.email || (!selectedRole || selectedRole.value === "editor" && !selectedDomain);

  const createUserFunction = () =>{
    const jsonData = JSON.stringify(selectedDomain); 
    const parsedData = JSON.parse(jsonData);
    const labelsArray = parsedData.map(item => item.label);

    const data = {
      email : userForEdit.email,
      role : selectedRole.value,
      domain : labelsArray
    }

    console.log('data,', data)

  }
  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
      refetch();
    }
    setItemIdForUpdate(undefined);
  };

  return (
    <>
      <form id='kt_modal_add_user_form' className='form' noValidate>
        <div
          className='d-flex flex-column me-n7 pe-7'
          id='kt_modal_add_user_scroll'
          data-kt-scroll='true'
          data-kt-scroll-activate='{default: false, lg: true}'
          data-kt-scroll-max-height='auto'
          data-kt-scroll-dependencies='#kt_modal_add_user_header'
          data-kt-scroll-wrappers='#kt_modal_add_user_scroll'
          data-kt-scroll-offset='300px'
        >
          <div className='fv-row mb-4'>
            <label className='fw-bold fs-6 mb-2'>Email</label>
            <input
              placeholder='Email'
              className='form-control form-control-solid mb-3 mb-lg-0'
              type='email'
              name='email'
              autoComplete='off'
              value={userForEdit.email}
              onChange={(e) => {
                // E-posta değişikliklerini takip etmek için
                setUserForEdit({ ...userForEdit, email: e.target.value });
              }}
            />
          </div>
          <div>
            <div className="menu-item mb-4">
              <label className="fw-bold fs-6 mb-2">Permission</label>
              <Select
                options={roleOptions}
                placeholder="Select a role"
                className="form-control form-control-solid p-0"
                onChange={roleChange}
                value={selectedRole}
              />
            </div>
            {selectedRole && selectedRole.value === "editor" && (
              <div className="menu-item">
                <label className="fw-bold fs-6 mb-2">Add to websites</label>
                <Select
                  options={domainOptions}
                  placeholder="Select a domain"
                  className="form-control form-control-solid p-0"
                  onChange={domainChange}
                  value={selectedDomain}
                  isMulti={true}
                />
              </div>
            )}
          </div>
        </div>
        <div className='text-center pt-15'>
          <button
            type='reset'
            onClick={() => cancel()}
            className='btn btn-light me-3'
            data-kt-users-modal-action='cancel'
          >
            Discard
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitButtonDisabled}
            onClick={createUserFunction}
          >
            <span className="indicator-label">Submit</span>
          </button>
        </div>
      </form>
    </>
  );
};

export { UserEditModalForm };
