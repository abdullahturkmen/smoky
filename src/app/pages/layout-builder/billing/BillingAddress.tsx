import React, { useState, useEffect } from "react";

const BillingAddress = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      address: "Ap #285-7193 Ullamcorper Avenue",
      city: "Amesbury",
      state: "HI",
      zip: "93373",
      country: "US",
      primary: false,
    },
    {
      id: 2,
      address: "1234 Elm Street",
      city: "Springfield",
      state: "IL",
      zip: "62701",
      country: "US",
      primary: true,
    },
    {
      id: 3,
      address: "5678 Oak Avenue",
      city: "Oakland",
      state: "CA",
      zip: "94601",
      country: "US",
      primary: false,
    },
  ]);


  const sortObjectsByPrimary = (arr) => {
    return arr.sort((a, b) => {
      if (a.primary === true && b.primary === false) return -1; // a önce gelmeli
      if (a.primary === false && b.primary === true) return 1; // b önce gelmeli
      return 0; // Değerler eşit
    });
  };

  const makePrimary = (addressId) => {
    console.log("adres id : ", addressId);
  };


  return (
    <>
      <div className="card mb-10">
        <div className="card-header card-header-stretch pb-0">
          <div className="card-title">
            <h3 className="m-0">Billing Address</h3>
          </div>
        </div>
        <div className="card-body p-9">
          <div className="row gx-9 gy-6">
            {sortObjectsByPrimary(addresses).map((address) => (
              <div
                className="col-xl-6"
                key={address.id}
                data-kt-billing-element="address"
              >
                <div className="card card-dashed h-xl-100 flex-row flex-stack flex-wrap p-6">
                  <div className="d-flex flex-column py-2">
                    <div className="d-flex align-items-center fs-5 fw-bold mb-3">
                      Address {address.id}
                      {address.primary && (
                        <span className="badge badge-light-success fs-7 ms-2">
                          Primary
                        </span>
                      )}
                    </div>

                    <div className="fs-6 fw-semibold text-gray-600">
                      {address.address}
                      <br />
                      {address.city} {address.state} {address.zip}
                      <br />
                      {address.country}
                    </div>
                  </div>

                  <div className="d-flex align-items-center py-2">
                    <button
                      type="button"
                      className="btn btn-sm btn-danger btn-active-light-primary me-3"
                      data-kt-billing-action="address-delete"
                      data-bs-toggle="modal"
                      data-bs-target="#DeleteBillingAddressModal"
                    >
                      <span className="indicator-label">Delete</span>

                      <span className="indicator-progress">
                        Please wait...{" "}
                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                      </span>
                    </button>
                    {address.primary == false && (
                      <>
                        <button
                          type="button"
                          className="btn btn-sm btn-light btn-active-light-primary"
                          onClick={() => makePrimary(address.id)}
                        >
                          Set Primary
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div className="col-xl-6">
              <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed flex-stack h-xl-100 mb-10 p-6">
                <div className="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
                  <div className="mb-3 mb-md-0 fw-semibold">
                    <h4 className="text-gray-900 fw-bold">
                      This is a very important note!
                    </h4>

                    <div className="fs-6 text-gray-700 pe-7">
                      Writing headlines for blog posts is much science and
                      probably cool audience
                    </div>
                  </div>

                  <a
                    href="#"
                    className="btn btn-primary px-6 align-self-center text-nowrap"
                    data-bs-toggle="modal"
                    data-bs-target="#AddBillingAddressModal"
                  >
                    New Address{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
    </>
  );
};

export { BillingAddress };
