import { React, useState } from 'react'
import { KTIcon } from '../../../helpers'
import Select from "react-select";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

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
    <ToastContainer/>
      <div class="modal fade" id="EditAccessModal" aria-hidden="true" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title">Edit Access</h2>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
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
            </div>
            <div class="modal-footer justify-content-center text-center pt-15">
              <button class="btn btn-light" data-bs-dismiss="modal">Discard</button>
              <button class="btn btn-primary" onClick={changeAccess}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditAccessModal