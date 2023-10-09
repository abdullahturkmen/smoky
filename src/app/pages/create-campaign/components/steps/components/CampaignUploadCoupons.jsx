import React, { useState } from "react";
import Select from "react-select";

const CampaignUploadCoupons = () => {

    const [cupponsType, setCupponsType] = useState("generateCuppons");
    const passwordType = [
      { value: "alphanumeric", label: "Alphanumeric" },
      { value: "pin", label: "Pin" },
      { value: "letters", label: "Letters" },
    ];
    const [codeSuffix, setCodeSuffix] = useState("SUF");
    const [codePrefix, setCodePrefix] = useState("PRE");
    const [selectedPasswordType, setselectedPasswordType] = useState(
      passwordType[0]
    );
  
    const [codeLength, setCodeLength] = useState(5);
    const [password, setPassword] = useState("");
  
    const changePasswordType = (event) => {
      console.log("event : ", event);
      setselectedPasswordType(event);
      const newPassword = generatePassword(codeLength, event);
      setPassword(newPassword);
    };
  
    const generatePassword = (length, event) => {
      console.log("generatePassword length : ", length);
      console.log("generatePassword event : ", event);
      if (length <= 0) return "";
  
      var charset = "";
  
      if (event.value === "pin") {
        charset = "0123456789";
      }
  
      else if (event.value === "alphanumeric") {
        charset =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      }
  
      else if (event.value === "letters") {
        charset =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
  
      let password = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
      }
      return password;
    };
  
    const changeCodeSuffix = (e) => {
      setCodeSuffix(e.target.value);
    };
  
    const changeCodePrefix = (event) => {
      setCodePrefix(event.target.value);
    };
    const changeCouppons = (event) => {
      setCupponsType(event.target.value);
    };
  
    const handleCodeLengthChange = (event) => {
      const newLength = parseInt(event.target.value, 10);
      setCodeLength(newLength);
      const newPassword = generatePassword(newLength, selectedPasswordType);
      setPassword(newPassword);
    };

    return (
        <div className="accordion-item mb-8 shadow border-top">
        <h2 className="accordion-header" id="headingSeven">
          <button
            className="accordion-button collapsed fs-4 fw-bold"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSeven"
            aria-expanded="false"
            aria-controls="collapseSeven"
          >
            Upload Coupons
          </button>
        </h2>
        <div
          id="collapseSeven"
          className="accordion-collapse collapse"
          aria-labelledby="headingSeven"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <div className="row mt-5">
              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <input
                  className="form-check-input  me-5"
                  type="radio"
                  checked={cupponsType === "generateCuppons"}
                  onChange={changeCouppons}
                  value="generateCuppons"
                />
                <label className="form-label fs-7 fw-bolder">
                  Generate coupons
                </label>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <input
                  className="form-check-input  me-5"
                  type="radio"
                  checked={cupponsType === "uploadCuppons"}
                  onChange={changeCouppons}
                  value="uploadCuppons"
                />
                <label className="form-label fs-7 fw-bolder">
                  Upload coupons
                </label>
              </div>
            </div>
            {cupponsType === "generateCuppons" ? (
              <div className="row">
                <div className="col-sm-12 col-md-5  mt-5">
                  <label
                    htmlFor="campaignname"
                    className="form-label fs-7 fw-bolder mb-1"
                  >
                    Charset
                  </label>
                  <Select
                    value={selectedPasswordType}
                    options={passwordType}
                    placeholder="Charset"
                    className="form-control form-control-solid p-0"
                    onChange={changePasswordType}
                  />
                </div>
                <div className="col-sm-12 col-md-5  mt-5">
                  <label
                    htmlFor="campaignname"
                    className="form-label fs-7 fw-bolder mb-1"
                  >
                    Code length
                  </label>
                  <input
                    className="form-control form-control-solid"
                    type="number"
                    placeholder="Code length"
                    min={1}
                    value={codeLength}
                    onChange={handleCodeLengthChange}
                  />
                </div>
                <div className="col-sm-12 col-md-5  mt-5">
                  <label
                    htmlFor="campaignname"
                    className="form-label fs-7 fw-bolder mb-1"
                  >
                    Code prefix
                  </label>
                  <input
                    className="form-control form-control-solid"
                    type="text"
                    placeholder="Code prefix"
                    value={codePrefix}
                    onChange={changeCodePrefix}
                  />
                </div>
                <div className="col-sm-12 col-md-5  mt-5">
                  <label
                    htmlFor="campaignname"
                    className="form-label fs-7 fw-bolder mb-1"
                  >
                    Code suffix
                  </label>
                  <input
                    className="form-control form-control-solid"
                    type="text"
                    placeholder="Code suffix"
                    value={codeSuffix}
                    onChange={changeCodeSuffix}
                  />
                </div>

                {password && (
                  <div className="col-12 mt-5">
                    <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed p-6">
                      <strong className="text-center w-100">
                        {" "}
                        {codePrefix} - {password} - {codeSuffix}{" "}
                      </strong>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div>Güncellme gelecek</div>
            )}
          </div>
        </div>
      </div>
    );
};

export { CampaignUploadCoupons };
