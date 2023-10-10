import React, { useState } from "react";
import Select from "react-select";
import { KTIcon } from "../../../../../../_metronic/helpers";


const CampaignDisplayPages = () => {
  const [isAnd, setIsAnd] = useState(false);

  const andToOrFunction = () => {
    setIsAnd(!isAnd);
  };
  const [selectedPagesOption, setSelectedPagesOption] = useState("selectedPages");
  const URLOptions = [
    { value: "url0", label: "Simple match" },
    { value: "url1", label: "Does not simply match" },
    { value: "url2", label: "Returning visitors" },
    { value: "url3", label: "Is equal to" },
    { value: "url4", label: "Is not equal to" },
    { value: "url5", label: "Contains" },
    { value: "url6", label: "Does not contain" },
    { value: "url7", label: "Starts with" },
    { value: "url8", label: "Ends with" },
    { value: "url9", label: "Does not end with" },
    { value: "url10", label: "Matches the RegEx" },
    { value: "url11", label: "Does not matche the RegEx" },
  ];

  const changePagesOption = (event) => {
    setSelectedPagesOption(event.target.value);
  };

  const [urlList, setUrlList] = useState([{ URLType: null, url: "" }]);

  const addUrl = () => {
    setUrlList([...urlList, { URLType: null, url: "" }]);
  };

  const removeUrl = (index) => {
    const updatedList = [...urlList];
    updatedList.splice(index, 1);
    setUrlList(updatedList);
  };

  const updateUrl = (index, field, value) => {
    const updatedList = [...urlList];
    updatedList[index][field] = value;
    setUrlList(updatedList);
  };

  return (
    <div className="accordion-item mb-8 shadow border-top">
      <h2 className="accordion-header" id="headingSix">
        <button
          className="accordion-button collapsed fs-4 fw-bold"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseSix"
          aria-expanded="false"
          aria-controls="collapseSix"
        >
          Display Pages
        </button>
      </h2>
      <div
        id="collapseSix"
        className="accordion-collapse collapse"
        aria-labelledby="headingSix"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <strong>Frequency</strong>{" "}
          <label className="form-check form-switch form-check-custom form-check-solid align-items-start mt-5">
            <input className="form-check-input me-5" type="checkbox" />
            <div className="d-flex flex-column">
              <span className="form-label fw-bolder">Display Limit</span>
              <span className="form-label">
                Don't display the promotion above times per session
              </span>
            </div>
          </label>
          <hr />
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
              <input
                className="form-check-input  me-5"
                type="radio"
                checked={selectedPagesOption === "selectedPages"}
                onChange={changePagesOption}
                value="selectedPages"
              />
              <label className="form-label fs-7 fw-bolder">
                Display on all pages
              </label>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-2">
              <input
                className="form-check-input  me-5"
                type="radio"
                checked={selectedPagesOption === "selectedURL"}
                onChange={changePagesOption}
                value="selectedURL"
              />
              <label className="form-label fs-7 fw-bolder">
                Select URLs
              </label>
            </div>
          </div>
          {selectedPagesOption === "selectedURL" ? (
            <div className="mt-5">
              {urlList.map((item, index) => (
                <div key={index} className="mb-2">
                  {index !== 0 && (
                    <div className="d-flex gap-5 border rounded p-3 justify-content-center" onClick={andToOrFunction} style={{ width: '80px' }}>
                      <div className="text">{isAnd ? 'AND' : 'OR'}</div>
                      <div className="icon">{isAnd ? (
                        <svg
                          width="20px"
                          height="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M17.9188 8.17969H11.6888H6.07877C5.11877 8.17969 4.63877 9.33969 5.31877 10.0197L10.4988 15.1997C11.3288 16.0297 12.6788 16.0297 13.5088 15.1997L15.4788 13.2297L18.6888 10.0197C19.3588 9.33969 18.8788 8.17969 17.9188 8.17969Z"
                            fill="#292D32"
                          />
                        </svg>
                      ) : (
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.6806 13.9783L15.4706 10.7683L13.5106 8.79828C12.6806 7.96828 11.3306 7.96828 10.5006 8.79828L5.32056 13.9783C4.64056 14.6583 5.13056 15.8183 6.08056 15.8183H11.6906H17.9206C18.8806 15.8183 19.3606 14.6583 18.6806 13.9783Z" fill="#292D32" />
                        </svg>
                      )}</div>
                    </div>
                  )}
                  <div className="row d-flex align-items-center mb-2">
                    <div className="col-1">
                      {" "}
                      <span>URL</span>
                    </div>
                    <div className="col-5">
                      <Select
                        options={URLOptions}
                        placeholder="URL"
                        className="form-control form-control-solid p-0"
                        onChange={(selectedOption) =>
                          updateUrl(index, "URLType", selectedOption)
                        }
                        value={item.URLType}
                      />
                    </div>
                    <div className="col-5">
                      <input
                        id="url"
                        type="text"
                        className="form-control form-control-md form-control-solid"
                        placeholder="https://www.example.com"
                        value={item.url}
                        onChange={(e) =>
                          updateUrl(index, "url", e.target.value)
                        }
                      />
                    </div>
                    <div className="col-1">
                      {urlList.length > 1 && (
                        <button
                          type="button"
                          className="btn btn-light btn-sm"
                          onClick={() => removeUrl(index)}
                        >
                          <KTIcon iconName="trash" className="fs-3 text-danger" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <button
                type="button"
                className="btn btn-primary mt-5 btn-sm"
                onClick={addUrl}
              >
                <KTIcon iconName="plus" className="fs-3" />Add rule
              </button>
            </div>
          ) : (
            <div></div>
          )}

        </div>
      </div>
    </div>
  );
};

export { CampaignDisplayPages };
