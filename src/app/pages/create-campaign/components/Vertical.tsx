import { useEffect, useRef, useState } from "react";
import { KTIcon } from "../../../../_metronic/helpers";
import { Step1 } from "./steps/Step1";
import { Step2 } from "./steps/Step2";
import { Step3 } from "./steps/Step3";
import { Step4 } from "./steps/Step4";
import { Step5 } from "./steps/Step5";
import { StepperComponent } from "../../../../_metronic/assets/ts/components";
import { Form, Formik, FormikValues } from "formik";
import {
  createAccountSchemas,
  ICreateAccount,
  inits,
} from "./CreateAccountWizardHelper";
import { Link, useNavigate } from "react-router-dom";

const Vertical = () => {
  const navigate = useNavigate();
  const stepperRef = useRef<HTMLDivElement | null>(null);
  const stepper = useRef<StepperComponent | null>(null);
  const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0]);
  const [initValues] = useState<ICreateAccount>(inits);

  useEffect(() => {
    const searchParams = new URLSearchParams(document.location.search);
    console.log("searchParams type : ", searchParams.get("type"));
  }, []);

  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(
      stepperRef.current as HTMLDivElement
    );
  };

  const prevStep = () => {
    if (!stepper.current) {
      return;
    }

    stepper.current.goPrev();

    setCurrentSchema(
      createAccountSchemas[stepper.current.currentStepIndex - 1]
    );
  };

  const submitStep = (values: ICreateAccount, actions: FormikValues) => {
    if (!stepper.current) {
      return;
    }

    if (stepper.current.currentStepIndex !== stepper.current.totalStepsNumber) {
      stepper.current.goNext();
    } else {
      stepper.current.goto(1);
      actions.resetForm();
    }

    setCurrentSchema(
      createAccountSchemas[stepper.current.currentStepIndex - 1]
    );
  };

  useEffect(() => {
    if (!stepperRef.current) {
      return;
    }

    loadStepper();
  }, [stepperRef]);

  const goHome = () => {
    navigate("/");
  };

  return (
    <>
      <div
        ref={stepperRef}
        className="stepper stepper-pills stepper-column d-flex flex-column flex-md-row flex-row-fluid"
        id="kt_create_account_stepper"
      >
        <div
          className="stepper stepper-links d-flex d-md-none flex-column pt-15"
          id="kt_create_account_stepper"
        >
          <div className="d-flex mx-auto mw-600px w-100 pt-5">
            <div className="stepwizard-tablist mw-75 m-auto">
              <ul className="stepwizard-tablist-list">
                <li
                  className="stepwizard-tablist-list-item current"
                  data-kt-stepper-element="nav"
                ></li>
                <li
                  className="stepwizard-tablist-list-item"
                  data-kt-stepper-element="nav"
                ></li>
                <li
                  className="stepwizard-tablist-list-item"
                  data-kt-stepper-element="nav"
                ></li>
                <li
                  className="stepwizard-tablist-list-item"
                  data-kt-stepper-element="nav"
                ></li>
                <li
                  className="stepwizard-tablist-list-item"
                  data-kt-stepper-element="nav"
                ></li>
              </ul>
            </div>
          </div>
        </div>

        {/* begin::Aside*/}
        <div  className="card d-none d-md-flex justify-content-center justify-content-xl-start flex-row w-100 w-md-200px w-xxl-300px me-2">
          {/* begin::Wrapper*/}
          <div className="card-body px-3 px-lg-6 px-xxl-10 py-10 d-flex align-items-center position-sticky top-0" style={{height: '100vh'}}>
            {/* begin::Nav*/}
            <div className="stepper-nav">
              {/* begin::Step 1*/}
              <div
                className="stepper-item current"
                data-kt-stepper-element="nav"
              >
                {/* begin::Wrapper*/}
                <div className="stepper-wrapper">
                  {/* begin::Icon*/}
                  <div className="stepper-icon w-40px h-40px">
                    <i className="stepper-check fas fa-check"></i>
                    <span className="stepper-number">1</span>
                  </div>
                  {/* end::Icon*/}

                  {/* begin::Label*/}
                  <div className="stepper-label">
                    <h4 className="stepper-title">Goal</h4>

                    <div className="stepper-desc fw-semibold d-none">
                      Setup Your Account Details
                    </div>
                  </div>
                  {/* end::Label*/}
                </div>
                {/* end::Wrapper*/}

                {/* begin::Line*/}
                <div className="stepper-line h-40px"></div>
                {/* end::Line*/}
              </div>
              {/* end::Step 1*/}

              {/* begin::Step 2*/}
              <div className="stepper-item" data-kt-stepper-element="nav">
                {/* begin::Wrapper*/}
                <div className="stepper-wrapper">
                  {/* begin::Icon*/}
                  <div className="stepper-icon w-40px h-40px">
                    <i className="stepper-check fas fa-check"></i>
                    <span className="stepper-number">2</span>
                  </div>
                  {/* end::Icon*/}

                  {/* begin::Label*/}
                  <div className="stepper-label">
                    <h4 className="stepper-title">Template</h4>
                    <div className="stepper-desc fw-semibold d-none">
                      Setup Your Account Settings
                    </div>
                  </div>
                  {/* end::Label*/}
                </div>
                {/* end::Wrapper*/}

                {/* begin::Line*/}
                <div className="stepper-line h-40px"></div>
                {/* end::Line*/}
              </div>
              {/* end::Step 2*/}

              {/* begin::Step 3*/}
              <div className="stepper-item" data-kt-stepper-element="nav">
                {/* begin::Wrapper*/}
                <div className="stepper-wrapper">
                  {/* begin::Icon*/}
                  <div className="stepper-icon w-40px h-40px">
                    <i className="stepper-check fas fa-check"></i>
                    <span className="stepper-number">3</span>
                  </div>
                  {/* end::Icon*/}

                  {/* begin::Label*/}
                  <div className="stepper-label">
                    <h4 className="stepper-title">Settings</h4>
                    <div className="stepper-desc fw-semibold d-none">
                      Your Business Related Info
                    </div>
                  </div>
                  {/* end::Label*/}
                </div>
                {/* end::Wrapper*/}

                {/* begin::Line*/}
                <div className="stepper-line h-40px"></div>
                {/* end::Line*/}
              </div>
              {/* end::Step 3*/}

              {/* begin::Step 4*/}
              <div className="stepper-item" data-kt-stepper-element="nav">
                {/* begin::Wrapper*/}
                <div className="stepper-wrapper">
                  {/* begin::Icon*/}
                  <div className="stepper-icon w-40px h-40px">
                    <i className="stepper-check fas fa-check"></i>
                    <span className="stepper-number">4</span>
                  </div>
                  {/* end::Icon*/}

                  {/* begin::Label*/}
                  <div className="stepper-label">
                    <h4 className="stepper-title">Studio</h4>
                    <div className="stepper-desc fw-semibold d-none">
                      Set Your Payment Methods
                    </div>
                  </div>
                  {/* end::Label*/}
                </div>
                {/* end::Wrapper*/}

                {/* begin::Line*/}
                <div className="stepper-line h-40px"></div>
                {/* end::Line*/}
              </div>
              {/* end::Step 4*/}

              {/* begin::Step 5*/}
              <div className="stepper-item" data-kt-stepper-element="nav">
                {/* begin::Wrapper*/}
                <div className="stepper-wrapper">
                  {/* begin::Icon*/}
                  <div className="stepper-icon w-40px h-40px">
                    <i className="stepper-check fas fa-check"></i>
                    <span className="stepper-number">5</span>
                  </div>
                  {/* end::Icon*/}

                  {/* begin::Label*/}
                  <div className="stepper-label">
                    <h4 className="stepper-title">Review</h4>
                    <div className="stepper-desc fw-semibold d-none">
                      Woah, we are here
                    </div>
                  </div>
                  {/* end::Label*/}
                </div>
                {/* end::Wrapper*/}
              </div>
              {/* end::Step 5*/}
            </div>
            {/* end::Nav*/}
          </div>
          {/* end::Wrapper*/}
        </div>
        {/* begin::Aside*/}

        <div className="d-flex flex-row-fluid flex-center bg-body rounded" style={{flexBasis: '100%'}}>
          <Formik
            validationSchema={currentSchema}
            initialValues={initValues}
            onSubmit={submitStep}
          >
            {() => (
              <Form
                className="py-20 w-100 px-5"
                noValidate
                id="kt_create_account_form"
              >
                <div className="current" data-kt-stepper-element="content">
                  <Step1 />
                </div>

                <div data-kt-stepper-element="content">
                  <Step2 />
                </div>

                <div data-kt-stepper-element="content">
                  <Step3 />
                </div>

                <div data-kt-stepper-element="content">
                  <Step4 />
                </div>

                <div data-kt-stepper-element="content">
                  <Step5 />
                </div>

                <div className="d-flex flex-stack pt-10">
                  <div className="mr-2">
                    <button
                      onClick={prevStep}
                      type="button"
                      className="btn btn-lg btn-light-primary me-3"
                      data-kt-stepper-action="previous"
                    >
                      <KTIcon iconName="arrow-left" className="fs-4 me-1" />
                      Back
                    </button>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="btn btn-lg btn-primary me-3"
                    >
                      <span className="indicator-label d-flex align-items-center">
                        {stepper.current?.currentStepIndex !==
                          stepper.current?.totalStepsNumber! - 1 && "Continue"}
                        {stepper.current?.currentStepIndex ===
                          stepper.current?.totalStepsNumber! - 1 && "Submit"}
                        <KTIcon
                          iconName="arrow-right"
                          className="fs-3 ms-2 me-0"
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      {/* begin::modalCloseCreateCampaign */}
      <button
        className="position-absolute end-0 btn btn-danger rounded btn-sm m-4"
        data-bs-toggle="modal"
        data-bs-target="#closeCreateCampaign"
      >
        Save & Exit
      </button>

      <div className="modal fade" id="closeCreateCampaign">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Save & Exit</h3>

              <div
                className="btn btn-icon btn-sm btn-active-light-primary ms-2"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ki-duotone ki-cross fs-1">
                  <span className="path1"></span>
                  <span className="path2"></span>
                </i>
              </div>
            </div>

            <div className="modal-body">
              <div className="d-flex">
                <KTIcon
                  iconName="information-5"
                  className="fs-2tx text-primary me-4"
                />

                <div className="d-block d-sm-flex flex-stack flex-grow-1">
                  <div className="fw-bold">
                    <div className="fs-6 text-gray-600">
                      Are you sure you want to exit?
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-block mt-5 end-0 position-relative d-flex justify-content-center">
              <button
                  className="btn btn-sm btn-success fw-bold me-4"
                  data-bs-dismiss="modal"
                  onClick={() => goHome()}
                >
                  Save
                </button>
                <button
                  className="btn btn-sm btn-danger fw-bold me-4"
                  data-bs-dismiss="modal"
                >
                  Dismiss
                </button>
                <button
                  data-bs-dismiss="modal"
                  onClick={() => goHome()}
                  className="btn btn-sm btn-secondary fw-bold"
                >
                  Yes, Close Page
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end::modalCloseCreateCampaign */}
    </>
  );
};

export { Vertical };
