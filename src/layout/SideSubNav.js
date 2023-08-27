/*!
  =========================================================
  * Muse Ant Design Dashboard - v1.0.0
  =========================================================
  * Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
  * Copyright 2021 Creative Tim (https://www.creative-tim.com)
  * Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
  * Coded by Creative Tim
  =========================================================
  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// import { useState } from "react";
import { Menu } from "antd";
import "./layout.css"
import { ApartmentOutlined, LaptopOutlined, SearchOutlined, TabletOutlined, ToolOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function SideSubNav({ setSideBr, setSideBrSub }) {

    const navigate = useNavigate()

    const handleSubSiderBar = (path) => {
        navigate(path)
        setSideBr(0)
        setSideBrSub(0)
    }

    return (
        <>
            <Menu style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }} theme="light" mode="inline">
                <Menu.Item className="subMenuNav" key="7">
                    <div onClick={() =>
                        handleSubSiderBar("/analytics-1")

                    } className={window.location.pathname.includes("analytics-1") ? "sub-menu-icon active" : "sub-menu-icon"}>
                        <ApartmentOutlined />
                        <span>Analytics I</span>
                    </div>
                </Menu.Item>
                <Menu.Item className="subMenuNav" key="8">
                    <div onClick={() => handleSubSiderBar("/analytics-2")} className={window.location.pathname.includes("analytics-2") ? "sub-menu-icon active" : "sub-menu-icon"}>
                        <ApartmentOutlined />
                        <span>Analytics II</span>
                    </div>
                </Menu.Item>
                <Menu.Item className="subMenuNav" key="3">
                    <div className="sub-menu-icon">
                        <SearchOutlined />
                        <span className>Monitoring (Channels)</span>
                    </div>
                </Menu.Item>
                <Menu.Item className="subMenuNav" key="1">
                    <div className="sub-menu-icon">
                        <TabletOutlined />
                        <span>Tv News</span>
                    </div>
                </Menu.Item>
                <Menu.Item className="subMenuNav" key="2">
                    <div className="sub-menu-icon">
                        <TabletOutlined />
                        <span className>Rating</span>
                    </div>
                </Menu.Item>
                <Menu.Item className="subMenuNav" key="4">
                    <div className="sub-menu-icon">
                        <ToolOutlined />
                        <span className>Configuration</span>
                    </div>
                </Menu.Item>
                <Menu.Item className="subMenuNav" key="6">
                    <div className="sub-menu-icon">
                        <ToolOutlined />
                        <span >Rights Holders</span>
                    </div>
                </Menu.Item>
            </Menu>
        </>
    );
}

export default SideSubNav;
