import React, { useState, useEffect } from "react";
import { getPricingPlans } from './core/_request'
// type Plan = {
//   name: string;
//   description: string;
//   priceMonthly: number;
//   priceAnnual: number;
//   features: { name: string; isAvailable: boolean }[];
// };



const PricingScreen = () => {
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [plansList, setPlansList] = useState([])
  const [monthly, setMonthly] = useState([])
  const [year, setYear] = useState([])

  const plansListTypeChange = (plan) => {
    setSelectedPlan(plan)
    if (plan == "monthly") {
      return setPlansList(monthly);
    }
    setPlansList(year)
  };



  useEffect(() => {
    console.log(' getPricingPlans()', getPricingPlans())
    getPricingPlans()
      .then((data) => {
        const monthlyData = data.filter((e) => e.interval === 'month');
        const yearData = data.filter((e) => e.interval === 'year');

        setMonthly(monthlyData);
        setYear(yearData);

        setPlansList(monthlyData)
      })
      .catch((error) => {
        console.error("Error fetching pricing plans: ", error);
      });
  }, []);

  const formatAmount = (amount, currencyCode) => {
    try {
      const currencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currencyCode
      });
      return currencyFormat.format(amount);
    } catch (error) {
      console.error('Para birimi formatı oluşturulamadı:', error);
      return null;
    }
  }


  return (
    <>
      <div className="card" id="kt_pricing">
        <div className="card-body p-lg-17">
          <div className="d-flex flex-column">
            <div className="mb-13 text-center">
              <h1 className="fs-2hx fw-bold mb-5">Choose Your Plan</h1>

              <div className="text-gray-600 fw-semibold fs-5">
                If you need more info about our pricing, please check{" "}
                <a href="#" className="link-primary fw-bold">
                  Pricing Guidelines
                </a>
                .
              </div>
            </div>
            <div
              className="nav-group nav-group-outline mx-auto mb-15"
              data-kt-buttons="true"
              data-kt-initialized="1"
            >
              <button
                className={`btn btn-color-gray-600 ${selectedPlan === 'monthly' ? 'btn-active btn-active-secondary active' : ''
                  } px-6 py-3 me-2`}
                data-kt-plan="month"
                onClick={() => plansListTypeChange('monthly')}
              >
                Monthly
              </button>

              <button
                className={`btn btn-color-gray-600 ${selectedPlan === 'year' ? 'btn-active btn-active-secondary active' : ''
                  } px-6 py-3`}
                data-kt-plan="annual"
                onClick={() => plansListTypeChange('year')}
              >
                Annual
              </button>
            </div>

            <div className="row g-10">
              {plansList.map((plan, index) => (
                <div className="col-xl-4" key={index}>
                  <div className="d-flex h-100 align-items-center">
                    <div className="w-100 d-flex flex-column flex-center rounded-3 bg-light bg-opacity-75 py-15 px-10">
                      <div className="mb-7 text-center">
                        <h1 className="text-dark mb-5 fw-bolder">
                          {plan.nickname}
                        </h1>

                        <div className="text-gray-600 fw-semibold mb-5">
                          plan.description
                        </div>

                        <div className="text-center">

                          <span
                            className="fs-3x fw-bold text-primary"

                          >

                            {formatAmount(plan.amount, plan.currency)}

                          </span>

                          <span className="fs-7 fw-semibold opacity-50">
                            /<span data-kt-element="period">Mon</span>
                          </span>
                        </div>
                      </div>

                      {/* <div className="w-100 mb-10">
                        {plan.features.map((feature, featureIndex) => (
                          <div
                            className="d-flex align-items-center mb-5"
                            key={featureIndex}
                          >
                            <span className="fw-semibold fs-6 text-gray-800 flex-grow-1 pe-3">
                              {feature.name}
                            </span>
                            {feature.isAvailable ? (
                              <i className="ki-duotone ki-check-circle fs-1 text-success">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </i>
                            ) : (
                              <i className="ki-duotone ki-cross-circle fs-1">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </i>
                            )}
                          </div>
                        ))}
                      </div> */}

                      <button

                        className={`btn btn-sm btn-primary ${selectedPlan === plan ? "disabled" : ""
                          }`}
                      >
                        {selectedPlan === plan ? "Selected" : "Select"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { PricingScreen };
