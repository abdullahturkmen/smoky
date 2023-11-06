import { FC,useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { CampaignName } from "./components/CampaignName";
import { CampaignSchedule } from "./components/CampaignSchedule";
import { CampaignLimit } from "./components/CampaignLimit";
import { CampaignAudience } from "./components/CampaignAudience";
import { CampaignDisplayPages } from "./components/CampaignDisplayPages";
import { CampaignUploadCoupons } from "./components/CampaignUploadCoupons"
import { CampaignDiscountRange } from "./components/CampaignDiscountRange";
import { useDispatch, useSelector } from 'react-redux';
import { setPageNum } from "../../../../../store/reducers/createCampaignReducer";

const Step3 = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-100 w-xxl-900px mx-auto">
    
      <div className="pb-10 pb-lg-15">
        <h2 className="fw-bolder text-dark">Campaign Settings</h2>

        <div className="text-gray-400 fw-bold fs-6 d-none">
          If you need more info, please check out
          <a href="/dashboard" className="text-primary fw-bolder">
            {" "}
            Help Page
          </a>
          .
        </div>
      </div>

      <div className="row">
        <div className="accordion" id="accordionExample">
          <CampaignName />
          <CampaignSchedule />
          <CampaignDiscountRange/>
          <CampaignLimit />
          <CampaignAudience />
          <CampaignDisplayPages />
          <CampaignUploadCoupons />
        </div>
      </div>
    </div>
  );
};

export { Step3 };
