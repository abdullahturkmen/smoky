import { useState } from "react";
import { KTIcon } from "../../../../../../_metronic/helpers";

const CampaignName = () => {
    const [companyName, setCompanyName] = useState('Untitled campaign')

    return (
        <div className="accordion-item mb-8 shadow">
            <h2 className="accordion-header" id="headingOne">
                <button
                    className="accordion-button fs-4 fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                >
                    Campaign Name
                    <KTIcon
                        iconName="check-square"
                        className="fs-1 ms-4 text-success"
                    />
                </button>
            </h2>
            <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body ">
                    <div className="row">
                        <div className="col-12 col-lg-6 mb-4">
                            <label
                                htmlFor="campaignname"
                                className="form-label fs-7 fw-bolder mb-1"
                            >
                                Campaign name
                            </label>
                            <input
                                id="campaignname"
                                type="text"
                                className="form-control form-control-lg form-control-solid"
                                placeholder="Campaign name"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { CampaignName };
