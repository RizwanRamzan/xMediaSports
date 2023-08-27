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

import { Button, Layout,Typography} from "antd";
import "./layout.css"

const {Text} = Typography

function Footer() {
  const { Footer: AntFooter } = Layout;

  return (
    <AntFooter>
      <div style={{display:"flex"}}>
          <p style={{width:"-webkit-fill-available"}}>X Media Sports {new Date().getFullYear()}</p>
          <Button htmlType="submit" style={{ backgroundColor: "#FF9A00" }} type="primary">Export</Button>
      </div>
    </AntFooter>
  );
}

export default Footer;
