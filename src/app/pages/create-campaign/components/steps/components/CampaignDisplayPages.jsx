import React, {  useState } from "react";
import Select from "react-select";
import { KTIcon } from "../../../../../../_metronic/helpers";


const CampaignDisplayPages = () => {

    const [selectedPagesOption, setSelectedPagesOption] =
    useState("selectedPages");
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
                      defaultChecked
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
                      defaultChecked
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
                      className="btn btn-primary mt-5"
                      onClick={addUrl}
                    >
                      Add rule
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
