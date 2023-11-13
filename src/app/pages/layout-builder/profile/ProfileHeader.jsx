import React, { useState } from "react";
import { toAbsoluteUrl } from "../../../../_metronic/helpers";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useSelector,useDispatch } from 'react-redux';
import { setUserProfile } from "../../../../store/reducers/accountSettingsReducer";
const ProfileHeader = () => {
  const dispatch = useDispatch();
  const [changeIcon, setChangeIcon] = useState(false);
  const getUserProfile = useSelector((state) => state.accountSettings.userProfile)
  const [profile, setProfile] = useState(null);
  const changeUserProfile = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          const base64Data = event.target.result;
          setChangeIcon(true)
          setProfile(base64Data)
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const clearUserProfile = () => {
    setChangeIcon(false)
    setProfile(null)
  };

  const saveUserProfile = () => {
    setChangeIcon(false)
    dispatch(setUserProfile(profile));
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
                  {getUserProfile ? (
                    <div
                    className="image-input-wrapper w-125px h-125px rounded-circle"
                    style={{
                      backgroundImage: getUserProfile
                        ? `url(${getUserProfile})`
                        : `url(${toAbsoluteUrl("/media/avatars/300-1.jpg")})`,
                    }}
                  ></div>
                  ) : (
                    <div
                    className="image-input-wrapper w-125px h-125px rounded-circle"
                    style={{
                      backgroundImage: profile
                        ? `url(${profile})`
                        : `url(${toAbsoluteUrl("/media/avatars/300-1.jpg")})`,
                    }}
                  ></div>
                  )}

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
                          onChange={changeUserProfile}
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

