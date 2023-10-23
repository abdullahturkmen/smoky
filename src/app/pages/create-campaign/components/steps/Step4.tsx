import React, { FC, useState } from "react";
import { Field, ErrorMessage } from "formik";
import WidePopup from "../../../../modules/templates/WidePopup";
import { HexColorPicker } from "react-colorful";
import { Button } from "react-bootstrap";
import { KTIcon } from "../../../../../_metronic/helpers";

const Step4: FC = () => {
  const [coverImage, setCoverImage] = useState<string | undefined>("");
  const [logo, setLogo] = useState<string | undefined>("");
  const [buttonText, setButtonText] = useState("Button Text");
  const [showCouponButtonText, setShowCouponButtonText] =
    useState("Show Coupon Code");
  const [confirmationButtonText, setConfirmationButtonText] =
    useState("Copied!");
  const [durationHeadline, setDurationHeadline] = useState("");
  const [durationCountdownDays, setDurationCountdownDays] = useState("1");
  const [durationCountdownHours, setDurationCountdownHours] = useState("06");
  const [durationCountdownMinutes, setDurationCountdownMinutes] =
    useState("20");
  const [durationText, setDurationText] = useState("");
  const [durationMechanism, setDurationMechanism] = useState("countdown");
  const [title, setTitle] = useState("Pops Firması");
  const [disclaimer, setDisclaimer] = useState(
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
  );
  const [subTitle, setSubTitle] = useState(
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
  );
  const [reminderIsActive, setReminderIsActive] = useState(false);
  const [isCouponCodeVisible, setIsCouponCodeVisible] = useState(false);
  const titleChange = (e) => {
    setTitle(e.target.value);
  };

  const buttonTextChange = (e) => {
    setButtonText(e.target.value);
  };

  const subTitleChange = (e) => {
    setSubTitle(e.target.value);
  };

  const coverImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && event.target.result) {
          const base64String = event.target.result as string;
          setCoverImage(base64String);
        }
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setCoverImage("");
    }
  };

  const logoChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && event.target.result) {
          const base64String = event.target.result as string;
          setLogo(base64String);
        }
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setLogo("");
    }
  };

  const disclaimerChange = (e) => {
    setDisclaimer(e.target.value);
  };

  const selectDurationMechanism = (type) => {
    setDurationMechanism(type);
  };

  const [isHoveredCountdown, setIsHoveredCountdown] = useState(false);

  const handleMouseEnter = () => {
    setIsHoveredCountdown(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsHoveredCountdown(false);
    }, 2000);
  };

  const changeDurationDays = (e) => {
    let value = parseInt(e.target.value);
    if (value >= 0 || value < 60) {
      setDurationCountdownDays(String(value));
    }
  };

  const changeDurationDaysBlur = (e) => {
    let value = parseInt(e.target.value);
    if (value >= 0 || value < 60) {
      if (value < 10) {
        setDurationCountdownDays("0" + String(value));
      }
    } else {
      setDurationCountdownDays("01");
    }
  };

  const changeDurationHours = (e) => {
    let value = parseInt(e.target.value);
    if (value >= 0 || value < 60) {
      setDurationCountdownHours(String(value));
    }
  };

  const changeDurationHoursBlur = (e) => {
    let value = parseInt(e.target.value);
    if (value >= 0 || value < 60) {
      if (value < 10) {
        setDurationCountdownHours("0" + String(value));
      }
    } else {
      setDurationCountdownHours("01");
    }
  };

  const changeDurationMinutes = (e) => {
    let value = parseInt(e.target.value);
    if (value >= 0 || value < 60) {
      setDurationCountdownMinutes(String(value));
    }
  };

  const changeDurationMinutesBlur = (e) => {
    let value = parseInt(e.target.value);
    if (value >= 0 || value < 60) {
      if (value < 10) {
        setDurationCountdownMinutes("0" + String(value));
      }
    } else {
      setDurationCountdownMinutes("01");
    }
  };

  /////----------REMINDER ------- /////

  const [color, setColor] = useState("#3C53F4");
  const [pos, setPos] = useState("");

  const selectPosition = (pos) => {
    setPos(pos);
  };

  return (
    <div className="w-100">
      <div className="pb-10 pb-lg-12">
        <h2 className="fw-bolder text-dark">Studio</h2>

        <div className="text-gray-400 fw-bold fs-6 d-none">
          If you need more info, please check out
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4 col-12">
          <ul className="nav nav-tabs nav-line-tabs nav-line-tabs-2x mb-5 fs-6">
            <li className="nav-item">
              <a
                className="nav-link active fw-bold"
                data-bs-toggle="tab"
                href="#promotion_tab"
              >
                Promotion
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link  fw-bold"
                data-bs-toggle="tab"
                href="#reminder_tab"
              >
                Reminder
              </a>
            </li>
          </ul>
          <div className="tab-content" id="setFourTab">
            <div
              className="tab-pane fade show active"
              id="promotion_tab"
              role="tabpanel"
            >
              <div className=" mt-5">
                <p>
                  See some text in the incentive you'd like to change? You can
                  edit below.
                </p>
                <div className="fv-row mb-10">
                  <label className="form-label required">Cover Image</label>

                  <div className="text-decoration-underline text-primary cursor-pointer">
                    <a>Unsplash Free Images</a>
                  </div>
                  <div
                    className="upload-content position-relative w-100 d-flex align-items-center justify-content-center bg-light rounded p-4"
                    style={{ minHeight: "50px" }}
                  >
                    <input
                      className="file-uploader position-absolute w-100 h-100 opacity-0 cursor-pointer top-0 start-0"
                      type="file"
                      accept="image/*"
                      onChange={coverImageChange}
                    />
                    <div className=" d-flex flex-column align-items-center">
                      {coverImage && (
                        <>
                          <img
                            src={coverImage}
                            style={{ maxWidth: "200px" }}
                            className="rounded-3 border border-dark p-2 mb-2"
                          />
                        </>
                      )}
                      <div className=" d-flex  align-items-center text-dark ">
                        <KTIcon
                          iconName="plus"
                          className="fw-bolder fs-3 me-2 "
                        />{" "}
                        Select your cover image
                      </div>
                    </div>
                  </div>
                </div>

                <div className="fv-row mb-10">
                  <label className="form-label required">Logo</label>

                  <div
                    className="upload-content position-relative w-100 d-flex align-items-center justify-content-center bg-light rounded p-4"
                    style={{ minHeight: "50px" }}
                  >
                    <input
                      className="file-uploader position-absolute w-100 h-100 opacity-0 cursor-pointer top-0 start-0"
                      type="file"
                      accept="image/*"
                      onChange={logoChange}
                    />
                    <div className=" d-flex flex-column align-items-center">
                      {logo && (
                        <>
                          <img
                            src={logo}
                            style={{ maxWidth: "200px" }}
                            className="rounded-3 border border-dark p-2 mb-2"
                          />
                        </>
                      )}
                      <div className=" d-flex  align-items-center text-dark  ">
                        <KTIcon
                          iconName="plus"
                          className="fw-bolder fs-3 me-2 "
                        />{" "}
                        Select your logo
                      </div>
                    </div>
                  </div>
                </div>

                <div className="fv-row mb-10">
                  <label className="form-label required">Header</label>

                  <Field
                    name="businessName"
                    className="form-control form-control-lg form-control-solid"
                    value={title}
                    onChange={titleChange}
                  />
                </div>

                <div className="fv-row mb-10">
                  <label className="form-label required">Subheader</label>
                  <Field
                    name="subTitle"
                    className="form-control form-control-lg form-control-solid"
                    value={subTitle}
                    onChange={subTitleChange}
                  />
                </div>

                <div className="d-flex gap-20">
                  <label className="form-check form-switch form-check-custom form-check-solid align-items-center mb-5">
                    <input
                      className="form-check-input me-5"
                      type="checkbox"
                      defaultChecked={isCouponCodeVisible}
                      onChange={() => setIsCouponCodeVisible((state) => !state)}
                    />
                    <div className="d-flex flex-column ">
                      <span className="form-label mb-0">
                        Show the code in the incentive
                      </span>
                    </div>
                  </label>
                </div>

                {!isCouponCodeVisible && (
                  <>
                    <div className="fv-row mb-10">
                      <label className="form-label required">
                        Show Code Button Text
                      </label>
                      <Field
                        name="buttonText"
                        className="form-control form-control-lg form-control-solid"
                        value={showCouponButtonText}
                        onChange={(e) =>
                          setShowCouponButtonText(e.target.value)
                        }
                      />
                    </div>
                  </>
                )}

                <div className="fv-row mb-10">
                  <label className="form-label required">Copy Button Text</label>
                  <Field
                    name="buttonText"
                    className="form-control form-control-lg form-control-solid"
                    value={buttonText}
                    onChange={buttonTextChange}
                  />
                </div>

                <div className="fv-row mb-10">
                  <label className="form-label">
                    <span className="required">Button Confirmation Text</span>
                  </label>

                  <Field
                    name="businessDescriptor"
                    className="form-control form-control-lg form-control-solid"
                    value={confirmationButtonText}
                    onChange={(e) => setConfirmationButtonText(e.target.value)}
                  />
                </div>

                <div className="fv-row mb-10">
                  <label className="form-label">
                    <span className="required">Disclaimer</span>
                  </label>

                  <Field
                    name="businessDescriptor"
                    className="form-control form-control-lg form-control-solid"
                    value={disclaimer}
                    onChange={disclaimerChange}
                  />
                </div>

                <div className="fv-row mb-10">
                  <label className="form-label">
                    <span className="required">Duration Headline</span>
                  </label>

                  <Field
                    name="businessDescriptor"
                    className="form-control form-control-lg form-control-solid"
                    value={durationHeadline}
                    onChange={(e) => setDurationHeadline(e.target.value)}
                  />
                </div>

                <div className="fv-row mb-10">
                  <label className="form-label">
                    <span className="">Duration Mechanism</span>
                  </label>

                  <div className="gap-2 d-flex">
                    <button
                      type="button"
                      onClick={() => selectDurationMechanism("countdown")}
                      className={`${
                        durationMechanism == "countdown"
                          ? "btn-primary"
                          : "btn-outline-primary"
                      } btn btn-sm border flex-grow-1`}
                    >
                      Countdown
                    </button>
                    <button
                      type="button"
                      onClick={() => selectDurationMechanism("text")}
                      className={`${
                        durationMechanism == "text"
                          ? "btn-primary"
                          : "btn-outline-primary "
                      } btn btn-sm border flex-grow-1`}
                    >
                      Text
                    </button>
                  </div>
                </div>
                <div className="fv-row mb-10">
                  {durationMechanism == "countdown" ? (
                    <>
                      <div
                        className="fv-row mb-10"
                        onMouseEnter={handleMouseEnter}
                        onClick={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <label className="form-label">
                          <span className="required">Countdown</span>
                        </label>

                        {isHoveredCountdown ? (
                          <>
                            {" "}
                            <div className="rounded fw-bold d-flex align-items-center">
                              <div className="bg-light rounded d-flex align-items-center">
                                <Field
                                  name="businessDescriptor"
                                  className="form-control form-control-lg form-control-solid"
                                  value={durationCountdownDays}
                                  onChange={changeDurationDays}
                                  onBlur={changeDurationDaysBlur}
                                />
                                <div className="text-nowrap mx-2">d</div>
                              </div>
                              <div className="text-nowrap mx-2">:</div>
                              <div className="bg-light rounded d-flex align-items-center">
                                <Field
                                  name="businessDescriptor"
                                  className="form-control form-control-lg form-control-solid"
                                  value={durationCountdownHours}
                                  onChange={changeDurationHours}
                                  onBlur={changeDurationHoursBlur}
                                />
                                <div className="text-nowrap mx-2">h</div>
                              </div>
                              <div className="text-nowrap mx-2">:</div>
                              <div className="bg-light rounded d-flex align-items-center">
                                <Field
                                  name="businessDescriptor"
                                  className="form-control form-control-lg form-control-solid"
                                  value={durationCountdownMinutes}
                                  onChange={changeDurationMinutes}
                                  onBlur={changeDurationMinutesBlur}
                                />
                                <div className="mx-2">m</div>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="bg-light rounded fw-bold p-4">
                              {parseInt(durationCountdownDays) > 0 && (
                                <>{durationCountdownDays}d : </>
                              )}
                              {parseInt(durationCountdownHours) > 0 && (
                                <>{durationCountdownHours}h : </>
                              )}
                              {durationCountdownMinutes}m
                            </div>
                          </>
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="fv-row mb-10">
                        <label className="form-label">
                          <span className="required">Text</span>
                        </label>

                        <Field
                          name="businessDescriptor"
                          className="form-control form-control-lg form-control-solid"
                          value={durationText}
                          onChange={(e) => setDurationText(e.target.value)}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="reminder_tab" role="tabpanel">
              <div className=" mt-5">
                <div className="d-flex gap-20">
                  <label className="form-check form-switch form-check-custom form-check-solid align-items-center mb-5">
                    <input
                      className="form-check-input me-5"
                      type="checkbox"
                      defaultChecked={reminderIsActive}
                      onChange={() => setReminderIsActive((state) => !state)}
                    />
                    <div className="d-flex flex-column ">
                      <span className="form-label mb-0">
                        Show Promotion Reminder
                      </span>
                    </div>
                  </label>
                </div>

                {reminderIsActive && (
                  <>
                    <div className="accordion" id="reminderCollapse">
                      <div className="accordion-item mb-8 shadow border-top">
                        <h2
                          className="accordion-header"
                          id="reminderHeadingOne"
                        >
                          <button
                            className="accordion-button  fs-4 fw-bold"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#reminderCollapseOne"
                            aria-expanded="false"
                            aria-controls="reminderCollapseOne"
                          >
                            Content
                          </button>
                        </h2>
                        <div
                          id="reminderCollapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="reminderHeadingOne"
                          data-bs-parent="#reminderCollapse"
                        >
                          <div className="accordion-body">
                            <div className="fv-row mb-5">
                              <label className="form-label required">
                                Header
                              </label>
                              <Field
                                name="subTitle"
                                className="form-control form-control-lg form-control-solid"
                                value={subTitle}
                                onChange={subTitleChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item mb-8 shadow border-top">
                        <h2
                          className="accordion-header"
                          id="reminderHeadingTwo"
                        >
                          <button
                            className="accordion-button collapsed fs-4 fw-bold"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#reminderCollapseTwo"
                            aria-expanded="false"
                            aria-controls="reminderCollapseTwo"
                          >
                            Design
                          </button>
                        </h2>
                        <div
                          id="reminderCollapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="reminderHeadingTwo"
                          data-bs-parent="#reminderCollapse"
                        >
                          <div className="accordion-body">
                            <p>Background color:</p>
                            <button
                              type="button"
                              className="btn w-100 text-white mb-3"
                              style={{ backgroundColor: color }}
                            >
                              Example Text
                            </button>
                            <HexColorPicker
                              color={color}
                              onChange={setColor}
                              className="w-100"
                            />
                            <div className="d-block mt-2">
                              <Field
                                name="businessDescriptor"
                                className="form-control form-control-lg form-control-solid"
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item mb-8 shadow border-top">
                        <h2
                          className="accordion-header"
                          id="reminderHeadingThree"
                        >
                          <button
                            className="accordion-button collapsed fs-4 fw-bold"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#reminderCollapseThree"
                            aria-expanded="false"
                            aria-controls="reminderCollapseThree"
                          >
                            Position
                          </button>
                        </h2>
                        <div
                          id="reminderCollapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="reminderHeadingThree"
                          data-bs-parent="#reminderCollapse"
                        >
                          <div className="accordion-body">
                            <p>
                              Choose the page position on which the Promotion
                              Reminder will pop up
                            </p>
                            <div className="d-flex">
                              <table className="table table-bordered border-secondary text-center">
                                <tbody>
                                  <tr>
                                    <td
                                      onClick={() => selectPosition("left-top")}
                                      className={`cursor-pointer ${
                                        pos == "left-top"
                                          ? "bg-primary text-light"
                                          : ""
                                      }`}
                                    >
                                      Left Top
                                    </td>
                                    <td
                                      onClick={() =>
                                        selectPosition("center-top")
                                      }
                                      className={`cursor-pointer ${
                                        pos == "center-top"
                                          ? "bg-primary text-light"
                                          : ""
                                      }`}
                                    >
                                      Center Top
                                    </td>
                                    <td
                                      onClick={() =>
                                        selectPosition("right-top")
                                      }
                                      className={`cursor-pointer ${
                                        pos == "right-top"
                                          ? "bg-primary text-light"
                                          : ""
                                      }`}
                                    >
                                      Right Top
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      onClick={() =>
                                        selectPosition("left-center")
                                      }
                                      className={`cursor-pointer ${
                                        pos == "left-center"
                                          ? "bg-primary text-light"
                                          : ""
                                      }`}
                                    >
                                      Left Center
                                    </td>
                                    <td className="bg-light text-muted">
                                      Center of page
                                    </td>
                                    <td
                                      onClick={() =>
                                        selectPosition("right-center")
                                      }
                                      className={`cursor-pointer ${
                                        pos == "right-center"
                                          ? "bg-primary text-light"
                                          : ""
                                      }`}
                                    >
                                      Right Center
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      onClick={() =>
                                        selectPosition("left-bottom")
                                      }
                                      className={`cursor-pointer ${
                                        pos == "left-bottom"
                                          ? "bg-primary text-light"
                                          : ""
                                      }`}
                                    >
                                      Left Bottom
                                    </td>
                                    <td
                                      onClick={() =>
                                        selectPosition("center-bottom")
                                      }
                                      className={`cursor-pointer ${
                                        pos == "center-bottom"
                                          ? "bg-primary text-light"
                                          : ""
                                      }`}
                                    >
                                      Center Bottom
                                    </td>
                                    <td
                                      onClick={() =>
                                        selectPosition("right-bottom")
                                      }
                                      className={`cursor-pointer ${
                                        pos == "right-bottom"
                                          ? "bg-primary text-light"
                                          : ""
                                      }`}
                                    >
                                      Right Bottom
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-12">
          <div
            className="w-100 rounded-3 bg-light-primary position-sticky "
            style={{ top: "5%" }}
          >
            <WidePopup
              title={title}
              disclaimer={disclaimer}
              buttonText={buttonText}
              subTitle={subTitle}
              image={coverImage}
              logo={logo}
              isCouponVisible={isCouponCodeVisible}
              durationHeadline={durationHeadline}
              durationMechanism={durationMechanism}
              durationText={durationText}
              durationCountdownDays={durationCountdownDays}
              durationCountdownHours={durationCountdownHours}
              durationCountdownMinutes={durationCountdownMinutes}
              showCouponButtonText={showCouponButtonText}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Step4 };
