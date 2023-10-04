import React, { useState } from "react";
import Select from "react-select";
import countries from "../../../../../../_metronic/helpers/AllCountry";

const CampaignAudience = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedDevices, setSelectedDevices] = useState(null);
    const [selectedChannels, setSelectedChanneles] = useState(null);
    const [selectedShareVisitor, setSelectedShareVisitor] = useState(null);
    const [selectedBrowser, setSelectedBrowser] = useState(null)
    const shareVisitorOptions = [
        { value: "allVisitors", label: "All visitors" },
        { value: "newVisitors", label: "New visitors" },
        { value: "returningVisitors", label: "Returning visitors" },
    ];
    const channelsOptions = [
        { value: "allChannel", label: "All channel" },
        { value: "trafficChannel", label: "Traffic channel" },
        { value: "trafficSource", label: "Traffic source" },
        { value: "UTM", label: "UTM" },
    ];
    const devicesOptions = [
        { value: "allDevices", label: "All devices" },
        { value: "displayDesktops", label: "Display on desktops" },
        { value: "displayTablets", label: "Display on tablets" },
        { value: "displayMobile", label: "Display on mobile" },
    ];

    const browserOptions = [
        { value: "allBrowsers", label: "All Browsers" },
        { value: "selectBrowser", label: "Select Browsers" },
    ];

    const shareVisitorChange = (event) => {
        setSelectedShareVisitor(event);
    };

    const channelsChange = (event) => {
        setSelectedChanneles(event);
    };
    const devicesChange = (event) => {
        setSelectedDevices(event);
    };

    const countryChange = (event) => {
        setSelectedCountry(event);
    };
    const browserChange = (event) => {
        setSelectedBrowser(event);
        console.log('event', event)
    };
    return (
        <div className="accordion-item mb-8 shadow border-top">
            <h2 className="accordion-header" id="headingFive">
                <button
                    className="accordion-button collapsed fs-4 fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                >
                    Campaign Audience
                </button>
            </h2>
            <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body">
                    <div className="row mt-5">
                        <div className="col-12 mb-4">
                            <label
                                htmlFor="campaignname"
                                className="form-label fs-7 fw-bolder mb-1"
                            >
                                Share of Visitors
                            </label>
                            <Select
                                options={shareVisitorOptions}
                                placeholder="Share of Visitors"
                                className="form-control form-control-solid p-0"
                                onChange={shareVisitorChange}
                                value={selectedShareVisitor}
                            />
                        </div>
                        <div className="col-12 mb-4">
                            <label
                                htmlFor="campaignname"
                                className="form-label fs-7 fw-bolder mb-1"
                            >
                                Channels
                            </label>
                            <Select
                                options={channelsOptions}
                                placeholder="All Channels"
                                className="form-control form-control-solid p-0"
                                onChange={channelsChange}
                                value={selectedChannels}
                            />
                        </div>
                        <div className="col-12 mb-4">
                            <label
                                htmlFor="campaignname"
                                className="form-label fs-7 fw-bolder mb-1"
                            >
                                Devices
                            </label>
                            <Select
                                options={devicesOptions}
                                placeholder="All Devices"
                                className="form-control form-control-solid p-0"
                                onChange={devicesChange}
                                value={selectedDevices}
                            />
                        </div>
                        <div className="col-12 mb-4">
                            <label
                                htmlFor="campaignname"
                                className="form-label fs-7 fw-bolder mb-1"
                            >
                                Countries
                            </label>
                            <Select
                                options={countries}
                                placeholder="Countries"
                                className="form-control form-control-solid p-0"
                                onChange={countryChange}
                                isMulti={true}
                                value={selectedCountry}
                            />
                        </div>
                        <div className="col-12 mb-4">
                            <label
                                className="form-label fs-7 fw-bolder mb-1"
                            >
                                Browser
                            </label>
                            <Select
                                options={browserOptions}
                                placeholder="Browsers"
                                className="form-control form-control-solid p-0"
                                onChange={browserChange}
                                value={selectedBrowser}
                            />
                            {selectedBrowser.value === 'selectBrowser' && (
                                <div className="row alert alert-info mt-5">
                                    <div className="col-6 col-lg-2 col-md-4 my-2"><input className='form-check-input' type='checkbox' value='1' /> Chrome</div>
                                    <div className="col-6 col-lg-2 col-md-4 my-2"><input className='form-check-input' type='checkbox' value='1' /> Safari</div>
                                    <div className="col-6 col-lg-2 col-md-4 my-2"><input className='form-check-input' type='checkbox' value='1' /> Internet Explorer</div>
                                    <div className="col-6 col-lg-2 col-md-4 my-2"><input className='form-check-input' type='checkbox' value='1' /> Firefox</div>
                                    <div className="col-6 col-lg-2 col-md-4 my-2"><input className='form-check-input' type='checkbox' value='1' /> Opera</div>
                                    <div className="col-6 col-lg-2 col-md-4 my-2"><input className='form-check-input' type='checkbox' value='1' /> Edge</div>
                                </div>
                            )}

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export { CampaignAudience };
