/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";
import { useIntl } from "react-intl";
import { AsideMenuItemWithSub } from "./AsideMenuItemWithSub";
import { AsideMenuItem } from "./AsideMenuItem";
import Select from "react-select";
import { useDispatch } from 'react-redux';
import { setCurrentDomain } from "../../../../store/reducers/currentDomainReducer";
import { useSelector } from 'react-redux';
import { useAuth } from "../../../../app/modules/auth";
import { current } from "@reduxjs/toolkit";


export function AsideMenuMain() {
  const { currentUser } = useAuth();
  const dispatch = useDispatch();
  const intl = useIntl();
  const [domainListx, setDomainListx] = useState([])
  const getCurrentDomain = useSelector((state) => state.domain.selectedDomain)

  const domainList = []

  useEffect(() => {
    console.log("currentUser.domains : ", currentUser.domains)
    currentUser.domains.map(e => {
     
      let check = domainList.some(item => item.value == e.url);
      console.log("e : ", check)
      if (!check) {
        domainList.push({ value: e.url, label: e.name })
      }
      setDomainListx(domainList)
    })
  }, [])

  useEffect(() => {
    if (domainList.length > 0) {
      dispatch(setCurrentDomain(domainList[0]));
    }
  }, [domainList])
  


  const changeSelectedDomain = (event) => {
    dispatch(setCurrentDomain(event));
  };
  return (
    <>
      <div className="menu-item">
        <Select
          options={domainListx}
          value={getCurrentDomain}
          onChange={changeSelectedDomain}
          placeholder="Domains"
          className="mt-4 form-control form-control-solid p-0"
        />
      </div>
      <div className="menu-item">
        <div className="menu-content pt-8 pb-2">
          <span className="menu-section text-muted text-uppercase fs-8 ls-1"></span>
        </div>
      </div>

      <AsideMenuItem
        to="/campaigns"
        icon="element-11"
        title={intl.formatMessage({ id: "MENU.DASHBOARD" })}
      />

      <AsideMenuItem to="/analytics" icon="chart-simple" title="Analytics" />
      <div className="d-none">
        <AsideMenuItem
          to="/onboarding/welcome"
          icon="switch"
          title="Onboarding"
        />

        <div className="menu-item">
          <div className="menu-content pt-8 pb-2">
            <span className="menu-section text-muted text-uppercase fs-8 ls-1">
              Crafted
            </span>
          </div>
        </div>
        <AsideMenuItemWithSub to="/crafted/pages" title="Pages" icon="gift">
          <AsideMenuItemWithSub
            to="/crafted/pages/profile"
            title="Profile"
            hasBullet={true}
          >
            <AsideMenuItem
              to="/crafted/pages/profile/overview"
              title="Overview"
              hasBullet={true}
            />
            <AsideMenuItem
              to="/crafted/pages/profile/projects"
              title="Projects"
              hasBullet={true}
            />
            <AsideMenuItem
              to="/crafted/pages/profile/campaigns"
              title="Campaigns"
              hasBullet={true}
            />
            <AsideMenuItem
              to="/crafted/pages/profile/documents"
              title="Documents"
              hasBullet={true}
            />
            <AsideMenuItem
              to="/crafted/pages/profile/connections"
              title="Connections"
              hasBullet={true}
            />
          </AsideMenuItemWithSub>

          <AsideMenuItemWithSub
            to="/crafted/pages/wizards"
            title="Wizards"
            hasBullet={true}
          >
            <AsideMenuItem
              to="/crafted/pages/wizards/horizontal"
              title="Horizontal"
              hasBullet={true}
            />
            <AsideMenuItem
              to="/crafted/pages/wizards/vertical"
              title="Vertical"
              hasBullet={true}
            />
          </AsideMenuItemWithSub>
        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub
          to="/crafted/accounts"
          title="Accounts"
          icon="profile-circle"
        >
          <AsideMenuItem
            to="/crafted/account/overview"
            title="Overview"
            hasBullet={true}
          />
          <AsideMenuItem
            to="/crafted/account/settings"
            title="Settings"
            hasBullet={true}
          />
        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub to="/error" title="Errors" icon="cross-circle">
          <AsideMenuItem to="/error/404" title="Error 404" hasBullet={true} />
          <AsideMenuItem to="/error/500" title="Error 500" hasBullet={true} />
        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub
          to="/crafted/widgets"
          title="Widgets"
          icon="element-plus"
        >
          <AsideMenuItem
            to="/crafted/widgets/lists"
            title="Lists"
            hasBullet={true}
          />
          <AsideMenuItem
            to="/crafted/widgets/statistics"
            title="Statistics"
            hasBullet={true}
          />
          <AsideMenuItem
            to="/crafted/widgets/charts"
            title="Charts"
            hasBullet={true}
          />
          <AsideMenuItem
            to="/crafted/widgets/mixed"
            title="Mixed"
            hasBullet={true}
          />
          <AsideMenuItem
            to="/crafted/widgets/tables"
            title="Tables"
            hasBullet={true}
          />
          <AsideMenuItem
            to="/crafted/widgets/feeds"
            title="Feeds"
            hasBullet={true}
          />
        </AsideMenuItemWithSub>
        <div className="menu-item">
          <div className="menu-content pt-8 pb-2">
            <span className="menu-section text-muted text-uppercase fs-8 ls-1">
              Apps
            </span>
          </div>
        </div>
        <AsideMenuItemWithSub
          to="/apps/chat"
          title="Chat"
          icon="message-text-2"
        >
          <AsideMenuItem
            to="/apps/chat/private-chat"
            title="Private Chat"
            hasBullet={true}
          />
          <AsideMenuItem
            to="/apps/chat/group-chat"
            title="Group Chart"
            hasBullet={true}
          />
          <AsideMenuItem
            to="/apps/chat/drawer-chat"
            title="Drawer Chart"
            hasBullet={true}
          />
        </AsideMenuItemWithSub>
        <AsideMenuItem
          to="/apps/user-management/users"
          icon="shield-tick"
          title="User management"
        />
      </div>
    </>
  );
}
