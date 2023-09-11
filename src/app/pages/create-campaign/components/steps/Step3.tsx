import React, { FC, useState } from "react";
import { Field, ErrorMessage } from "formik";
import WidePopup from "../../../../modules/templates/WidePopup";

const Step3: FC = () => {
  const [image, setImage] = useState<string | undefined>("");
  const [buttonText, setButtonText] = useState('Button Text');
  const [title, setTitle] = useState('Pops Firması 234');
  const [description, setDescription] = useState('Lorem ipsum texti');
  const [subTitle, setSubTitle] = useState('meroo');

  const titleChange = (e) => {
    setTitle(e.target.value)
  }

  const buttonTextChange = (e) => {
    setButtonText(e.target.value);
  }

  const subTitleChange = (e) => {
    setSubTitle(e.target.value);
  }

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
            <label className="form-label required">Image</label>
            <input
              type="file"
              onChange={imageChange}
              accept="image/*"/>
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
            <label className="form-label required">Sub Title</label>
            <Field
              name="subTitle"
              className="form-control form-control-lg form-control-solid"
              value={subTitle}
              onChange={subTitleChange}
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
            <label className="form-label required">Button Text</label>
            <Field
              name="buttonText"
              className="form-control form-control-lg form-control-solid"
              value={buttonText}
              onChange={buttonTextChange}
            />
          </div>
        </div>
        <div className="col-lg-8 col-12">
          <WidePopup title={title} description={description} buttonText={buttonText} subTitle={subTitle} image={image} />
        </div>

      </div>
    </div>
  );
};

export { Step3 };
