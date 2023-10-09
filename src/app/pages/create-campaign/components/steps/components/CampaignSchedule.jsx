import React, { useState, useEffect } from "react";
import { KTIcon } from "../../../../../../_metronic/helpers";
import DatePicker from "react-datepicker";
import Select from "react-select";

import "react-datepicker/dist/react-datepicker.css";

const CampaignSchedule = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [isStartDateDisabled, setIsStartDateDisabled] = useState(true);
    const timeZoneOptions = [
        { value: "1", label: "GMT -1200" },
        { value: "2", label: "GMT -1100" },
        { value: "3", label: "GMT -1000" },
        { value: "4", label: "GMT -0900" },
        { value: "5", label: "GMT -0800" },
        { value: "6", label: "GMT -0700" },
        { value: "7", label: "GMT -0600" },
        { value: "8", label: "GMT -0500" },
        { value: "9", label: "GMT -0400" },
        { value: "10", label: "GMT -0330" },
        { value: "11", label: "GMT -0300" },
        { value: "12", label: "GMT -0200" },
        { value: "13", label: "GMT -0100" },
        { value: "14", label: "GMT +0000" },
        { value: "15", label: "GMT +0100" },
        { value: "16", label: "GMT +0200" },
        { value: "17", label: "GMT +0300 (GMT+03:00)" },
        { value: "18", label: "GMT +0330" },
        { value: "19", label: "GMT +0400" },
        { value: "20", label: "GMT +0430" },
        { value: "21", label: "GMT +0500" },
        { value: "22", label: "GMT +0530" },
        { value: "23", label: "GMT +0545" },
        { value: "24", label: "GMT +0600" },
        { value: "25", label: "GMT +0630" },
        { value: "26", label: "GMT +0700" },
        { value: "27", label: "GMT +0800" },
        { value: "28", label: "GMT +0900" },
        { value: "29", label: "GMT +0930" },
        { value: "30", label: "GMT +1000" },
        { value: "31", label: "GMT +1100" },
        { value: "32", label: "GMT +1200" },
        { value: "33", label: "GMT +1300" },
    ];
    const [selectedTimeZone, setSelectedHourZone] = useState(timeZoneOptions[16]);

    const timeZoneChange = (event) => {
        setSelectedHourZone(event);
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
                    <div className="row">
                        <div className="col-12 mb-4">
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
