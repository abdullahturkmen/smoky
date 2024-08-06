/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from "clsx";
import React, { useState, useEffect } from "react";
import { KTIcon } from "../../../_metronic/helpers";
import {
  getLayout,
  ILayout,
  LayoutSetup,
  useLayout,
} from "../../../_metronic/layout/core";
import { DomainsListWrapper } from "./domainsTable/DomainsList";
import { UsersListWrapper } from "./usersTable/UsersList";

import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { LogsList } from "./LogsList";
import { InvoiceScreen } from "./invoice/InvoiceScreen";
import { BillingScreen } from "./billing/BillingScreen";
import AdvancedSettingsScreen from "./AdvancedSettingsScreen";
import InstallScreen from "./InstallScreen";
import { ProfileScreen } from "./ProfileScreen";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SettingsPage: React.FC = () => {
  const navigate = useNavigate();
  const { setLayout } = useLayout();
  const [tab, setTab] = useState("Profile");
  const [config, setConfig] = useState<ILayout>(getLayout());
  const [configLoading, setConfigLoading] = useState<boolean>(false);
  const [resetLoading, setResetLoading] = useState<boolean>(false);
  const searchParams = new URLSearchParams(document.location.search);

  const setTabFunction = (type) => {
    setTab(type);
    if (type != tab) {
      window.location.href = `${window.location.protocol}//${window.location.host}/settings?type=${type}`;
    }
  };

  const updateData = (fieldsToUpdate: Partial<ILayout>) => {
    const updatedData = { ...config, ...fieldsToUpdate };
    setConfig(updatedData);
  };

  const updateConfig = () => {
    setConfigLoading(true);
    try {
      LayoutSetup.setConfig(config);
    } catch (error) {
      setConfig(getLayout());
    }
    setTimeout(() => {
      setLayout(config);
      setConfigLoading(false);
    }, 1000);
  };

  const reset = () => {
    setResetLoading(true);
    setTimeout(() => {
      setConfig(getLayout());
      setResetLoading(false);
    }, 1000);
  };

  useEffect(() => {
    setTab(searchParams.get("type") || tab);
  }, [searchParams.get("type")]);

  const guncelle = () => {
    console.log("güncelleme")


    axios.put(`https://app.api.smoky.com/api/domain/update`, {
      "id": 39,
      "name": "abdullah-update-1",
      "url": "http://abdullah-update-1.com"
    })

  }
  return (
    <>
      <div className=" card-custom">
        <div className="card-header card-header-stretch overflow-auto">
          <ul
            className="nav nav-stretch nav-line-tabs fw-bold border-transparent flex-nowrap overflow-y-hidden"
            role="tablist"
          >
            <li className="nav-item">
              <a
                className={clsx(
                  `nav-link cursor-pointer text-nowrap `,
                  { "text-dark": tab !== "Profile" },
                  { "active text-primary": tab === "Profile" }
                )}
                onClick={() => setTabFunction("Profile")}
                role="tab"
              >
                Settings
              </a>
            </li>
            <li className="nav-item">
              <a
                className={clsx(
                  `nav-link cursor-pointer text-nowrap`,
                  { "text-dark": tab !== "Users" },
                  { "active text-primary": tab === "Users" }
                )}
                onClick={() => setTabFunction("Users")}
                role="tab"
              >
                Users
              </a>
            </li>

            <li className="nav-item">
              <a
                className={clsx(
                  `nav-link cursor-pointer text-nowrap `,
                  { "text-dark": tab !== "Websites" },
                  { "active text-primary": tab === "Websites" }
                )}
                onClick={() => setTabFunction("Websites")}
                role="tab"
              >
                Websites
              </a>
            </li>
            <li className="nav-item">
              <a
                className={clsx(
                  `nav-link cursor-pointer text-nowrap `,
                  { "text-dark": tab !== "Install" },
                  { "active text-primary": tab === "Install" }
                )}
                onClick={() => setTabFunction("Install")}
                role="tab"
              >
                Install
              </a>
            </li>
            <li className="nav-item">
              <a
                className={clsx(
                  `nav-link cursor-pointer text-nowrap `,
                  { "text-dark": tab !== "Advanced-Settings" },
                  { "active text-primary": tab === "Advanced-Settings" }
                )}
                onClick={() => setTabFunction("Advanced-Settings")}
                role="tab"
              >
                Advanced Settings
              </a>
            </li>
            <li className="nav-item">
              <a
                className={clsx(
                  `nav-link cursor-pointer text-nowrap`,
                  { "text-dark": tab !== "Billing" },
                  { "active text-primary": tab === "Billing" }
                )}
                onClick={() => setTabFunction("Billing")}
                role="tab"
              >
                Billing
              </a>
            </li>
            <li className="nav-item">
              <a
                className={clsx(
                  `nav-link cursor-pointer text-nowrap`,
                  { "text-dark": tab !== "Invoice" },
                  { "active text-primary": tab === "Invoice" }
                )}
                onClick={() => setTabFunction("Invoice")}
                role="tab"
              >
                Invoice
              </a>
            </li>
            <li className="nav-item">
              <a
                className={clsx(
                  `nav-link cursor-pointer text-nowrap`,
                  { "text-dark": tab !== "Logs" },
                  { "active text-primary": tab === "Logs" }
                )}
                onClick={() => setTabFunction("Logs")}
                role="tab"
              >
                Logs
              </a>
            </li>
            <li><button type="button" onClick={guncelle}>güncelle</button></li>
          </ul>
        </div>
        {/* end::Users */}

        {/* begin::Form */}
        <form className="form">
          {/* begin::Body */}
          <div className="card-body">
            <div className="tab-content pt-3">
              <div className={clsx("tab-pane", { active: tab === "Profile" })}>
                {tab === "Profile" && (
                  <>
                    <ProfileScreen />{" "}
                  </>
                )}
              </div>
              <div className={clsx("tab-pane", { active: tab === "Users" })}>
                {tab === "Users" && (
                  <>
                    <UsersListWrapper />
                  </>
                )}
              </div>
              <div className={clsx("tab-pane", { active: tab === "Websites" })}>
                {tab === "Websites" && (
                  <>
                    <DomainsListWrapper />
                  </>
                )}
              </div>

              <div className={clsx("tab-pane", { active: tab === "Install" })}>
                {tab === "Install" && (
                  <>
                    <InstallScreen />
                  </>
                )}
              </div>

              <div
                className={clsx("tab-pane", {
                  active: tab === "Advanced-Settings",
                })}
              >
                {tab === "Advanced-Settings" && (
                  <>
                    <AdvancedSettingsScreen />
                  </>
                )}
              </div>
              <div className={clsx("tab-pane", { active: tab === "Billing" })}>
                {tab === "Billing" && (
                  <>
                    <BillingScreen />
                  </>
                )}
              </div>
              <div className={clsx("tab-pane", { active: tab === "Invoice" })}>
                {tab === "Invoice" && (
                  <>
                    <InvoiceScreen />
                  </>
                )}
              </div>
              <div className={clsx("tab-pane", { active: tab === "Logs" })}>
                {tab === "Logs" && (
                  <>
                    <LogsList className="" />
                  </>
                )}
              </div>
            </div>
          </div>
          {/* end::Body */}
        </form>
        {/* end::Form */}
      </div>
    </>
  );
};

export { SettingsPage };
