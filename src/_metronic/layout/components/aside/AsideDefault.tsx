/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC,useState } from "react";
import { useLayout } from "../../core";
import { KTIcon } from "../../../helpers";
import { AsideMenu } from "./AsideMenu";
import { AsideToolbar } from "./AsideToolbar";

const AsideDefault: FC = () => {
  const { classes } = useLayout();
  const [trialPercent, setTrialPercent] = useState<number>(35);
  const [trialLeftDays, setTrialLeftDays] = useState<number>(13);

  return (
    <div
      id="kt_aside"
      className="aside"
      data-kt-drawer="true"
      data-kt-drawer-name="aside"
      data-kt-drawer-activate="{default: true, lg: false}"
      data-kt-drawer-overlay="true"
      data-kt-drawer-width="{default:'200px', '300px': '250px'}"
      data-kt-drawer-direction="start"
      data-kt-drawer-toggle="#kt_aside_mobile_toggle"
    >
      {/* begin::Aside Toolbarl */}
      <div className="aside-toolbar flex-column-auto" id="kt_aside_toolbar">
        <AsideToolbar />
      </div>
      {/* end::Aside Toolbarl */}
      {/* begin::Aside menu */}
      <div className="aside-menu flex-column-fluid">
        <AsideMenu asideMenuCSSClasses={classes.asideMenu} />
      </div>
      {/* end::Aside menu */}

      {/* begin::Footer */}
      <div className="aside-footer flex-column-auto py-5" id="kt_aside_footer">
        <div className="w-100">
          <div className="d-flex justify-content-between">
            <div>Trial - {trialLeftDays} day{trialLeftDays > 0 && (<>s</>)} left</div>
            <div>{trialPercent} / 100</div>
          </div>
          <div className="progress">
          <div
              className="progress-bar"
              role="progressbar"
              aria-label="Basic example"
              style={{ width: `${trialPercent}%` }}
              
            ></div>
          </div>
          <div className="d-block mt-5">
            <a href="#" className="btn btn-sm btn-light-primary">Upgrade</a>
          </div>
        </div>
      </div>
      {/* end::Footer */}
    </div>
  );
};

export { AsideDefault };
