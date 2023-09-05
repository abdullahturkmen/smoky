/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { KTIcon, toAbsoluteUrl } from "../../../../_metronic/helpers";
import { Link, useLocation } from "react-router-dom";
import { Dropdown1 } from "../../../../_metronic/partials";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const ProfileHeader: React.FC = () => {
  const location = useLocation();
  const [userProfile, setUserProfile] = useState<string | null>(null);
  const [changeIcon, setChangeIcon] = useState(false);

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        if (event.target) {
          const base64Data = event.target.result as string;
          setUserProfile(base64Data);
          setChangeIcon(true)
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const clearUserProfile = () => {
    setUserProfile(null)
    setChangeIcon(false)
  };

  const saveUserProfile = () => {
    toast.success('The profile picture has been successfully changed.', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    setChangeIcon(false)
    console.log('kayıt işlemi başarılı', userProfile)
  };
  return (
    <div className="card mb-5 mb-xl-10">
      <ToastContainer/>
      <div className="card-header cursor-pointer">
        <div className="card-title m-0">
          <h3 className="fw-bolder m-0">Photo</h3>
        </div>
      </div>
      <div className="card-body pt-9 pb-0">
        <div className="d-flex flex-wrap flex-sm-nowrap mb-3">
          

          <div className="flex-grow-1">
            <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
              <div className="col-lg-8">
                <div
                  className="image-input image-input-outline"
                  data-kt-image-input="true"
                  style={{
                    backgroundImage: `url(${toAbsoluteUrl(
                      "/media/svg/avatars/blank.svg"
                    )})`,
                  }}
                >
                  <div
                    className="image-input-wrapper w-125px h-125px rounded-circle"
                    style={{
                      backgroundImage: userProfile
                        ? `url(${userProfile})`
                        : `url(${toAbsoluteUrl("/media/avatars/300-1.jpg")})`,
                    }}
                  ></div>

                  <label
                    className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                    data-kt-image-input-action="change"
                    data-bs-toggle="tooltip"
                    aria-label="Change avatar"
                    data-bs-original-title="Change avatar"
                    data-kt-initialized="1"
                  >
                    {changeIcon ? (
                      <i className="ki-duotone ki-check fs-2"  onClick={saveUserProfile}>
                        <span className="path1"></span>
                        <span className="path2"></span>
                      </i>
                    ) : (
                      <>
                        <i className="ki-duotone ki-pencil fs-7">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                        <input
                          type="file"
                          name="avatar"
                          accept=".png, .jpg, .jpeg"
                          onChange={handleFileInputChange}
                        />
                        <input type="hidden" name="avatar_remove" />
                      </>
                    )}
                  </label>

                  <span
                    className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                    data-kt-image-input-action="cancel"
                    data-bs-toggle="tooltip"
                    aria-label="Cancel avatar"
                    data-bs-original-title="Cancel avatar"
                    data-kt-initialized="1"
                  >
                    <i className="ki-duotone ki-cross fs-2">
                      <span className="path1"></span>
                      <span className="path2"></span>
                    </i>{" "}
                  </span>

                  <span
                    className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                    data-kt-image-input-action="remove"
                    data-bs-toggle="tooltip"
                    aria-label="Remove avatar"
                    data-bs-original-title="Remove avatar"
                    data-kt-initialized="1"
                  >
                    <i className="ki-duotone ki-cross fs-2" onClick={clearUserProfile}>
                      <span className="path1"></span>
                      <span className="path2"></span>
                    </i>{" "}
                  </span>
                </div>

                <div className="form-text">
                  Allowed file types: png, jpg, jpeg (180x180 px).
                </div>
              </div>

             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProfileHeader };
