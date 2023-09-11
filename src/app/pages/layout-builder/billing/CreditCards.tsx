import React, { useState, useEffect } from "react";

const CreditCards = () => {
  // Kart bilgilerini saklamak için bir state oluşturalım
  const [cards, setCards] = useState([
    {
      id: 1,
      name: "Marcus Morris 1",
      cardType: "Visa",
      cardNumber: "9768 4567 9657 4566",
      expiration: "09/24",
      cvv: "234",
      primary: false,
    },
    {
      id: 2,
      name: "Jacob Holder 2",
      cardType: "Mastercard",
      cardNumber: "9867 8768 4567 2040",
      expiration: "10/22",
      cvv: "856",
      primary: true,
    },
    {
      id: 3,
      name: "Jhon Larson 3",
      cardType: "Mastercard",
      cardNumber: "1234 4355 6543 1290",
      expiration: "03/23",
      cvv: "567",
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

  const maskCreditCardNumber = (cardNumber) => {
    const numString = cardNumber.toString();
    const firstThree = numString.slice(0, 3);
    const lastThree = numString.slice(-3);
    const middleStars = "*".repeat(numString.length - 6);
    const maskedNumber = `${firstThree}${middleStars}${lastThree}`;
    return maskedNumber;
  };

  const makePrimary = (cardId) => {
    console.log("card id : ", cardId);
  };

  return (
    <>
      <div className="card  mb-10 mb-xl-10">
        <div className="card-header card-header-stretch pb-0">
          <div className="card-title">
            <h3 className="m-0">Payment Methods</h3>
          </div>
        </div>

        <div
          id="kt_billing_payment_tab_content"
          className="card-body tab-content"
        >
          <div
            id="kt_billing_creditcard"
            className="tab-pane fade active show"
            role="tabpanel"
            aria-labelledby="kt_billing_creditcard_tab"
          >
            <div className="row gx-9 gy-6">
              {sortObjectsByPrimary(cards).map((card) => (
                <div
                  className="col-xl-6"
                  key={card.id}
                  data-kt-billing-element="card"
                >
                  <div className="card card-dashed h-xl-100 flex-row flex-stack flex-wrap p-6">
                    <div className="d-flex flex-column py-2">
                      <div className="d-flex align-items-center fs-4 fw-bold mb-5">
                        {card.name}
                        {card.primary && (
                          <span className="badge badge-light-success fs-7 ms-2">
                            Primary
                          </span>
                        )}
                      </div>

                      <div className="d-flex align-items-center">
                        <img
                          src={`/metronic8/demo1/assets/media/svg/card-logos/${card.cardType.toLowerCase()}.svg`}
                          alt=""
                          className="me-4"
                        />

                        <div>
                          <div className="fs-4 fw-bold">
                            {card.cardType} <br />
                            {maskCreditCardNumber(card.cardNumber)}
                          </div>
                          <div className="fs-6 fw-semibold text-gray-400">
                            Card expires at {card.expiration}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex align-items-center py-2">
                      <button
                        type="button"
                        className="btn btn-sm btn-danger btn-active-light-primary me-3"
                        data-kt-billing-action="card-delete"
                        data-bs-toggle="modal"
                        data-bs-target="#DeletePaymentCardModal"
                      >
                        <span className="indicator-label">Delete</span>

                        <span className="indicator-progress">
                          Please wait...{" "}
                          <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                        </span>
                      </button>
                      {card.primary == false && (
                        <>
                          <button
                            type="button"
                            className="btn btn-sm btn-light btn-active-light-primary"
                            onClick={() => makePrimary(card.id)}
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
                <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed h-lg-100 p-6">
                  <div className="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
                    <div className="mb-3 mb-md-0 fw-semibold">
                      <h4 className="text-gray-900 fw-bold">Important Note!</h4>

                      <div className="fs-6 text-gray-700 pe-7">
                        Please carefully read{" "}
                        <a href="#" className="fw-bold me-1">
                          Product Terms
                        </a>{" "}
                        adding <br /> your new payment card
                      </div>
                    </div>

                    <a
                      href="#"
                      className="btn btn-primary px-6 align-self-center text-nowrap"
                      data-bs-toggle="modal"
                      data-bs-target="#AddPaymentCardModal"
                    >
                      Add Card{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { CreditCards };
