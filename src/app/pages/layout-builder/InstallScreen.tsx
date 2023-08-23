import React, { useState } from "react";
import { KTIcon } from "../../../_metronic/helpers";

type Props = {};

const InstallScreen: React.FC<Props> = ({}) => {
  const [loading, setLoading] = useState(false);

  const customScriptCode = () => {
    return `&lt;!-- Custom code --&gt;
&lt;script&gt;
  (function () {
    document.addEventListener("DOMContentLoaded", function () {
      !function () {
        let ic = 'asd',
          e = 'xyz',
          t = new URLSearchParams(window.location.search).get("fpRoute"),
          a = e + 'frame/view/' + ic;
      }()
    }, !1);
  })();
&lt;/script&gt;
&lt;iframe src="" style="width: 100%; min-height: 100vh; display: block; border: 0;" id="equotaCustomerIframe"&gt;&lt;/iframe&gt;
&lt;!-- Custom code --&gt;`;
  };

  const gtmScriptCode = () => {
    return `&lt;!-- Google Tag Manager code --&gt;
&lt;script&gt;
  (function () {
    document.addEventListener("DOMContentLoaded", function () {
      !function () {
    }, !1);
  })();
&lt;/script&gt;
&lt;iframe src="" style="width: 100%; min-height: 100vh; display: block; border: 0;" id="equotaCustomerIframe"&gt;&lt;/iframe&gt;
&lt;!-- Google Tag Manager code --&gt;`;
  };

  const shopifyScriptCode = () => {
    return `&lt;!-- Shopify code --&gt;
&lt;script&gt;
  (function () {
    document.addEventListener("DOMContentLoaded", function () {
      !function () {
        let ic = 'asd',
          e = 'xyz',
          a = e + 'frame/view/' + ic;
      }()
    }, !1);
  })();
&lt;/script&gt;
&lt;!-- Shopify code --&gt;`;
  };

  const convertCodeVisible = (codeBlock) => {
    return codeBlock.split("&lt;").join("<").split("&gt;").join(">");
  };

  return (
    <>
      <ul className="nav nav-tabs nav-line-tabs nav-line-tabs-2x mb-5 fs-6">
        <li className="nav-item">
          <a
            className="nav-link active"
            data-bs-toggle="tab"
            href="#kt_tab_pane_4"
          >
            Custom
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_5">
            GTM
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_6">
            Shopify
          </a>
        </li>
      </ul>
      <h1>Install popup on abdullahturkmen.com</h1>
      <span className="my-4 d-block">
        Embed code that works on all website platforms.
      </span>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="kt_tab_pane_4"
          role="tabpanel"
        >
          <div className="d-block bg-light rounded p-3">
            <pre>
              <code>{convertCodeVisible(customScriptCode())}</code>
            </pre>
          </div>
        </div>
        <div className="tab-pane fade" id="kt_tab_pane_5" role="tabpanel">
          <div className="d-block bg-light rounded p-3">
            <pre>
              <code>{convertCodeVisible(gtmScriptCode())}</code>
            </pre>
          </div>
        </div>
        <div className="tab-pane fade" id="kt_tab_pane_6" role="tabpanel">
          <div className="d-block bg-light rounded p-3">
            <pre>
              <code>{convertCodeVisible(shopifyScriptCode())}</code>
            </pre>
          </div>
        </div>
      </div>

      <span className="mt-2 d-block">
        Copy and paste the{" "}
        <strong>
          embed code above just before the closing <code>&lt;/body&gt;</code>{" "}
          tag
        </strong>{" "}
        of your website template file.
      </span>

      <div className="d-flex justify-content-end py-6 px-9">
        <button
          id="kt_account_deactivate_account_submit"
          type="submit"
          className="btn btn-success fw-bold"
        >
          Check Verify
        </button>
      </div>

      <div className="card mt-5">
        <div className="card-header border-0">
          <div className="card-title m-0">
            <h3 className="fw-bolder m-0">
              Send instruction to your developer
            </h3>
          </div>
        </div>

        <div id="kt_account_deactivate" className="collapse show">
          <form id="kt_account_deactivate_form" className="form">
            <div className="card-body border-top p-9">
              <div className="notice d-flex bg-light-warning rounded border-warning border border-dashed mb-9 p-6">
                <KTIcon
                  iconName="information-5"
                  className="fs-2tx text-warning me-4"
                />

                <div className="d-flex flex-stack flex-grow-1">
                  <div className="fw-bold">
                    <div className="fs-6 text-gray-600">
                      Instruction consists of setting up the code snippet and
                      adding the bell to your website
                    </div>
                    <div className="d-block my-3">
                      <input
                        type="text"
                        className="form-control form-control-lg form-control-solid"
                        placeholder="E-mail Address"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-footer d-flex justify-content-end py-6 px-9">
              <button
                id="kt_account_deactivate_account_submit"
                type="submit"
                className="btn btn-danger fw-bold"
              >
                {!loading && "Send Instructions"}
                {loading && (
                  <span
                    className="indicator-progress"
                    style={{ display: "block" }}
                  >
                    Please wait...{" "}
                    <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default InstallScreen;
