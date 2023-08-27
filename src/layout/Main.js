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

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Layout, Drawer, Affix } from "antd";
import Sidenav from "./Sidenav";
import Header from "../Components/header";
import SideSubNav from "./SideSubNav";
import { useMediaQuery } from "react-responsive";

const { Header: AntHeader, Content, Sider } = Layout;

function Main({ children }) {

  const mobileResponsive = useMediaQuery({
    query: '(max-width: 900px)'
})


  const [sideBr,setSideBr]= useState(mobileResponsive ? 0 :150)
  const [sideBrSub,setSideBrSub] =useState(0)
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState("right");
  const [sidenavColor, setSidenavColor] = useState("#1890ff");
  const [sidenavType, setSidenavType] = useState("transparent");
  const [fixed, setFixed] = useState(false);

  const openDrawer = () => setVisible(!visible);
  const handleSidenavType = (type) => setSidenavType(type);
  const handleSidenavColor = (color) => setSidenavColor(color);
  const handleFixedNavbar = (type) => setFixed(type);

  let { pathname } = useLocation();
  pathname = pathname.replace("/", "");

  useEffect(() => {
    if (pathname === "rtl") {
      setPlacement("left");
    } else {
      setPlacement("right");
    }
  }, [pathname]);

  return (
    <>
    <Header setSideBr={setSideBr} setSideBrSub={setSideBrSub} sideBr={sideBr} />
    <Layout
      className={`layout-dashboard ${
        pathname === "profile" ? "layout-profile" : ""
      } ${pathname === "rtl" ? "layout-dashboard-rtl" : ""}`}
    >
      <Sider
        collapsedWidth="0"
        width={sideBr}
        style={{ backgroundColor:"#ffffff",boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",height:"86vh",overflowY:"scroll"}}
      >
        <Sidenav sideBrSub={sideBrSub} setSideBrSub={setSideBrSub} color={sidenavColor} />
      </Sider>
      <Sider
        collapsedWidth="0"
        width={sideBrSub}
        style={{ backgroundColor:"#ffffff",boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",height:"86vh",overflowY:"scroll"}}
      >
        <SideSubNav setSideBr={setSideBr} setSideBrSub={setSideBrSub} color={sidenavColor} />
      </Sider>
      <Layout style={{height:"86vh",overflowY:"scroll"}}>
        <Content className="content-ant">{children}</Content>
      </Layout>
    </Layout>
    </>
  );
}

export default Main;
