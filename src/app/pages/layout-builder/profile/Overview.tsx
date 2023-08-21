/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { KTIcon } from "../../../../_metronic/helpers";

export function Overview() {
  const [editModeVisible, setEditModeVisible] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('Abdullah Türkmen');
  const [company, setCompany] = useState<string>('Türkmenx');
  const [phone, setPhone] = useState<string>('0537 299 70 45');
  const [mail, setMail] = useState<string>('abdullahtrkmn13@gmail.com');
  const [country, setCountry] = useState<string>('İstanbul');

  useEffect(() => {
    if(!editModeVisible){
      saveProfile()
    }
   
  }, [editModeVisible])
  
  

  const saveProfile = () => {
    console.log("değişik")
  }
  return (
    <>
      <div className="card mb-5 mb-xl-10" id="kt_profile_details_view">
        <div className="card-header cursor-pointer">
          <div className="card-title m-0">
            <h3 className="fw-bolder m-0">Profile Details</h3>
          </div>

          <div
            onClick={() =>
              setEditModeVisible((editModeVisible) => !editModeVisible)
            }
            className="btn btn-primary align-self-center"
          >
            Edit Profile
          </div>
        </div>

        <div className="card-body p-9">
          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">Full Name</label>

            <div className="col-lg-8">
              {editModeVisible ? (
                <input
                  type="text"
                  className="form-control form-control-lg form-control-solid"
                  value={userName}
                  placeholder="Full name"
                  onChange={
                    e => setUserName(e.target.value)
                }
                />
              ) : (
                <span className="fw-bold fs-6">{userName}</span>
              )}
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">Company</label>

            <div className="col-lg-8 fv-row">
            {editModeVisible ? (
                <input
                  type="text"
                  className="form-control form-control-lg form-control-solid"
                  value={company}
                  placeholder="Company"
                  onChange={
                    e => setCompany(e.target.value)
                }
                />
              ) : (
                <span className="fw-bold fs-6">{company}</span>
              )}
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">Contact Phone</label>

            <div className="col-lg-8 d-flex align-items-center">
            {editModeVisible ? (
                <input
                  type="text"
                  className="form-control form-control-lg form-control-solid"
                  value={phone}
                  placeholder="Phone"
                  onChange={
                    e => setPhone(e.target.value)
                }
                />
              ) : (
                <span className="fw-bold fs-6">{phone}</span>
              )}
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">Email Address</label>

            <div className="col-lg-8">
            {editModeVisible ? (
                <input
                  type="text"
                  className="form-control form-control-lg form-control-solid"
                  value={mail}
                  placeholder="Email Address"
                  onChange={
                    e => setMail(e.target.value)
                }
                />
              ) : (
                <span className="fw-bold fs-6">{mail}</span>
              )}
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">Country</label>

            <div className="col-lg-8">
            {editModeVisible ? (
                <input
                  type="text"
                  className="form-control form-control-lg form-control-solid"
                  value={country}
                  placeholder="Country"
                  onChange={
                    e => setCountry(e.target.value)
                }
                />
              ) : (
                <span className="fw-bold fs-6">{country}</span>
              )}
            </div>
          </div>
        </div>
        {editModeVisible && <div onClick={() => setEditModeVisible(false)} className="btn btn-success align-self-end">Kaydet</div>}
        
      </div>
    </>
  );
}
