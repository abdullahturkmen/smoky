import React, { FC, useState } from "react";
import { Field, ErrorMessage } from "formik";
import WidePopup from "../../../../modules/templates/WidePopup";

const Step4: FC = () => {
  const [image, setImage] = useState<string | undefined>("");
  const [buttonText, setButtonText] = useState("Button Text");
  const [title, setTitle] = useState("Pops Firması");
  const [description, setDescription] = useState(
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae nihil nemo doloribus."
  );
  const [subTitle, setSubTitle] = useState(
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae nihil nemo doloribus. "
  );
  const [reminderIsActive, setReminderIsActive] = useState(false);
  const titleChange = (e) => {
    setTitle(e.target.value);
  };

  const buttonTextChange = (e) => {
    setButtonText(e.target.value);
  };

  const subTitleChange = (e) => {
    setSubTitle(e.target.value);
  };

  const imageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && event.target.result) {
          const base64String = event.target.result as string;
          setImage(base64String);
        }
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setImage("");
    }
  };

  const descriptionChange = (e) => {
    setDescription(e.target.value);
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
                className="nav-link active"
                data-bs-toggle="tab"
                href="#promotion_tab"
              >
                Promotion
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#reminder_tab">
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
                <div className="fv-row mb-10">
                  <label className="form-label required">Image</label>
                  <input type="file" onChange={imageChange} accept="image/*" />
                </div>

                <div className="fv-row mb-10">
                  <label className="form-label required">Title</label>

                  <Field
                    name="businessName"
                    className="form-control form-control-lg form-control-solid"
                    value={title}
                    onChange={titleChange}
                  />
                </div>

                <div className="fv-row mb-10">
                  <label className="form-label required">Subtitle</label>
                  <Field
                    name="subTitle"
                    className="form-control form-control-lg form-control-solid"
                    value={subTitle}
                    onChange={subTitleChange}
                  />
                </div>

                <div className="fv-row mb-10">
                  <label className="form-label">
                    <span className="required">Description</span>
                  </label>

                  <Field
                    name="businessDescriptor"
                    className="form-control form-control-lg form-control-solid"
                    value={description}
                    onChange={descriptionChange}
                  />

                  <div className="form-text">
                    Customers will see this shortened version of your statement
                    descriptor
                  </div>
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
                        <h2 className="accordion-header" id="reminderHeadingOne">
                          <button
                            className="accordion-button  fs-4 fw-bold"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#reminderCollapseOne"
                            aria-expanded="false"
                            aria-controls="reminderCollapseOne"
                          >
                            Display Pages 1
                          </button>
                        </h2>
                        <div
                          id="reminderCollapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="reminderHeadingOne"
                          data-bs-parent="#reminderCollapse"
                        >
                          <div className="accordion-body">hdfhdfghfgdh</div>
                        </div>
                      </div>

                      <div className="accordion-item mb-8 shadow border-top">
                        <h2 className="accordion-header" id="reminderHeadingTwo">
                          <button
                            className="accordion-button collapsed fs-4 fw-bold"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#reminderCollapseTwo"
                            aria-expanded="false"
                            aria-controls="reminderCollapseTwo"
                          >
                            Display Pages 2
                          </button>
                        </h2>
                        <div
                          id="reminderCollapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="reminderHeadingTwo"
                          data-bs-parent="#reminderCollapse"
                        >
                          <div className="accordion-body">hdfhdfghfgdh</div>
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
          <WidePopup
            title={title}
            description={description}
            buttonText={buttonText}
            subTitle={subTitle}
            image={image}
          />
        </div>
      </div>
    </div>
  );
};

export { Step4 };
