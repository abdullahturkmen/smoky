import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";
import { KTIcon } from "../../../../../../_metronic/helpers";
import allLanguage from "../../../../../../_metronic/helpers/AllLanguage";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Geosuggest from '@ubilabs/react-geosuggest';
import './../../../../../../_metronic/assets/sass/components/geosuggest.css';
const CampaignAudience = () => {
    const [countryList, setCountryList] = useState([]);
    const [selectCountryList, setSelectCountryList] = useState([{ "value": "all", "label": "All locations" }, { "value": "spesific", "label": "Spesific regions" }]);
    // backende gönderilecek olan data değeri : devicesData
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const [selectedChannels, setSelectedChanneles] = useState(null);
    const [selectedShareVisitor, setSelectedShareVisitor] = useState(null);
    const [selectedBrowser, setSelectedBrowser] = useState(null)
    const [activeButtons, setActiveButtons] = useState(['All devices']);
    const [showDeviceDetail, setShowDeviceDetail] = useState(false)
    const [isAnd, setIsAnd] = useState(false);
    const [trafficSourceIsAnd, setTrafficSourceIsAnd] = useState(false);
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

    const trafficSourceOptions = [
        { value: "url0", label: "Is equal to" },
        { value: "url1", label: "Is not equal to" },
        { value: "url2", label: "Contains" },
        { value: "url3", label: "Does not contain" },
        { value: "url4", label: "Starts with" },
        { value: "url5", label: "Does not start with" },
        { value: "url6", label: "Does not end with" },
        { value: "url7", label: "Matches the RegEx" },
        { value: "url8", label: "Does not match the RegEx" }
    ];

    const utmSourceOptions = [
        { value: "source", label: "Source" },
        { value: "medium", label: "Medium" },
        { value: "campaign", label: "Campaign" },
        { value: "term", label: "Term" },
        { value: "content", label: "Content" },
    ];

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
    const returningVisitorsOption = [
        { value: "atlast", label: "At least" },
        { value: "lessthan", label: "Less than" },
        { value: "between", label: "Between" },
    ]
    const [selectedReturningVisitors, setSelectedReturningVisitors] = useState(returningVisitorsOption[0]);


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
    const changeReturningVisitors = (event) => {
        setSelectedReturningVisitors(event)
    }
    const countryChange = (event) => {
        setSelectedCountry(event);
    };
    const languageChange = (event) => {
        setSelectedLanguage(event)
    }
    const browserChange = (event) => {
        setSelectedBrowser(event);
    };
    const changeStatusDeviceDetail = () => {
        setShowDeviceDetail(!showDeviceDetail)
    }

    const devicesButtonClick = (buttonName) => {

        if (buttonName === 'All devices') {
            setActiveButtons(['All devices']);
            setShowDeviceDetail(false)
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

    const tooltipChannel = (event) => (
        <Tooltip id="tooltip" style={{ fontSize: '12px' }}>{event}</Tooltip>
    );
    const [trafficSourceUrlList, setTrafficSourceURL] = useState([{ URLType: null, url: "" }]);
    const [utmSourceUrlList, setUtmSourceURL] = useState([{ URLType: null, url: "", source: null }]);


    const addTrafficSourceURL = () => {
        setTrafficSourceURL([...trafficSourceUrlList, { URLType: null, url: "" }]);
    };

    const addUtmSourceURL = () => {
        setUtmSourceURL([...utmSourceUrlList, { URLType: null, url: "", source: null }]);
    };

    const andToOrFunction = () => {
        setIsAnd(!isAnd);
    };

    const trafficSourceAndToOr = () => {
        setTrafficSourceIsAnd(!trafficSourceIsAnd)
    }
    const removeTrafficSourceURL = (index) => {
        const updatedList = [...trafficSourceUrlList];
        updatedList.splice(index, 1);
        setTrafficSourceURL(updatedList);
    };

    const removeUtmSourceURL = (index) => {
        const updatedList = [...utmSourceUrlList];
        updatedList.splice(index, 1);
        setUtmSourceURL(updatedList);
    };

    const updateTrafficSourceURL = (index, field, value) => {
        const updatedList = [...trafficSourceUrlList];
        updatedList[index][field] = value;
        setTrafficSourceURL(updatedList);
    };

    const updateUtmSourceURL = (index, field, value) => {
        const updatedList = [...utmSourceUrlList];
        updatedList[index][field] = value;
        setUtmSourceURL(updatedList);
    };

    useEffect(
        () => {
            if (activeButtons.length === 0) {
                setActiveButtons(['All devices']);
            }
        },
        [activeButtons]
    )
    const geosuggestEl = useRef(null);
    const selectCountry = (e) => {
        if (!!e) {
            console.log('onSuggestSelect', e?.label);
            geosuggestEl.current.clear()
            geosuggestEl.current.focus()
            geosuggestEl.current.update('')
            setCountryList(current => [...countryList, { type: selectedCountryTypeOption, name: e?.label, id: countryList.length }])
        }
    }

    const deleteCountry = (e) => {
        console.log("index : ", e)


        setCountryList((countryListx) =>
            countryListx.filter((x) => x.id !== e)
        );
    }


    const clearCountry = () => {
        geosuggestEl.current.clear()
        geosuggestEl.current.focus()
        geosuggestEl.current.update('')
    }


    const [selectedCountryTypeOption, setSelectedCountryTypeOption] = useState('');

    const countryTypeChange = (e) => {
        setSelectedCountryTypeOption(e.target.value);
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
                    <div className="row">
                        <div className="col-12 mb-4">
                            <label
                                htmlFor="campaignname"
                                className="form-label fs-7 fw-bolder mb-1"
                            >
                                Devices
                            </label>
                            <div className="row">
                                <div className="col-12 d-flex flex-wrap gap-8">
                                    <div>
                                        <button
                                            type="button"
                                            className={`btn btn-sm ${activeButtons.includes('All devices') ? 'btn-primary' : 'btn-secondary'}`}
                                            onClick={() => devicesButtonClick('All devices')}
                                        >
                                            All devices
                                        </button>
                                    </div>
                                    <div>
                                        <button
                                            type="button"
                                            className={`btn btn-sm ${activeButtons.includes('Display on desktops') ? 'btn-primary' : 'btn-secondary'}`}
                                            onClick={() => devicesButtonClick('Display on desktops')}
                                        >
                                            Display on desktops
                                        </button>
                                        {activeButtons.includes('Display on desktops') && showDeviceDetail === true && (
                                            <div className="mt-5">
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
                                    <div>
                                        <button
                                            type="button"
                                            className={`btn btn-sm ${activeButtons.includes('Display on tablets') ? 'btn-primary' : 'btn-secondary'}`}
                                            onClick={() => devicesButtonClick('Display on tablets')}
                                        >
                                            Display on tablets
                                        </button>
                                        {activeButtons.includes('Display on tablets') && showDeviceDetail === true && (
                                            <div className="mt-5">
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
                                    <div>
                                        <button
                                            type="button"
                                            className={`btn btn-sm ${activeButtons.includes('Display on mobiles') ? 'btn-primary' : 'btn-secondary'}`}
                                            onClick={() => devicesButtonClick('Display on mobiles')}
                                        >
                                            Display on mobiles
                                        </button>
                                        {activeButtons.includes('Display on mobiles') && showDeviceDetail === true && (
                                            <div className="mt-5">
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
                                    <div>
                                        {!activeButtons.includes('All devices') && (
                                            <button type="button" className="btn btn-link btn-sm" onClick={changeStatusDeviceDetail}>
                                                {
                                                    !showDeviceDetail ? (<>Refine by OS</>) : (<>Close</>)
                                                }
                                            </button>
                                        )}
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="col-12 col-lg-7 col-md-9 mb-4">
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
                            {selectedShareVisitor?.value === 'returningVisitors' && (
                                <div className="mt-5 bg-light border rounded p-5">
                                    <label
                                        htmlFor="campaignname"
                                        className="form-label fs-7 fw-bolder mb-1"
                                    >
                                        Select which returning visitors should see your campaign.
                                    </label>
                                    <div className="row mt-5">
                                        <div className="d-flex flex-wrap gap-5 align-items-center">
                                            <div>Users who have visited</div>
                                            <Select
                                                options={returningVisitorsOption}
                                                onChange={changeReturningVisitors}
                                                value={selectedReturningVisitors}
                                                styles={{
                                                    control: (provided) => ({
                                                        ...provided,
                                                        width: '150px',
                                                    }),
                                                }}
                                            />
                                            <input
                                                className="form-control  form-control-solid border bg-white"
                                                type="number"
                                                style={{ width: '100px' }}
                                                min="0"
                                            />
                                            <div>times</div>
                                        </div>


                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="col-12 col-lg-7 col-md-9">
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
                            {selectedChannels?.value === 'trafficChannel' && (
                                <div className="mt-5 bg-light border rounded p-5">
                                    <div className="col-12 mb-4">
                                        <label
                                            htmlFor="campaignname"
                                            className="form-label fs-7 fw-bolder mb-1"
                                        >
                                            Target your visitors by traffic channel.
                                        </label>

                                    </div>
                                    <span className="d-flex gap-8 flex-wrap">
                                        <div>
                                            <input
                                                className='form-check-input me-2'
                                                type='checkbox'
                                                value='1'
                                            />
                                            <span className="me-3">Organic search</span>
                                            <OverlayTrigger placement="top" overlay={tooltipChannel('Visitors coming from search engine organic results (Google, Bing, etc.)')}>
                                                <span class="d-inline-block cursor-pointer" tabindex="0" data-toggle="tooltip">
                                                    <i class="bi bi-info-circle-fill"></i>
                                                </span>
                                            </OverlayTrigger>
                                        </div>
                                        <div >
                                            <input
                                                className='form-check-input me-2'
                                                type='checkbox'
                                                value='1'
                                            />

                                            <span className="me-3">Social</span>
                                            <OverlayTrigger placement="top" overlay={tooltipChannel('Visitors coming from social media (Facebook, Twitter, etc.)')}>
                                                <span class="d-inline-block cursor-pointer" tabindex="0" data-toggle="tooltip" >
                                                    <i class="bi bi-info-circle-fill"></i>
                                                </span>
                                            </OverlayTrigger>
                                        </div>
                                        <div >
                                            <input
                                                className='form-check-input me-2'
                                                type='checkbox'
                                                value='1'
                                            />

                                            <span className="me-3">Paid search</span>

                                            <OverlayTrigger placement="top" overlay={tooltipChannel('Visitors resulting from Adwords or Bing ads.')}>
                                                <span class="d-inline-block cursor-pointer" tabindex="0" data-toggle="tooltip">
                                                    <i class="bi bi-info-circle-fill"></i>
                                                </span>
                                            </OverlayTrigger>
                                        </div>
                                        <div >
                                            <input
                                                className='form-check-input me-2'
                                                type='checkbox'
                                                value='1'
                                            />

                                            <span className="me-3">Direct</span>

                                            <OverlayTrigger placement="top" overlay={tooltipChannel('Visitors coming after typing the URL in their browser')}>
                                                <span class="d-inline-block cursor-pointer" tabindex="0" data-toggle="tooltip" >
                                                    <i class="bi bi-info-circle-fill"></i>
                                                </span>
                                            </OverlayTrigger>

                                        </div>
                                        <div >
                                            <input
                                                className='form-check-input me-2'
                                                type='checkbox'
                                                value='1'
                                            />

                                            <span className="me-3">Others</span>

                                            <OverlayTrigger placement="top" overlay={tooltipChannel('Visitors coming from all other sources')}>
                                                <span class="d-inline-block cursor-pointer" tabindex="0" data-toggle="tooltip">
                                                    <i class="bi bi-info-circle-fill"></i>
                                                </span>
                                            </OverlayTrigger>


                                        </div>
                                    </span>

                                </div>
                            )}
                            {selectedChannels?.value === 'trafficSource' && (
                                <div className="mt-5 bg-light border rounded p-5">
                                    <div className="col-12 mb-4 mt-4">
                                        <label
                                            htmlFor="campaignname"
                                            className="form-label fs-7 fw-bolder mb-1"
                                        >
                                            Target the visitors coming from specific websites.
                                        </label>
                                    </div>

                                    <div>
                                        {trafficSourceUrlList.map((item, index) => (
                                            <div key={index} className="mb-2">

                                                <div className="row d-flex align-items-center mb-2">
                                                    {index === 0 ? (
                                                        <div className="col-2">
                                                            <span className="me-3">Source URL</span>
                                                            <OverlayTrigger placement="bottom" overlay={tooltipChannel('The initial referrer of the visit. Sub-domains of your domain are not considered as external sources. On Chrome, the source URL does not include the path.')}>
                                                                <span class="d-inline-block cursor-pointer" tabindex="0" data-toggle="tooltip">
                                                                    <i class="bi bi-info-circle-fill"></i>
                                                                </span>
                                                            </OverlayTrigger>
                                                        </div>
                                                    ) : (
                                                        <div className="bg-white d-flex gap-5 border rounded p-3 justify-content-center" onClick={trafficSourceAndToOr} style={{ width: '80px' }}>
                                                            <div className="text">{trafficSourceIsAnd ? 'AND' : 'OR'}</div>
                                                            <div className="icon">
                                                                {trafficSourceIsAnd ? (
                                                                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                                                                        <path d="M17.9188 8.17969H11.6888H6.07877C5.11877 8.17969 4.63877 9.33969 5.31877 10.0197L10.4988 15.1997C11.3288 16.0297 12.6788 16.0297 13.5088 15.1997L15.4788 13.2297L18.6888 10.0197C19.3588 9.33969 18.8788 8.17969 17.9188 8.17969Z" fill="#292D32" />
                                                                    </svg>
                                                                ) : (
                                                                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                                                                        <path d="M18.6806 13.9783L15.4706 10.7683L13.5106 8.79828C12.6806 7.96828 11.3306 7.96828 10.5006 8.79828L5.32056 13.9783C4.64056 14.6583 5.13056 15.8183 6.08056 15.8183H11.6906H17.9206C18.8806 15.8183 19.3606 14.6583 18.6806 13.9783Z" fill="#292D32" />
                                                                    </svg>
                                                                )}
                                                            </div>
                                                        </div>
                                                    )}
                                                    <div className="col-4">
                                                        <Select
                                                            options={trafficSourceOptions}
                                                            placeholder="URL"
                                                            className="form-control form-control-solid p-0"
                                                            onChange={(selectedOption) =>
                                                                updateTrafficSourceURL(index, "URLType", selectedOption)
                                                            }
                                                            value={item.URLType}
                                                        />
                                                    </div>
                                                    <div className="col-4">
                                                        <input
                                                            id="url"
                                                            type="text"
                                                            className="bg-white form-control form-control-md form-control-solid border"
                                                            value={item.url}
                                                            onChange={(e) =>
                                                                updateTrafficSourceURL(index, "url", e.target.value)
                                                            }
                                                        />
                                                    </div>
                                                    <div className="col-1">
                                                        {trafficSourceUrlList.length > 1 && index !== 0 && (
                                                            <button
                                                                type="button"
                                                                className="btn btn-light btn-sm"
                                                                onClick={() => removeTrafficSourceURL(index)}
                                                            >
                                                                <KTIcon iconName="trash" className="fs-3 text-danger" />
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        <button
                                            type="button"
                                            className="btn btn-primary mt-5 btn-sm"
                                            onClick={addTrafficSourceURL}
                                        ><KTIcon iconName="plus" className="fs-3" />Add rule
                                        </button>
                                    </div>

                                </div>
                            )}
                            {selectedChannels?.value === 'UTM' && (
                                <div className="mt-5 bg-light border rounded p-5">
                                    <div className="col-12 mb-4 mt-4">
                                        <label
                                            htmlFor="campaignname"
                                            className="form-label fs-7 fw-bolder mb-1"
                                        >
                                            Target your visitors by traffic UTM.
                                        </label>
                                    </div>

                                    <div>
                                        {utmSourceUrlList.map((item, index) => (
                                            <div key={index} className="mb-2">
                                                <div className="row d-flex align-items-center mb-2">
                                                    {index !== 0 && (

                                                        <div className="bg-white d-flex gap-5 border rounded p-3 justify-content-center" onClick={andToOrFunction} style={{ width: '80px' }}>

                                                            <div className="text">{isAnd ? 'AND' : 'OR'}</div>
                                                            <div className="icon">
                                                                {isAnd ? (
                                                                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                                                                        <path d="M17.9188 8.17969H11.6888H6.07877C5.11877 8.17969 4.63877 9.33969 5.31877 10.0197L10.4988 15.1997C11.3288 16.0297 12.6788 16.0297 13.5088 15.1997L15.4788 13.2297L18.6888 10.0197C19.3588 9.33969 18.8788 8.17969 17.9188 8.17969Z" fill="#292D32" />
                                                                    </svg>
                                                                ) : (
                                                                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                                                                        <path d="M18.6806 13.9783L15.4706 10.7683L13.5106 8.79828C12.6806 7.96828 11.3306 7.96828 10.5006 8.79828L5.32056 13.9783C4.64056 14.6583 5.13056 15.8183 6.08056 15.8183H11.6906H17.9206C18.8806 15.8183 19.3606 14.6583 18.6806 13.9783Z" fill="#292D32" />
                                                                    </svg>
                                                                )}
                                                            </div>
                                                        </div>
                                                    )}

                                                    <div className="col-3">
                                                        <Select
                                                            options={utmSourceOptions}
                                                            placeholder="Source"
                                                            className="form-control form-control-solid p-0"
                                                            onChange={(selectedOption) =>
                                                                updateUtmSourceURL(index, "source", selectedOption)
                                                            }
                                                            value={item.source}
                                                        />
                                                    </div>
                                                    <div className="col-3">
                                                        <Select
                                                            options={trafficSourceOptions}
                                                            placeholder="URL"
                                                            className="form-control form-control-solid p-0"
                                                            onChange={(selectedOption) =>
                                                                updateUtmSourceURL(index, "URLType", selectedOption)
                                                            }
                                                            value={item.URLType}
                                                        />
                                                    </div>
                                                    <div className="col-3">
                                                        <input
                                                            id="url"
                                                            type="text"
                                                            className="bg-white form-control form-control-md form-control-solid border"
                                                            value={item.url}
                                                            onChange={(e) =>
                                                                updateUtmSourceURL(index, "url", e.target.value)
                                                            }
                                                        />
                                                    </div>
                                                    <div className="col-1">
                                                        {utmSourceUrlList.length > 1 && index !== 0 && (
                                                            <button
                                                                type="button"
                                                                className="btn btn-light btn-sm"
                                                                onClick={() => removeUtmSourceURL(index)}
                                                            >
                                                                <KTIcon iconName="trash" className="fs-3 text-danger" />
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        <button
                                            type="button"
                                            className="btn btn-primary mt-5 btn-sm"
                                            onClick={addUtmSourceURL}
                                        ><KTIcon iconName="plus" className="fs-3" />Add rule
                                        </button>
                                    </div>

                                </div>
                            )}
                        </div>

                        <div className="col-12 col-lg-7 col-md-9 mb-4">
                            <label
                                htmlFor="campaignname"
                                className="form-label fs-7 fw-bolder mb-1"
                            >
                                Countries
                            </label>
                            <Select
                                options={selectCountryList}
                                placeholder="Countries"
                                className="form-control form-control-solid p-0"
                                onChange={countryChange}
                                value={selectedCountry}
                            />
                        </div>
                        {selectedCountry?.value === "spesific" && (<>
                            <div className="col-12 mb-4">
                                <div className="bg-light border rounded p-5">
                                    <div className="d-flex align-items-start mt-4">
                                        <select
                                            value={selectedCountryTypeOption} onChange={countryTypeChange}
                                            style={{ height: '40px' }}
                                            name='timezone'
                                            aria-label='Select a Timezone'
                                            data-control='select2'
                                            data-placeholder='date_period'
                                            className='form-select form-select-sm  me-2 w-25'
                                        >
                                            <option value='inc'>Include</option>
                                            <option value='exc'>Exclude</option>
                                        </select>
                                        <Geosuggest onSuggestSelect={selectCountry} ref={geosuggestEl} placeholder="Search state" className="flex-grow-1 w-75" />
                                        <button type="button" onClick={clearCountry} className="btn">X</button>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                        {countryList?.map((e, index) => (<>
                                            <div className="d-flex  align-items-center bg-warning m-1 rounded ps-2 mw-25 text-truncate" key={index}>
                                                <span className=" mw-75 text-truncate">{e.type === 'exc' && (<>
                                                    ({e.type})
                                                </>)}{e.name}</span>
                                                <button type="button" onClick={() => deleteCountry(e.id)} className="btn btn-sm">x</button>
                                            </div>
                                        </>))}
                                    </div>
                                </div>
                            </div>
                        </>)}

                        <div className="col-12 col-lg-7 col-md-9 mb-4">
                            <label
                                htmlFor="campaignname"
                                className="form-label fs-7 fw-bolder mb-1"
                            >
                                Language
                            </label>
                            <Select
                                options={allLanguage}
                                placeholder="Language"
                                className="form-control form-control-solid p-0"
                                onChange={languageChange}
                                value={selectedLanguage}
                                isMulti={true}
                            />
                        </div>
                        <div className="col-12 col-lg-7 col-md-9 ">
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
                        </div>
                        <div className="col-12 mb-4">
                            {selectedBrowser?.value === 'selectBrowser' && (
                                <div className="mt-5 d-flex gap-10 flex-wrap bg-light border rounded p-5">
                                    <div><input className='form-check-input me-2' type='checkbox' value='1' /> Chrome</div>
                                    <div><input className='form-check-input me-2' type='checkbox' value='1' /> Safari</div>
                                    <div><input className='form-check-input me-2' type='checkbox' value='1' /> Internet Explorer</div>
                                    <div><input className='form-check-input me-2' type='checkbox' value='1' /> Firefox</div>
                                    <div><input className='form-check-input me-2' type='checkbox' value='1' /> Opera</div>
                                    <div><input className='form-check-input me-2' type='checkbox' value='1' /> Edge</div>
                                </div>
                            )}
                        </div>
                        <div className="col-12 mb-4">
                            <label
                                className="form-label fs-7 fw-bolder mb-1"
                            >
                                Behavior
                            </label>
                            <div className="col-12 my-2 d-flex align-items-center gap-5">
                                <input
                                    className='form-check-input me-2'
                                    type='checkbox'
                                    value='1'
                                    checked={devicesData['Display on desktops'].options.Windows}
                                    onChange={() => deviceCheckboxChange('Display on desktops', 'Windows')}
                                />
                                Exclude visitors who already saw
                                <input
                                    className="form-control border form-control-solid"
                                    type="number"
                                    style={{ width: '100px' }}
                                    min="0"
                                /> popups during the session
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export { CampaignAudience };
