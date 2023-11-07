import React, { FC, useState } from "react";
import { KTIcon } from "../../../../../_metronic/helpers";
import { Link } from "react-router-dom";
import moment from "moment";
import { useDispatch, useSelector } from 'react-redux';
import { setPageNum,setCollapseNum,setCampaignName } from "../../../../../store/reducers/createCampaignReducer";

const Step5 = () => {
  const dispatch = useDispatch();

  const storeCampaignName = useSelector((state) => state.createCampaign.campaignName)
  const storeCampaignSchedule = useSelector((state) => state.createCampaign.campaignSchedule)
  const storeDiscountRange = useSelector((state) => state.createCampaign.discountRange)
  const storeCampaignLimit = useSelector((state) => state.createCampaign.campaignLimit)

  const goSchedule = () => {
    dispatch(setCollapseNum(2))
    dispatch(setPageNum(3))
  }

  const goDiscountRange = () => {
    dispatch(setCollapseNum(3))
    dispatch(setPageNum(3))
  }

  const goCampaignLimit = () => {
    dispatch(setCollapseNum(4))
    dispatch(setPageNum(3))
  }

  const goAudience = () => {
    dispatch(setCollapseNum(5))
    dispatch(setPageNum(3))
  }

  const goPages = () => {
    dispatch(setCollapseNum(6))
    dispatch(setPageNum(3))
  }



  const campaignNameChange = (e) => {
    dispatch(setCampaignName({ title: e }));
 }

  return (
    <div className="w-100 w-xxl-900px mx-auto">
      <div className="d-flex align-items-center">
        <input
          id="lastCampaignName"
          value={storeCampaignName.title}
          onChange={(e) => campaignNameChange(e.target.value)}
          className="border-0 h1"
          style={{
            transition: "width 0.3s",
            width: `${storeCampaignName.title.length}ch`,
          }}
        />
        <label htmlFor="lastCampaignName">
          <KTIcon iconName="pencil" className="fs-4" />
        </label>
        <div className="d-flex align-items-center bg-light px-4 py-2 rounded ms-3">
          Draft <span className="bg-danger p-2 rounded-circle ms-2"></span>
        </div>
      </div>

      <div className="d-flex flex-column flex-md-row gap-5 my-8 w-100">
        <div
          className="w-100 w-md-25 bg-light rounded-3"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            backgroundImage:
              "linear-gradient(45deg, rgba(0, 0, 0, 0.1) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.1) 75%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(45deg, rgba(0, 0, 0, 0.1) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.1) 75%, rgba(0, 0, 0, 0.1) 100%)",
            backgroundSize: "16px 16px",
            backgroundPosition: "0px 0px, 8px 8px",
          }}
        >
          iframe içinde popup gelecek
        </div>
        <div className="card card-xl-stretch w-md-75 w-100">
          <div className="card-header border-0 pt-5">
            <h3 className="card-title align-items-start flex-column">
              <span className="card-label fw-bold fs-3 mb-1">Popup Design</span>
            </h3>
            <div className="card-toolbar">
              <button
                type="button"
                className="btn btn-sm border btn-color-primary btn-active-light-primary"
                onClick={() => dispatch(setPageNum(4))}
              >
                Edit Design
              </button>
            </div>
          </div>
          <div className="card-body">
            <div className="item py-5 d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M164 224a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4Zm59.84-161.84a107.34 107.34 0 0 0-37.71-41.54a4 4 0 1 0-4.26 6.76a99.41 99.41 0 0 1 34.87 38.46a4 4 0 0 0 3.55 2.16a3.94 3.94 0 0 0 1.84-.45a4 4 0 0 0 1.71-5.39ZM39.26 65.84a99.41 99.41 0 0 1 34.87-38.46a4 4 0 0 0-4.26-6.76a107.34 107.34 0 0 0-37.71 41.54a4 4 0 0 0 1.71 5.39a3.94 3.94 0 0 0 1.84.45a4 4 0 0 0 3.55-2.16ZM218.36 178A12 12 0 0 1 208 196H48a12 12 0 0 1-10.36-18C47.17 161.56 52 139.37 52 112a76 76 0 0 1 152 0c0 27.36 4.83 49.55 14.36 66Zm-6.92 4C201.19 164.34 196 140.79 196 112a68 68 0 0 0-136 0c0 28.8-5.19 52.34-15.44 70a4 4 0 0 0 0 4a3.89 3.89 0 0 0 3.44 2h160a3.89 3.89 0 0 0 3.43-2a4 4 0 0 0 .01-4Z"
                />
              </svg>
              <div className="d-flex flex-column ms-5">
                <div className="fs-5 fw-bolder">Reminder</div>
                <div className="fs-7 fw-bolder text-success">ON</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card card-xl-stretch  my-8">
        <div className="card-header border-0 pt-5">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fw-bold fs-3 mb-1">
              Display Campaign Settings
            </span>
          </h3>
          <div className="card-toolbar">
            <button
              type="button"
              className="btn btn-sm border btn-color-primary btn-active-light-primary"
              onClick={() => dispatch(setPageNum(3))}
            >
              Edit Settings
            </button>
          </div>
        </div>
        <div className="card-body">
          <div className="item border-bottom py-5 d-flex align-items-center cursor-pointer" onClick={goDiscountRange}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M88 100H40a4 4 0 0 1-4-4V48a4 4 0 0 1 8 0v35.07a146.39 146.39 0 0 1 16.27-18C80.65 46.05 104.07 36 128 36c41.18 0 65.8 24.14 66.83 25.17a4 4 0 1 1-5.66 5.66C188.75 66.41 165.58 44 128 44c-42.2 0-70.62 33.94-80.59 48H88a4 4 0 0 1 0 8Zm128 56h-48a4 4 0 0 0 0 8h40.59c-10 14.06-38.39 48-80.59 48c-37.58 0-60.75-22.41-61.17-22.83a4 4 0 0 0-5.66 5.66c1 1 25.65 25.17 66.83 25.17c23.93 0 47.35-10.05 67.73-29.08a146.39 146.39 0 0 0 16.27-18V208a4 4 0 0 0 8 0v-48a4 4 0 0 0-4-4Z"
              />
            </svg>
            <div className="d-flex flex-column ms-5">
              <div className="fs-5 fw-bolder">Discount Range</div>
              <div className="fs-7 ">
                Selected discount range for Prediction Engine is {storeDiscountRange.minPercentage}% - {storeDiscountRange.maxPercentage}%
              </div>
            </div>
          </div>
          <div className="item border-bottom py-5 d-flex align-items-center cursor-pointer" onClick={goCampaignLimit}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M76 96a4 4 0 0 1-4 4H24a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4Zm-4 28H24a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8Zm0 32H24a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8Zm0 32H24a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8Zm80-64h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8Zm0 32h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8Zm0 32h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8Zm80-96h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8Zm-48-24h48a4 4 0 0 0 0-8h-48a4 4 0 0 0 0 8Zm48 56h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8Zm0 32h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8Zm0 32h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8Z"
              />
            </svg>
            <div className="d-flex flex-column ms-5">
              <div className="fs-5 fw-bolder">Campaign Limit</div>
              <div className="fs-7 ">
                Selected campaign limit: {storeCampaignLimit.selectedOption}
              </div>
            </div>
          </div>
          <div className="item border-bottom py-5 d-flex align-items-center cursor-pointer" onClick={goAudience}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M237 147.44a4 4 0 0 1-5.48-1.4c-8.33-14-20.93-22-34.56-22a4 4 0 0 1-1.2-.2a36.76 36.76 0 0 1-3.8.2a4 4 0 0 1 0-8a28 28 0 1 0-27.12-35a4 4 0 0 1-7.75-2a36 36 0 1 1 54 39.48c10.81 3.85 20.51 12 27.31 23.48a4 4 0 0 1-1.4 5.44ZM187.46 214a4 4 0 0 1-1.46 5.46a3.93 3.93 0 0 1-2 .54a4 4 0 0 1-3.46-2a61 61 0 0 0-105.08 0a4 4 0 0 1-6.92-4a68.35 68.35 0 0 1 39.19-31a44 44 0 1 1 40.54 0a68.35 68.35 0 0 1 39.19 31ZM128 180a36 36 0 1 0-36-36a36 36 0 0 0 36 36Zm-64-64a28 28 0 1 1 27.12-35a4 4 0 0 0 7.75-2a36 36 0 1 0-53.57 39.75a63.55 63.55 0 0 0-32.5 22.85a4 4 0 0 0 6.4 4.8A55.55 55.55 0 0 1 64 124a4 4 0 0 0 0-8Z"
              />
            </svg>
            <div className="d-flex flex-column ms-5">
              <div className="fs-5 fw-bolder">Audience</div>
              <div className="fs-7 ">
                New & returning visitors on Desktops and Tablets and other
                settings
              </div>
            </div>
          </div>
          <div className="item py-5 d-flex align-items-center cursor-pointer" onClick={goPages}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M220 128a4 4 0 0 1-4 4h-88a4 4 0 0 1 0-8h88a4 4 0 0 1 4 4Zm-92-60h88a4 4 0 0 0 0-8h-88a4 4 0 0 0 0 8Zm88 120h-88a4 4 0 0 0 0 8h88a4 4 0 0 0 0-8ZM85.17 45.17L56 74.34L42.83 61.17a4 4 0 0 0-5.66 5.66l16 16a4 4 0 0 0 5.66 0l32-32a4 4 0 0 0-5.66-5.66Zm0 64L56 138.34l-13.17-13.17a4 4 0 1 0-5.66 5.66l16 16a4 4 0 0 0 5.66 0l32-32a4 4 0 0 0-5.66-5.66Zm0 64L56 202.34l-13.17-13.17a4 4 0 0 0-5.66 5.66l16 16a4 4 0 0 0 5.66 0l32-32a4 4 0 0 0-5.66-5.66Z"
              />
            </svg>
            <div className="d-flex flex-column ms-5">
              <div className="fs-5 fw-bolder">Pages</div>
              <div className="fs-7 ">
                Display on (all/multiple) pages with IP Restriction, AI/ML ...
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card card-xl-stretch  my-8">
        <div className="card-header border-0 pt-5">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fw-bold fs-3 mb-1">Schedule</span>
          </h3>
          <div className="card-toolbar">
            <button
              type="button"
              className="btn btn-sm border btn-color-primary btn-active-light-primary"
              onClick={goSchedule}
            >
              Edit Schedule
            </button>
          </div>
        </div>
        <div className="card-body">
          <div className="item border-bottom py-5 d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28Zm0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92Zm34.22-95.33l-48-32A4 4 0 0 0 108 96v64a4 4 0 0 0 2.11 3.53a4 4 0 0 0 4.11-.2l48-32a4 4 0 0 0 0-6.66ZM116 152.53v-49.06L152.79 128Z"
              />
            </svg>
            <div className="d-flex flex-column ms-5">
              <div className="fs-5 fw-bolder">Start Date</div>
              <div className="fs-7 ">
                {!storeCampaignSchedule.isStartDateDisabled ? (<>
              {moment(storeCampaignSchedule.startDate).format("DD.MM.YYYY, HH:mm")}
              </>): (<>
              Start immediately
              </>)}
              </div>
            </div>
          </div>
          <div className="item py-5 d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28Zm0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92Zm24-120h-48a4 4 0 0 0-4 4v48a4 4 0 0 0 4 4h48a4 4 0 0 0 4-4v-48a4 4 0 0 0-4-4Zm-4 48h-40v-40h40Z"
              />
            </svg>
            <div className="d-flex flex-column ms-5">
              <div className="fs-5 fw-bolder">End Date</div>
              <div className="fs-7 ">
                {moment(storeCampaignSchedule.endDate).format("DD.MM.YYYY, HH:mm")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Step5 };
