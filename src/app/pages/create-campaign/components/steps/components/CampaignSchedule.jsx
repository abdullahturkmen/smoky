import React, { useState, useEffect } from "react";
import { KTIcon } from "../../../../../../_metronic/helpers";
import DatePicker from "react-datepicker";
import Select from "react-select";
import ct from 'countries-and-timezones'

import "react-datepicker/dist/react-datepicker.css";

const CampaignSchedule = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [isStartDateDisabled, setIsStartDateDisabled] = useState(true);
    const [timeZoneOptions, setTimeZoneOptions] = useState([]);

    const [selectedTimeZone, setSelectedTimeZone] = useState(null);

    const timeZoneChange = (event) => {
        setSelectedTimeZone(event);
    };
    const daysOptions = [
        { value: "Everyday", label: "Everyday" },
        { value: "Sunday", label: "Sunday" },
        { value: "Monday", label: "Monday" },
        { value: "Tuesday", label: "Tuesday" },
        { value: "Wednesday", label: "Wednesday" },
        { value: "Thursday", label: "Thursday" },
        { value: "Friday", label: "Friday" },
        { value: "Saturday", label: "Saturday" },
    ];


    useEffect(() => {
        const countryList = ct.getAllTimezones();
        var list = []
        Object.entries(countryList)?.sort((a, b) => a.utcOffset - b.utcOffset).map(item => {
            list.push({ value: item[1].utcOffsetStr, label: `GMT ${item[1].utcOffsetStr} ${item[1].name}` })

            if (item[0] == "Europe/Istanbul") {
                setSelectedTimeZone({ value: item[1].utcOffsetStr, label: `GMT ${item[1].utcOffsetStr} ${item[1].name}` })
            }

        })
        setTimeZoneOptions(list)

    }, [])



    const hourOptions = [];
    const minutesOptions = [];

    for (let hour = 0; hour < 24; hour++) {
        for (let minute = 0; minute < 60; minute += 30) {
            const formattedHour = hour.toString().padStart(2, "0");
            const formattedMinute = minute.toString().padStart(2, "0");
            const timeValue = `${formattedHour}:${formattedMinute}`;
            hourOptions.push({ value: timeValue, label: timeValue });
        }
    }
    for (let hour = 0; hour < 24; hour++) {
        for (let minute = 30; minute < 60; minute += 30) {
            const formattedHour = hour.toString().padStart(2, "0");
            const formattedMinute = minute.toString().padStart(2, "0");
            const timeValue = `${formattedHour}:${formattedMinute}`;
            minutesOptions.push({ value: timeValue, label: timeValue });
        }
    }

    minutesOptions.push({ value: "23:59", label: "23:59" });

    const [timeList, setTimeList] = useState([
        {
            day: { value: "Everyday", label: "Everyday" },
            startHour: { value: "00:00", label: "00:00" },
            endHour: { value: "23:30", label: "23:30" },
        },
    ]);

    const addTime = () => {
        setTimeList([
            ...timeList,
            {
                day: { value: "Everyday", label: "Everyday" },
                startHour: { value: "00:00", label: "00:00" },
                endHour: { value: "23:30", label: "23:30" },
            },
        ]);
    };

    const updateTimeList = (index, field, value) => {
        const updatedList = [...timeList];
        updatedList[index][field] = value;
        setTimeList(updatedList);
    };
    const removeTime = (indexToRemove) => {
        setTimeList((prevTimeList) => {
            return prevTimeList.filter((_, index) => index !== indexToRemove);
        });
    };

    useEffect(() => {
        if (endDate < startDate) {
            setEndDate(startDate);
        }
    }, [startDate, endDate]);
    const changeRadioButton = (e) => {
        const value = e.target.value;
        if (value === "startImmediately") {
            setStartDate(new Date());
            setIsStartDateDisabled(true);
        } else {
            setIsStartDateDisabled(false);
        }
    };

    const getMinTime = () => {
        const minTime = new Date();
        minTime.setHours(0);
        minTime.setMinutes(0);
        return minTime;
    };

    const getMaxTime = () => {
        const maxTime = new Date();
        maxTime.setHours(23);
        maxTime.setMinutes(45);
        return maxTime;
    };

    const filterTime = (time) => {
        const now = new Date();
        if (endDate.getDate() > now.getDate()) {
            return true;
        }
        return time.getHours() >= now.getHours();
    };
    return (
        <div className="accordion-item mb-8 shadow border-top">
            <h2 className="accordion-header" id="headingTwo">
                <button
                    className="accordion-button collapsed fs-4 fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                >
                    Campaign Schedule
                    <KTIcon iconName="information-5" className="fs-1 ms-4 text-danger" />
                </button>
            </h2>
            <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body">
                    <div className="">
                        <div className="d-inline-block">
                            <label
                                htmlFor="campaignname"
                                className="form-label fs-7 fw-bolder mb-1"
                            >
                                Time Zone
                            </label>
                            <Select
                                options={timeZoneOptions}
                                placeholder="Time Zone"
                                className="form-control form-control-solid p-0"
                                value={selectedTimeZone}
                                onChange={timeZoneChange}
                            />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12 col-md-4">
                            <div className="row">
                                <div className="col-12 mb-4">
                                    <label className="form-label fs-7 fw-bolder me-5">
                                        Start immediately
                                    </label>
                                    <input
                                        className="form-check-input"
                                        name="communication[]"
                                        type="radio"
                                        value="startImmediately"
                                        onChange={changeRadioButton}
                                        defaultChecked
                                    />
                                </div>
                                <div className="col-12">
                                    <label className="form-label fs-7 fw-bolder me-5">
                                        Choose start date
                                    </label>
                                    <input
                                        className="form-check-input"
                                        name="communication[]"
                                        type="radio"
                                        value="chooseStartDate"
                                        onChange={changeRadioButton}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-8">

                            <div className="row">
                                <div className="col-12 col-md-6 mb-4 d-flex flex-column">
                                    {isStartDateDisabled ? null : (
                                        <>
                                            <label
                                                htmlFor="campaignname"
                                                className="form-label fs-7 fw-bolder mb-1"
                                            >
                                                Select start date
                                            </label>
                                            <DatePicker
                                                className="form-control form-control-lg form-control-solid w-100"
                                                selected={startDate}
                                                onChange={(date) => setStartDate(date)}
                                                minDate={new Date()}
                                                showTimeSelect
                                                showYearDropdown
                                                minTime={getMinTime()}
                                                maxTime={getMaxTime()}
                                                dateFormat="dd/MM/yyyy h:mm aa"
                                                yearDropdownItemNumber={15}
                                                scrollableYearDropdown
                                                timeIntervals={15}
                                            />
                                        </>
                                    )}
                                </div>
                                <div className="col-12 col-md-6 mb-4 d-flex flex-column">
                                    <label
                                        htmlFor="campaignname"
                                        className="form-label fs-7 fw-bolder mb-1"
                                    >
                                        Select end date
                                    </label>
                                    <DatePicker
                                        className="form-control form-control-lg form-control-solid "
                                        selected={endDate}
                                        onChange={(date) => setEndDate(date)}
                                        minDate={startDate}
                                        showTimeSelect
                                        showYearDropdown
                                        minTime={getMinTime()}
                                        maxTime={getMaxTime()}
                                        dateFormat="dd/MM/yyyy h:mm aa"
                                        yearDropdownItemNumber={15}
                                        scrollableYearDropdown
                                        timeIntervals={15}
                                        filterTime={filterTime}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 border-top"></div>
                    <div className="row mt-5">
                        <label htmlFor="min" className="form-label fs-7 fw-bolder">
                            Detailed schedule
                        </label>
                        {timeList.map((item, index) => (
                            <div className="col-12 d-flex gap-5 mt-4" key={index}>
                                {timeList.length > 1 && (
                                    <button
                                        type="button"
                                        className="btn btn-light btn-sm"
                                        onClick={() => removeTime(index)}
                                    >
                                        <KTIcon iconName="trash" className="fs-3 text-danger" />
                                    </button>
                                )}
                                <Select
                                    options={daysOptions}
                                    placeholder="Everyday"
                                    className="form-control form-control-solid p-0"
                                    value={item.day}
                                    onChange={(selectedOption) =>
                                        updateTimeList(index, "day", selectedOption)
                                    }
                                />
                                <Select
                                    options={hourOptions}
                                    placeholder="Time"
                                    className="form-control form-control-solid p-0"
                                    value={item.startHour}
                                    onChange={(selectedOption) =>
                                        updateTimeList(index, "startHour", selectedOption)
                                    }
                                />
                                <Select
                                    options={minutesOptions}
                                    placeholder="Time 2"
                                    className="form-control form-control-solid p-0"
                                    value={item.endHour}
                                    onChange={(selectedOption) =>
                                        updateTimeList(index, "endHour", selectedOption)
                                    }
                                />
                            </div>
                        ))}

                        <div className="col-2">
                            <button
                                className="btn btn-sm btn-primary mt-5"
                                type="button"
                                onClick={addTime}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { CampaignSchedule };
