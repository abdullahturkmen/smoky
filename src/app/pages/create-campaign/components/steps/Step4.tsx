import React, { FC, useState } from "react";
import { Field, ErrorMessage } from "formik";
import WidePopup from "../../../../modules/templates/WidePopup";
import { HexColorPicker } from "react-colorful";
import { Button } from "react-bootstrap";

const Step4: FC = () => {
  const [coverImage, setCoverImage] = useState<string | undefined>("https://picsum.photos/id/563/700/700");
  const [logo, setLogo] = useState<string | undefined>("");
  const [buttonText, setButtonText] = useState("Button Text");
  const [confirmationButtonText, setConfirmationButtonText] =
    useState("Copied!");
  const [durationHeadline, setDurationHeadline] = useState("");
  const [durationCountdown, setDurationCountdown] = useState("");
  const [durationText, setDurationText] = useState("");
  const [durationMechanism, setDurationMechanism] = useState("countdown");
  const [title, setTitle] = useState("Pops Firması");
  const [disclaimer, setDisclaimer] = useState(
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae nihil nemo doloribus."
  );
  const [subTitle, setSubTitle] = useState(
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae nihil nemo doloribus. "
  );
  const [reminderIsActive, setReminderIsActive] = useState(false);
  const [showCodeToggle, setShowCodeToggle] = useState(false);
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

                  <div
                    className="upload-content position-relative w-100 d-flex align-items-center justify-content-center bg-light rounded"
                    style={{ height: "80px" }}
                  >
                    <input
                      className="file-uploader position-absolute w-100 h-100 opacity-0 cursor-pointer top-0 start-0"
                      type="file"
                      accept="image/*"
                      onChange={coverImageChange}
                    />
                    <span className=" text-dark ">Upload Cover Image</span>
                  </div>
                </div>

                <div className="fv-row mb-10">
                  <label className="form-label required">Cover Image</label>

                  <div
                    className="upload-content position-relative w-100 d-flex align-items-center justify-content-center bg-light rounded"
                    style={{ height: "80px" }}
                  >
                    <input
                      className="file-uploader position-absolute w-100 h-100 opacity-0 cursor-pointer top-0 start-0"
                      type="file"
                      accept="image/*"
                      onChange={logoChange}
                    />
                    <span className=" text-dark ">Upload Logo</span>
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
                      defaultChecked={showCodeToggle}
                      onChange={() => setShowCodeToggle((state) => !state)}
                    />
                    <div className="d-flex flex-column ">
                      <span className="form-label mb-0">
                        Show the code in the incentive
                      </span>
                    </div>
                  </label>
                </div>

                <div className="fv-row mb-10">
                  <label className="form-label required">Button Text</label>
                  <Field
                    name="buttonText"
                    className="form-control form-control-lg form-control-solid"
                    value={buttonText}
                    onChange={buttonTextChange}
                  />
                </div>

                <div className="fv-row mb-10">
                  <label className="form-label">
                    <span className="required">Button Confirmation</span>
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
                      <div className="fv-row mb-10">
                        <label className="form-label">
                          <span className="required">Countdown</span>
                        </label>

                        <Field
                          name="businessDescriptor"
                          className="form-control form-control-lg form-control-solid"
                          value={durationCountdown}
                          onChange={(e) => setDurationCountdown(e.target.value)}
                        />
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
          <div className="w-100 position-sticky top-0">
            <WidePopup
              title={title}
              disclaimer={disclaimer}
              buttonText={buttonText}
              subTitle={subTitle}
              image={coverImage}
              logo={logo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Step4 };
