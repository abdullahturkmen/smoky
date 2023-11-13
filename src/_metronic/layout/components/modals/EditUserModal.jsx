import React, { useState } from 'react';
import Select from "react-select";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import ModalComponent from './ModalComponent';
import { useSelector } from 'react-redux';
function EditUserModal() {
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedDomain, setSelectedDomain] = useState(null);
  const getUserProfile = useSelector((state) => state.accountSettings.selectedUserDetail)

  const roleOptions = [
    { value: "admin", label: "Admin" },
    { value: "editor", label: "Editor" },
  ];
  const domainList = [
    { value: "a", label: "www.snooky.io" },
    { value: "b", label: "www.abdullahturkmen.com" },
  ];

  const changeRole = (selectedOption) => {
    console.log('change', selectedOption.value)
    setSelectedRole(selectedOption);
    console.log('deneme', getUserProfile)
  };

  const changeSelectedDomain = (event) => {
    setSelectedDomain(event)
 };

  const changeAccess = () => {
    console.log('test', selectedRole.value)
    toast.success('Changed access', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  return (
    <>
      <ToastContainer />
      <ModalComponent ids={'EditUserModal'} onSubmit={changeAccess} title={'Edit User'} submitText={'Submit'} submitBg={'btn btn-primary'} discardText={'Discard'} discardBg={'btn btn-light'}>
        
      <div className="menu-item">
          <label className="fw-bold fs-6">Email</label>
          <input
            placeholder='Email'
            type='text'
            name='name'
            className={'form-control form-control-solid mb-3 mb-lg-0'}
            autoComplete='off'
            value={getUserProfile.email}
        />
        </div>
        

        <div className="menu-item">
          <label className="fw-bold fs-6">Permisson</label>
          <Select
            options={roleOptions}
            placeholder="Role"
            className="mt-4 form-control form-control-solid p-0"
            value={selectedRole}
            onChange={changeRole}
          />
        </div>

        <div className="menu-item">
          <label className="fw-bold fs-6">Add to websites</label>
          <Select
          options={domainList}
          value={selectedDomain}
          onChange={changeSelectedDomain}
          placeholder="Domains"
          className="mt-4 form-control form-control-solid p-0"
        />
        </div>
      </ModalComponent>
    </>
  );
}

export default EditUserModal;
