import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";
import { KTIcon } from "../../../../../../_metronic/helpers";
import allLanguage from "../../../../../../_metronic/helpers/AllLanguage";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Geosuggest from '@ubilabs/react-geosuggest';
import './../../../../../../_metronic/assets/sass/components/geosuggest.css';
import { ToastContainer, toast } from 'react-toastify';

import { useDispatch, useSelector } from 'react-redux';
import { setCollapseNum, setCampaignAudience } from "../../../../../../store/reducers/createCampaignReducer";



const CampaignAudience = () => {
    const dispatch = useDispatch();
    const storeCollapseNum = useSelector((state) => state.createCampaign.collapseNum)
    const storeCampaignAudience = useSelector((state) => state.createCampaign.campaignAudience)


    const [countryList, setCountryList] = useState([]);
    const [selectCountryList, setSelectCountryList] = useState([{ "value": "all", "label": "All locations" }, { "value": "spesific", "label": "Spesific regions" }]);
    const [selectCountryType, setSelectCountryType] = useState([{ "value": "inc", "label": "Include" }, { "value": "exc", "label": "Exclude" }]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const [selectedChannels, setSelectedChanneles] = useState(null);
    const [selectedShareVisitor, setSelectedShareVisitor] = useState(null);
    const [selectedBrowser, setSelectedBrowser] = useState(null)
    const [activeButtons, setActiveButtons] = useState(['All devices']);
    const [showDeviceDetail, setShowDeviceDetail] = useState(false)
    const [isAnd, setIsAnd] = useState(false);
    const [trafficSourceIsAnd, setTrafficSourceIsAnd] = useState(false);
    const [popupSawCount, setPopupSawCount] = useState(5);
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(1);
    const [inTheLast, setInTheLast] = useState(5);

    useEffect(() => {
        console.log("storeCampaignAudience.devicesList : ", storeCampaignAudience.devicesList)
    }, [storeCampaignAudience.devicesList])


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
        console.log("checkbox basıldı :", {a: buttonName, b: optionName})



        //dispatch(setCampaignAudience({ ...storeCampaignAudience, endDate: storeCampaignSchedule.startDate }))
        const updatedDevicesList = { ...storeCampaignAudience.devicesList };
        
        updatedDevicesList['Display on tablets'].options = {
            ...updatedDevicesList['Display on tablets'].options,
            Android: false,
          };

        var asd = () => {
            const updatedDevicesDataEski = { ...storeCampaignAudience.devicesList };
            if (buttonName === 'All devices') {
                for (const name in updatedDevicesDataEski) {
                    for (const key in updatedDevicesDataEski[name].options) {
                        updatedDevicesDataEski[name].options[key] = true;
                    }
                }
            } else {
                updatedDevicesDataEski[buttonName].options[optionName] = !updatedDevicesDataEski[buttonName].options[optionName];
            }
            return updatedDevicesDataEski;
        }

        console.log("checkbox sonuç :", updatedDevicesList)

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

    const returningVisitorsTimeOption = [
        { value: "min", label: "Min." },
        { value: "hours", label: "Hours" },
        { value: "days", label: "Days" },
        { value: "months", label: "Months" },
    ]

    const [selectedReturningVisitors, setSelectedReturningVisitors] = useState(returningVisitorsOption[0]);
    const [selectedTimeVisitors, setSelectedTimeVisitors] = useState(returningVisitorsTimeOption[0]);


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
    const changeReturningTimeVisitors = (event) => {
        setSelectedTimeVisitors(event)
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
    const [visibleReturningDetail, setVisibleReturningDetail] = useState(false)
    const changeVisibleVisitorDetail = () => {
        setVisibleReturningDetail(!visibleReturningDetail)
    }
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
            geosuggestEl.current.clear()
            geosuggestEl.current.focus()
            geosuggestEl.current.update('')
            setCountryList(current => [...countryList, { type: selectedCountryTypeOption.value, name: e?.label, id: countryList.length }])
        }
    }

    const deleteCountry = (e) => {
        setCountryList((data) =>
            data.filter((x) => x.id !== e)
        );
    }


    const clearCountry = () => {
        geosuggestEl.current.clear()
        geosuggestEl.current.focus()
        geosuggestEl.current.update('')
    }


    const [selectedCountryTypeOption, setSelectedCountryTypeOption] = useState(selectCountryType[0]);

    const countryTypeChange = (e) => {
        setSelectedCountryTypeOption(e);
    };

    const popupSawCountChange = (event) => {
        if (parseInt(event.target.value) >= 0) {
            setPopupSawCount(parseInt(event.target.value))
        }
        else {
            setPopupSawCount(0)
        }
    }


    const minValChange = (event) => {

        if (parseInt(event.target.value) >= 0) {
            setMinValue(parseInt(event.target.value))
        }
        else {
            setMinValue(0)
        }

    }

    const maxValChange = (event) => {

        if (parseInt(event.target.value) > 0) {
            setMaxValue(parseInt(event.target.value))
        }
        else {
            setMaxValue(1)
        }
    }

    const checkMaxValue = (event) => {

        if (selectedReturningVisitors?.value === 'between' && parseInt(minValue) >= parseInt(maxValue)) {

            // if (parseInt(event.target.value) <= parseInt(minValue)) {
            toast.warning('The maximum value cannot be equal to or less than the minimum value', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            //   return false
            // }

            setMaxValue(parseInt(minValue) + 1)
        }
    }
    const checkMinValue = (event) => {
        if (selectedReturningVisitors?.value === 'between' && parseInt(minValue) >= parseInt(maxValue)) {

            toast.warning('The minimum value cannot be equal to or greater than the maximum value', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            setMinValue(parseInt(maxValue) - 1)
        }
    }

    useEffect(() => {
        checkMaxValue()
    }, [selectedReturningVisitors])

    const inTheLastValChange = (event) => {

        if (parseInt(event.target.value) >= 0) {
            setInTheLast(parseInt(event.target.value))
        }
        else {
            setInTheLast(0)
        }

    }

    return (<>
        <ToastContainer />
        <div className="accordion-item mb-8 shadow border-top">
            <h2 className="accordion-header" id="headingFive">
                <button
                    className="accordion-button collapsed fs-4 fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                    onClick={() => dispatch(setCollapseNum(5))}
                >
                    Campaign Audience
                </button>
            </h2>
            <div
                id="collapseFive"
                className={`accordion-collapse collapse ${storeCollapseNum == "5" ? 'show' : ''}`}
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



                                    {Object.keys(storeCampaignAudience.devicesList).map((device, index) => (
                                        <div key={index}>
                                            <button
                                                type="button"
                                                className={`btn btn-sm ${activeButtons.includes(device) ? 'btn-primary' : 'btn-secondary'}`}
                                                onClick={() => devicesButtonClick(device)}
                                            >
                                                {device}
                                            </button>
                                            <p>Selected: {storeCampaignAudience.devicesList[device].selected.toString()}</p>
                                            {activeButtons.includes(device) && showDeviceDetail && (<>
                                                <div className="mt-5">
                                                    {Object.keys(storeCampaignAudience.devicesList[device].options).map((option, optionIndex) => (<>



                                                        <div className="col-12 my-2">
                                                            <label className="form-check form-check-inline ">
                                                                <input
                                                                    className='form-check-input me-2'
                                                                    type='checkbox'
                                                                    value='1'
                                                                    checked={storeCampaignAudience.devicesList[device].options[option]}
                                                                    onChange={() => deviceCheckboxChange(device, option)}
                                                                />
                                                                {option}
                                                            </label>
                                                        </div>

                                                    </>
                                                    ))}
                                                </div>
                                            </>)}
                                        </div>
                                    ))}

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
                        </div>

                        {selectedShareVisitor?.value === 'returningVisitors' && (
                            <div className="col-12  mb-4">
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
                                                value={minValue}
                                                onChange={minValChange}
                                                onBlur={checkMinValue}
                                                min="0"
                                            />
                                            {
                                                selectedReturningVisitors?.value === 'between' && (
                                                    <>And
                                                        <input
                                                            className="form-control  form-control-solid border bg-white"
                                                            type="number"
                                                            style={{ width: '100px' }}
                                                            value={maxValue}
                                                            onChange={maxValChange}
                                                            onBlur={checkMaxValue}
                                                            min={minValue + 1}
                                                        /></>
                                                )
                                            }
                                            <div>times</div>
                                            {!visibleReturningDetail && (
                                                <button type="button" className="btn btn-sm btn-link" onClick={changeVisibleVisitorDetail}>Refine</button>
                                            )
                                            }
                                        </div>
                                    </div>

                                    {
                                        visibleReturningDetail && (
                                            <div className="row mt-2">
                                                <div className="d-flex flex-wrap gap-5 align-items-center">
                                                    <div>In the last</div>
                                                    <input
                                                        className="form-control  form-control-solid border bg-white"
                                                        type="number"
                                                        style={{ width: '100px' }}
                                                        min="0"
                                                        value={inTheLast}
                                                        onChange={inTheLastValChange}
                                                    />
                                                    <Select
                                                        options={returningVisitorsTimeOption}
                                                        onChange={changeReturningTimeVisitors}
                                                        value={selectedTimeVisitors}
                                                        styles={{
                                                            control: (provided) => ({
                                                                ...provided,
                                                                width: '150px',
                                                            }),
                                                        }}
                                                    />
                                                    <button
                                                        type="button"
                                                        className="btn btn-light btn-sm"
                                                        onClick={changeVisibleVisitorDetail}
                                                    >
                                                        <KTIcon iconName="trash" className="fs-3 text-danger" />
                                                    </button>

                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        )}

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

                                            <label className="form-check form-check-inline ">
                                                <input
                                                    className='form-check-input me-2'
                                                    type='checkbox'
                                                    value='1'
                                                />
                                                <span className="me-3">Organic search</span>

                                            </label>
                                            <OverlayTrigger placement="top" overlay={tooltipChannel('Visitors coming from search engine organic results (Google, Bing, etc.)')}>
                                                <span className="d-inline-block cursor-pointer" tabindex="0" data-toggle="tooltip">
                                                    <i className="bi bi-info-circle-fill"></i>
                                                </span>
                                            </OverlayTrigger>
                                        </div>
                                        <div >
                                            <label className="form-check form-check-inline ">
                                                <input
                                                    className='form-check-input me-2'
                                                    type='checkbox'
                                                    value='1'
                                                />

                                                <span className="me-3">Social</span>
                                            </label>
                                            <OverlayTrigger placement="top" overlay={tooltipChannel('Visitors coming from social media (Facebook, Twitter, etc.)')}>
                                                <span className="d-inline-block cursor-pointer" tabindex="0" data-toggle="tooltip" >
                                                    <i className="bi bi-info-circle-fill"></i>
                                                </span>
                                            </OverlayTrigger>
                                        </div>
                                        <div >
                                            <label className="form-check form-check-inline ">
                                                <input
                                                    className='form-check-input me-2'
                                                    type='checkbox'
                                                    value='1'
                                                />

                                                <span className="me-3">Paid search</span>
                                            </label>
                                            <OverlayTrigger placement="top" overlay={tooltipChannel('Visitors resulting from Adwords or Bing ads.')}>
                                                <span className="d-inline-block cursor-pointer" tabindex="0" data-toggle="tooltip">
                                                    <i className="bi bi-info-circle-fill"></i>
                                                </span>
                                            </OverlayTrigger>
                                        </div>
                                        <div >
                                            <label className="form-check form-check-inline ">
                                                <input
                                                    className='form-check-input me-2'
                                                    type='checkbox'
                                                    value='1'
                                                />

                                                <span className="me-3">Direct</span>
                                            </label>
                                            <OverlayTrigger placement="top" overlay={tooltipChannel('Visitors coming after typing the URL in their browser')}>
                                                <span className="d-inline-block cursor-pointer" tabindex="0" data-toggle="tooltip" >
                                                    <i className="bi bi-info-circle-fill"></i>
                                                </span>
                                            </OverlayTrigger>

                                        </div>
                                        <div >
                                            <label className="form-check form-check-inline ">
                                                <input
                                                    className='form-check-input me-2'
                                                    type='checkbox'
                                                    value='1'
                                                />

                                                <span className="me-3">Others</span>
                                            </label>
                                            <OverlayTrigger placement="top" overlay={tooltipChannel('Visitors coming from all other sources')}>
                                                <span className="d-inline-block cursor-pointer" tabindex="0" data-toggle="tooltip">
                                                    <i className="bi bi-info-circle-fill"></i>
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
                                                                <span className="d-inline-block cursor-pointer" tabindex="0" data-toggle="tooltip">
                                                                    <i className="bi bi-info-circle-fill"></i>
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
                                        <Select
                                            options={selectCountryType}
                                            className="form-control form-control-solid me-2 w-25 p-0"
                                            onChange={countryTypeChange}
                                            value={selectedCountryTypeOption}
                                        />



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
                                    <div><label className="form-check form-check-inline "><input className='form-check-input me-2' type='checkbox' value='1' /> Chrome</label></div>
                                    <div><label className="form-check form-check-inline "><input className='form-check-input me-2' type='checkbox' value='1' /> Safari</label></div>
                                    <div><label className="form-check form-check-inline "><input className='form-check-input me-2' type='checkbox' value='1' /> Internet Explorer</label></div>
                                    <div><label className="form-check form-check-inline "><input className='form-check-input me-2' type='checkbox' value='1' /> Firefox</label></div>
                                    <div><label className="form-check form-check-inline "><input className='form-check-input me-2' type='checkbox' value='1' /> Opera</label></div>
                                    <div><label className="form-check form-check-inline "><input className='form-check-input me-2' type='checkbox' value='1' /> Edge</label></div>
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
                                <label className="form-check form-check-inline ">
                                    <input
                                        className='form-check-input me-2'
                                        type='checkbox'
                                        value='1'
                                        //checked={devicesDataEski['Display on desktops'].options.Windows}
                                        onChange={() => deviceCheckboxChange('Display on desktops', 'Windows')}
                                    />
                                    <span>Exclude visitors who already saw</span>
                                </label>
                                <input
                                    className="form-control border form-control-solid"
                                    type="number"
                                    style={{ width: '100px' }}
                                    min="0"
                                    value={popupSawCount}
                                    onChange={popupSawCountChange}
                                   // disabled={!devicesDataEski['Display on desktops'].options.Windows}
                                /> popups during the session
                            </div>
                        </div>

                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <button type="button" className="btn btn-sm btn-primary m-5" onClick={() => dispatch(setCollapseNum(6))} id="headingTwo">Continue <KTIcon
                        iconName="arrow-right"
                        className="fs-3 ms-2 me-0"
                    /></button>
                </div>
            </div>
        </div>
    </>
    );
};

export { CampaignAudience };
