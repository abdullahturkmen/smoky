import React, { useEffect, useState } from "react";
import Select from "react-select";
import CsvDownloader from 'react-csv-downloader';
import { useCSVReader } from 'react-papaparse';

const CampaignUploadCoupons = () => {
  const { CSVReader } = useCSVReader();
  const [cupponsType, setCupponsType] = useState("genericCuppons");
  const charsetTypeList = [
    { value: "alphanumeric", label: "Alphanumeric" },
    { value: "pin", label: "Pin" },
    { value: "letters", label: "Letters" },
  ];
  const [codeSuffix, setCodeSuffix] = useState("SUF");
  const [codePrefix, setCodePrefix] = useState("PRE");
  const [genericCode, setGenericCode] = useState("YOURCODE24");
  const [couponNumber, setCouponNumber] = useState(10)
  const [selectedCharsetType, setSelectedCharsetType] = useState(
    charsetTypeList[0]
  );
  const [csvUploadList, setCsvUploadList] = useState([]);

  const [codeLength, setCodeLength] = useState(5);
  const [couponsList, setCouponsList] = useState([]);

  const changeCharsetType = (event) => {
    setSelectedCharsetType(event);
  };

  const generateCoupons = () => {
    setCouponsList([])
    const result = [];
    for (let i = 0; i < couponNumber; i++) {

      var generatedPass = createRandomPass()
      if (!result.includes(generatedPass)) {
        result.push(generatedPass)
      }

    }

    return setCouponsList(result);
  };

  const createRandomPass = () => {
    if (codeLength <= 0) return "";

    var charset = "";

    if (selectedCharsetType.value === "pin") {
      charset = "0123456789";
    }

    else if (selectedCharsetType.value === "alphanumeric") {
      charset =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    }

    else if (selectedCharsetType.value === "letters") {
      charset =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    let couponCode = "";
    for (let i = 0; i < codeLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      couponCode += charset.charAt(randomIndex);
    }
    //return setCouponsList(couponCode);
    return `${codePrefix}${couponCode}${codeSuffix}`

  }

  const changeCodeSuffix = (event) => {
    if (event.target.value.length < 4) {
      setCodeSuffix(event.target.value);
    }

  };

  const changeCodePrefix = (event) => {
    if (event.target.value.length < 4) {
      setCodePrefix(event.target.value);
    }
  };
  const changeCouppons = (event) => {
    setCupponsType(event.target.value);
  };

  const handleCodeLengthChange = (event) => {
    const newLength = parseInt(event.target.value, 10);
    if (newLength > 0 && newLength < 5) {
      setCodeLength(newLength);
    }
  };

  const changeGenericCode = (event) => {
    setGenericCode(event.target.value);
  };

  const handleCouponNumberChange = (event) => {

    if (parseInt(event.target.value) >= 0) {
      setCouponNumber(event.target.value);
    }
    else {
      setCouponNumber(10)
    }
  };




  const datas = () => {
    var dataArray = []
    var columnName = ""
    couponsList.map((item, index) => {
      if (index == 0) {
        columnName = item
      }
      else {
        dataArray.push({
          [columnName]: item
        })
      }
    });
    return dataArray
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
          <div className="d-flex mt-5">
            <div className="me-5">
              <input
                className="form-check-input  me-2"
                type="radio"
                checked={cupponsType === "genericCuppons"}
                onChange={changeCouppons}
                value="genericCuppons"
              />
              <label className="form-label fs-7 fw-bolder">
                Generic coupons
              </label>
            </div>
            <div className="me-5">
              <input
                className="form-check-input  me-2"
                type="radio"
                checked={cupponsType === "generateCuppons"}
                onChange={changeCouppons}
                value="generateCuppons"
              />
              <label className="form-label fs-7 fw-bolder">
                Generate coupons
              </label>
            </div>
            <div className="me-5">
              <input
                className="form-check-input  me-2"
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
          {cupponsType === "genericCuppons" && (
            <div className="d-inline-block mt-5" >
              <div className="">
                <label
                  htmlFor="campaignname"
                  className="form-label fs-7 fw-bolder mb-1"
                >
                  Your Code
                </label>
                <input
                  className="form-control form-control-solid"
                  type="text"
                  placeholder="Enter Your Code"
                  value={genericCode}
                  onChange={changeGenericCode}
                />
              </div>
            </div>
          )}
          {cupponsType === "generateCuppons" && (
            <div className="row">
              <div className="col-sm-12 col-md-3  mt-5">
                <label
                  htmlFor="campaignname"
                  className="form-label fs-7 fw-bolder mb-1"
                >
                  Charset
                </label>
                <Select
                  value={selectedCharsetType}
                  options={charsetTypeList}
                  placeholder="Charset"
                  className="form-control form-control-solid p-0"
                  onChange={changeCharsetType}
                />
              </div>
              <div className="col-sm-12 col-md-3  mt-5">
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
              <div className="col-sm-12 col-md-3  mt-5">
                <label
                  htmlFor="campaignname"
                  className="form-label fs-7 fw-bolder mb-1"
                >
                  Number of coupons
                </label>
                <input
                  className="form-control form-control-solid"
                  type="number"
                  placeholder="Code length"
                  min={1}
                  value={couponNumber}
                  onChange={handleCouponNumberChange}
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

              <div className="d-inline-block">
                <button type="button" className="btn btn-lg btn-success my-5" onClick={generateCoupons}>Generate Coupons</button>
              </div>

              {couponsList?.length > 0 && (
                <>
                  <div className="col-12 mt-5">
                    <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed p-6">
                      <div className="form-group w-100">
                        <label className="form-label fs-7 fw-bolder mb-1" for="exampleFormControlTextarea1">Your all coupons ({couponsList.length})</label>
                        <textarea className="form-control w-100" id="exampleFormControlTextarea1" readOnly value={couponsList.join(', ')}></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="d-inline-block">
                    <CsvDownloader
                      filename="snookyCouponsList"
                      extension=".csv"
                      datas={datas}
                      text="Download Coupons (.csv)"
                      className="btn btn-lg btn-info my-5"
                    />
                  </div>
                </>
              )}


            </div>
          )}
          {cupponsType === "uploadCuppons" && (
            <div className="mt-5">

              {csvUploadList?.length > 0 && (<>


                <div className="col-12 mt-5">
                  <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed p-6">
                    <div className="form-group w-100">
                      <label className="form-label fs-7 fw-bolder mb-1" for="exampleFormControlTextarea1">Your all coupons ({csvUploadList.length})</label>
                      <textarea className="form-control w-100" id="exampleFormControlTextarea1" readOnly value={csvUploadList.join(', ')}></textarea>
                    </div>
                  </div>
                </div>
              </>)}

              <CSVReader
                onUploadAccepted={(results) => {
                  setCsvUploadList(results.data)
                }}
              >
                {({
                  getRootProps,
                  acceptedFile,
                  ProgressBar,
                  getRemoveFileProps,
                }) => (
                  <>
                    <div className="d-inline-block">
                      <div className="d-flex flex-column">
                        <div className="d-block">
                          <button className="btn btn-lg btn-info my-5" type='button' {...getRootProps()}>
                            Upload Coupons (.csv)
                          </button>
                          <div >
                            {acceptedFile && acceptedFile.name}
                          </div>
                          <button {...getRemoveFileProps()} className="d-none">
                            Remove
                          </button>
                        </div>
                        <ProgressBar />
                      </div>
                    </div>

                  </>
                )}
              </CSVReader>

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { CampaignUploadCoupons };
