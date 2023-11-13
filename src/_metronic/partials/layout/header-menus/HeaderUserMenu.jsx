import { Link } from "react-router-dom";
import { useAuth } from "../../../../app/modules/auth";
import { Languages } from "./Languages";
import { toAbsoluteUrl } from "../../../helpers";
import { ThemeModeSwitcher } from "../theme-mode/ThemeModeSwitcher";
import { useSelector } from 'react-redux';
const HeaderUserMenu = () => {
  const { currentUser, logout } = useAuth();
  const getUserProfile = useSelector((state) => state.accountSettings.userProfile)

  return (
    <div
      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px"
      data-kt-menu="true"
      data-popper-placement="bottom-start"
    >
      <div className="menu-item px-3">
        <div className="menu-content d-flex align-items-center px-3">
          <div className="symbol symbol-50px me-5">
            <img alt="Logo" src={toAbsoluteUrl(getUserProfile ? getUserProfile : "/media/avatars/300-1.jpg")} />  
          </div>

          <div className="d-flex flex-column">
            <div className="fw-bolder d-flex align-items-center fs-5">
              {currentUser?.first_name} {currentUser?.first_name}
            </div>
            <a href="#" className="fw-bold text-muted text-hover-primary fs-7">
              {currentUser?.email}
            </a>
          </div>
        </div>
      </div>

      <div className="separator my-2"></div>

      <div className="menu-item px-5 my-1 d-flex">
       
            <ThemeModeSwitcher toggleBtnClass="btn btn-sm btn-icon btn-icon-muted btn-active-icon-primary" />
          
      </div>

      <Languages />

      <div className="menu-item px-5 my-1">
        <Link to="/settings" className="menu-link px-5">
          Account Settings
        </Link>
      </div>

      <div className="menu-item px-5">
        <a onClick={logout} className="menu-link px-5">
          Sign Out
        </a>
      </div>
    </div>
  );
};

export { HeaderUserMenu };
