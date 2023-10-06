import React, { useState, useEffect } from "react";
import Select from "react-select";
import countries from "../../../../../../_metronic/helpers/AllCountry";
import allLanguage from "../../../../../../_metronic/helpers/AllLanguage";
const CampaignAudience = () => {
    // backende gönderilecek olan data değeri : devicesData
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const [selectedChannels, setSelectedChanneles] = useState(null);
    const [selectedShareVisitor, setSelectedShareVisitor] = useState(null);
    const [selectedBrowser, setSelectedBrowser] = useState(null)
    const [activeButtons, setActiveButtons] = useState(['All devices']);
    const [devicesData, setDevicesData] = useState({
        'Display on desktops': {
            selected: false,
            options: {
                Windows: true,
                Mac: true,
                Linux: true,
            },
        },
        'Display on tablets': {
            selected: false,
            options: {
                iPad: true,
                Android: true,
            },
        },
        'Display on mobiles': {
            selected: false,
            options: {
                iPhone: true,
                Android: true,
                'Windows Phone': true,
            },
        },
    });

    const deviceCheckboxChange = (buttonName, optionName) => {
        setDevicesData((prevDevicesData) => {
          const updatedDevicesData = { ...prevDevicesData };
          if (buttonName === 'All devices') {
            for (const name in updatedDevicesData) {
              for (const key in updatedDevicesData[name].options) {
                updatedDevicesData[name].options[key] = true;
              }
            }
          } else {
             updatedDevicesData[buttonName].options[optionName] = !updatedDevicesData[buttonName].options[optionName];
          }
          return updatedDevicesData;
        });
      };
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

    const countryChange = (event) => {
        setSelectedCountry(event);
    };
    const languageChange = (event) => {
        setSelectedLanguage(event)
    }
    const browserChange = (event) => {
        setSelectedBrowser(event);
    };

    const devicesButtonClick = (buttonName) => {

        if (buttonName === 'All devices') {
            setActiveButtons(['All devices']);
        } else {
            setActiveButtons((prevActiveButtons) => {
                const updatedButtons = prevActiveButtons.filter((name) => name !== 'All devices');
                if (updatedButtons.includes(buttonName)) {
                    return updatedButtons.filter((name) => name !== buttonName);
                } else {
                    return [...updatedButtons, buttonName];
                }
            });
        }
    };

    useEffect(
        () => {
            if (activeButtons.length === 0) {
                setActiveButtons(['All devices']);
            }
        },
        [activeButtons]
    )
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
                            <div className="row">
                                <div className="col-3">
                                    <button
                                        type="button"
                                        className={`btn ${activeButtons.includes('All devices') ? 'btn-primary' : 'btn-secondary'}`}
                                        onClick={() => devicesButtonClick('All devices')}
                                    >
                                        All devices
                                    </button>
                                </div>
                                <div className="col-3">
                                    <button
                                        type="button"
                                        className={`btn ${activeButtons.includes('Display on desktops') ? 'btn-primary' : 'btn-secondary'}`}
                                        onClick={() => devicesButtonClick('Display on desktops')}
                                    >
                                        Display on desktops
                                    </button>
                                    {activeButtons.includes('Display on desktops') && (
                                        <div className="row mt-5">
                                            <div className="col-12 my-2">
                                                <input
                                                    className='form-check-input me-2'
                                                    type='checkbox'
                                                    value='1'
                                                    checked={devicesData['Display on desktops'].options.Windows}
                                                    onChange={() => deviceCheckboxChange('Display on desktops', 'Windows')}
                                                />
                                                Windows
                                            </div>
                                            <div className="col-12 my-2">
                                                <input
                                                    className='form-check-input me-2'
                                                    type='checkbox'
                                                    value='1'
                                                    checked={devicesData['Display on desktops'].options.Mac}
                                                    onChange={() => deviceCheckboxChange('Display on desktops', 'Mac')}
                                                />
                                                Mac
                                            </div>
                                            <div className="col-12 my-2">
                                                <input
                                                    className='form-check-input me-2'
                                                    type='checkbox'
                                                    value='1'
                                                    checked={devicesData['Display on desktops'].options.Linux}
                                                    onChange={() => deviceCheckboxChange('Display on desktops', 'Linux')}
                                                />
                                                Linux
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="col-3">
                                    <button
                                        type="button"
                                        className={`btn ${activeButtons.includes('Display on tablets') ? 'btn-primary' : 'btn-secondary'}`}
                                        onClick={() => devicesButtonClick('Display on tablets')}
                                    >
                                        Display on tablets
                                    </button>
                                    {activeButtons.includes('Display on tablets') && (
                                        <div className="row mt-5">
                                            <div className="col-12 my-2">
                                                <input
                                                    className='form-check-input me-2'
                                                    type='checkbox'
                                                    value='1'
                                                    checked={devicesData['Display on tablets'].options.iPad}
                                                    onChange={() => deviceCheckboxChange('Display on tablets', 'iPad')}
                                                />
                                                iPad
                                            </div>
                                            <div className="col-12 my-2">
                                                <input
                                                    className='form-check-input me-2'
                                                    type='checkbox'
                                                    value='1'
                                                    checked={devicesData['Display on tablets'].options.Android}
                                                    onChange={() => deviceCheckboxChange('Display on tablets', 'Android')}
                                                />
                                                Android
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="col-3">
                                    <button
                                        type="button"
                                        className={`btn ${activeButtons.includes('Display on mobiles') ? 'btn-primary' : 'btn-secondary'}`}
                                        onClick={() => devicesButtonClick('Display on mobiles')}
                                    >
                                        Display on mobiles
                                    </button>
                                    {activeButtons.includes('Display on mobiles') && (
                                        <div className="row mt-5">
                                            <div className="col-12 my-2">
                                                <input
                                                    className='form-check-input me-2'
                                                    type='checkbox'
                                                    value='1'
                                                    checked={devicesData['Display on mobiles'].options.iPhone}
                                                    onChange={() => deviceCheckboxChange('Display on mobiles', 'iPhone')}
                                                />
                                                iPhone
                                            </div>
                                            <div className="col-12 my-2">
                                                <input
                                                    className='form-check-input me-2'
                                                    type='checkbox'
                                                    value='1'
                                                    checked={devicesData['Display on mobiles'].options.Android}
                                                    onChange={() => deviceCheckboxChange('Display on mobiles', 'Android')}
                                                />
                                                Android
                                            </div>
                                            <div className="col-12 my-2">
                                                <input
                                                    className='form-check-input me-2'
                                                    type='checkbox'
                                                    value='1'
                                                    checked={devicesData['Display on mobiles'].options['Windows Phone']}
                                                    onChange={() => deviceCheckboxChange('Display on mobiles', 'Windows Phone')}
                                                />
                                                Windows Phone
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>


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
                                htmlFor="campaignname"
                                className="form-label fs-7 fw-bolder mb-1"
                            >
                                Language
                            </label>
                            <Select
                                options={allLanguage}
                                placeholder="Countries"
                                className="form-control form-control-solid p-0"
                                onChange={languageChange}
                                value={selectedLanguage}
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
                            {selectedBrowser?.value === 'selectBrowser' && (
                                <div className="row mt-5">
                                    <div className="col-6 col-lg-2 col-md-4 my-2"><input className='form-check-input me-2' type='checkbox' value='1' /> Chrome</div>
                                    <div className="col-6 col-lg-2 col-md-4 my-2"><input className='form-check-input me-2' type='checkbox' value='1' /> Safari</div>
                                    <div className="col-6 col-lg-2 col-md-4 my-2"><input className='form-check-input me-2' type='checkbox' value='1' /> Internet Explorer</div>
                                    <div className="col-6 col-lg-2 col-md-4 my-2"><input className='form-check-input me-2' type='checkbox' value='1' /> Firefox</div>
                                    <div className="col-6 col-lg-2 col-md-4 my-2"><input className='form-check-input me-2' type='checkbox' value='1' /> Opera</div>
                                    <div className="col-6 col-lg-2 col-md-4 my-2"><input className='form-check-input me-2' type='checkbox' value='1' /> Edge</div>
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
