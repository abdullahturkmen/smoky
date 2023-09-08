import React, { useState } from "react";

type Plan = {
  name: string;
  description: string;
  priceMonthly: number;
  priceAnnual: number;
  features: { name: string; isAvailable: boolean }[];
};

const plans: Plan[] = [
  {
    name: "Startup",
    description: "Optimal for 10+ team size and new startup",
    priceMonthly: 39,
    priceAnnual: 399,
    features: [
      { name: "Up to 10 Active Users", isAvailable: true },
      { name: "Up to 30 Project Integrations", isAvailable: true },
      { name: "Analytics Module", isAvailable: true },
      { name: "Finance Module", isAvailable: false },
      { name: "Accounting Module", isAvailable: false },
      { name: "Network Platform", isAvailable: false },
      { name: "Unlimited Cloud Space", isAvailable: false },
    ],
  },
  {
    name: "Advanced",
    description: "Optimal for 100+ team size and grown company",
    priceMonthly: 339,
    priceAnnual: 3399,
    features: [
      { name: "Up to 10 Active Users", isAvailable: true },
      { name: "Up to 30 Project Integrations", isAvailable: true },
      { name: "Analytics Module", isAvailable: true },
      { name: "Finance Module", isAvailable: true },
      { name: "Accounting Module", isAvailable: true },
      { name: "Network Platform", isAvailable: false },
      { name: "Unlimited Cloud Space", isAvailable: false },
    ],
  },
  {
    name: "Enterprise",
    description: "Optimal for 1000+ team and enterprise",
    priceMonthly: 999,
    priceAnnual: 9999,
    features: [
      { name: "Up to 10 Active Users", isAvailable: true },
      { name: "Up to 30 Project Integrations", isAvailable: true },
      { name: "Analytics Module", isAvailable: true },
      { name: "Finance Module", isAvailable: true },
      { name: "Accounting Module", isAvailable: true },
      { name: "Network Platform", isAvailable: true },
      { name: "Unlimited Cloud Space", isAvailable: true },
    ],
  },
];

type Props = {};

const PricingScreen: React.FC<Props> = ({ }) => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const planSelect = (plan: Plan) => {
    setSelectedPlan(plan);
  };

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
            {/* <div
              className="nav-group nav-group-outline mx-auto mb-15"
              data-kt-buttons="true"
              data-kt-initialized="1"
            >
              <button
                className="btn btn-color-gray-600 btn-active btn-active-secondary px-6 py-3 me-2 active"
                data-kt-plan="month"
              >
                Monthly
              </button>

              <button
                className="btn btn-color-gray-600 btn-active btn-active-secondary px-6 py-3"
                data-kt-plan="annual"
              >
                Annual
              </button>
            </div> */}
            <div className="row g-10">
              {plans.map((plan, index) => (
                <div className="col-xl-4" key={index}>
                  <div className="d-flex h-100 align-items-center">
                    <div className="w-100 d-flex flex-column flex-center rounded-3 bg-light bg-opacity-75 py-15 px-10">
                      <div className="mb-7 text-center">
                        <h1 className="text-dark mb-5 fw-bolder">
                          {plan.name}
                        </h1>

                        <div className="text-gray-600 fw-semibold mb-5">
                          {plan.description}
                        </div>

                        <div className="text-center">
                          <span className="mb-2 text-primary">$</span>

                          <span
                            className="fs-3x fw-bold text-primary"
                            data-kt-plan-price-month={plan.priceMonthly}
                            data-kt-plan-price-annual={plan.priceAnnual}
                          >
                            {selectedPlan === plan ? (
                              selectedPlan.priceMonthly
                            ) : (
                              <span>{plan.priceMonthly}</span>
                            )}{" "}
                          </span>

                          <span className="fs-7 fw-semibold opacity-50">
                            /<span data-kt-element="period">Mon</span>
                          </span>
                        </div>
                      </div>

                      <div className="w-100 mb-10">
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
                      </div>

                      <button
                        onClick={() => planSelect(plan)}
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
