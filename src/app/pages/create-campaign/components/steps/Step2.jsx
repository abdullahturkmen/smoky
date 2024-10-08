import React, { FC, useState } from "react";
import { KTIcon } from "../../../../../_metronic/helpers";
import clsx from "clsx";
import { useDispatch, useSelector } from 'react-redux';
import { setPageNum,setCollapseNum } from "../../../../../store/reducers/createCampaignReducer";

const Step2 = () => {
  const dispatch = useDispatch();
  const [tab, setTab] = useState("all");

  const templateList = [
    { types: "popup", title: "bu popup 1" },
  ];

  const nextSection = () => {
    dispatch(setPageNum(3))
    dispatch(setCollapseNum(1))
  }

  return (
    <div className="w-100 w-xxl-900px mx-auto">
      <div className="pb-10 pb-lg-15">
        <h2 className="fw-bolder text-dark">Template Details</h2>

        <div className="text-gray-400 fw-bold fs-6 d-none">
          If you need more info, please check out
          <a href="/dashboard" className="link-primary fw-bolder">
            {" "}
            Help Page
          </a>
          .
        </div>
      </div>

      <div className="mb-10 fv-row d-none">
        <label className="d-flex align-items-center form-label mb-3">
          Select one of the templates optimized to achieve your goal.
        </label>
      </div>

      <ul className="nav nav-pills d-none">
        <li className="nav-item">
          <a
            className={clsx(`nav-link  `, { "active ": tab === "all" })}
            onClick={() => setTab("all")}
            aria-current="page"
            href="#"
          >
            All
          </a>
        </li>
        <li className="nav-item">
          <a
            className={clsx(`nav-link  `, { "active ": tab === "popup" })}
            onClick={() => setTab("popup")}
            href="#"
          >
            Popup
          </a>
        </li>
        <li className="nav-item ">
          <a
            className={clsx(`nav-link  `, { "active ": tab === "banner" })}
            onClick={() => setTab("banner")}
            href="#"
          >
            Banner
          </a>
        </li>
      </ul>
      <div className="row flex-wrap">
        {templateList?.map((e, index) => (
          <React.Fragment key={index}>
            <div
              className={`col-6 p-5 
        ${tab != "all" && tab != e.types ? "d-none" : ""}
       
    `}
            >
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{e.title}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a className="btn btn-primary" onClick={() => nextSection()}>
                    select
                  </a>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export { Step2 };
