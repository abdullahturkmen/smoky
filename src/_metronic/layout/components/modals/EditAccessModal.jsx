import React, { useState } from 'react';
import Select from "react-select";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import ModalComponent from './ModalComponent';

function EditAccessModal() {
  const [selectedRole, setSelectedRole] = useState('');
  const roleOptions = [
    { value: "admin", label: "Admin" },
    { value: "editor", label: "Editor" },
  ];

  const changeRole = (selectedOption) => {
    console.log('change', selectedOption.value)
    setSelectedRole(selectedOption);
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
      <ModalComponent ids={'EditAccessModal'} onSubmit={changeAccess} title={'Edit Access'} submitText={'Submit'} submitBg={'btn btn-primary'} discardText={'Discard'} discardBg={'btn btn-light'}>
        <div className="menu-item">
          <label className="fw-bold fs-6">Invite editors</label>
          <Select
            options={roleOptions}
            placeholder="Role"
            className="mt-4 form-control form-control-solid p-0"
            value={selectedRole}
            onChange={changeRole}
          />
        </div>
      </ModalComponent>
    </>
  );
}

export default EditAccessModal;
