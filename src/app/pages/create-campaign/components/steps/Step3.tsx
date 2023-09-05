import React, { FC, useState } from "react";
import { Field, ErrorMessage } from "formik";
import WidePopup from "../../../../modules/templates/WidePopup";

const Step3: FC = () => {
  const [title, setTitle] = useState('Pops Firması')
  const [description, setDescription] = useState('Lorem ipsum texti')

  const titleChange = (e) => {
    setTitle(e.target.value)
  }

  const descriptionChange = (e) => {
    setDescription(e.target.value)
  }
  return (
    <div className="w-100">
      <div className="pb-10 pb-lg-12">
        <h2 className="fw-bolder text-dark">Settings</h2>

        <div className="text-gray-400 fw-bold fs-6 d-none">
          If you need more info, please check out
        </div>
      </div>

      <div className="row">
        
        <div className="col-lg-4 col-12">
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
            <label className="d-flex align-items-center form-label">
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
            <label className="form-label required">Corporation Type</label>

            <Field
              as="select"
              name="businessType"
              className="form-select form-select-lg form-select-solid"
            >
              <option></option>
              <option value="1">S Corporation</option>
              <option value="1">C Corporation</option>
              <option value="2">Sole Proprietorship</option>
              <option value="3">Non-profit</option>
              <option value="4">Limited Liability</option>
              <option value="5">General Partnership</option>
            </Field>
            
          </div>

          

        
        </div>
        <div className="col-lg-8 col-12">
          <WidePopup title={title} description={description}/>
        </div>

      </div>
    </div>
  );
};

export { Step3 };
