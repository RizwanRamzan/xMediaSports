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

import { Button, Layout, Typography } from "antd";
import "./layout.css";
import { CSVLink } from "react-csv";

const { Text } = Typography;

function Footer({ data, getAllShows }) {
  const { Footer: AntFooter } = Layout;

  // const JsonData = JSON.stringify(data)
  const dummyData = [
    { name: "John Doe", age: 30, email: "john@example.com" },
    { name: "Jane Smith", age: 25, email: "jane@example.com" },
    // Add your data here
  ];

  const headers = [
    { label: "Actors", key: "actors" },
    { label: "Category", key: "category" },
    { label: "Channel_name", key: "channel_name" },
    { label: "Composer", key: "composer" },
    { label: "Country", key: "country" },
    { label: "Data_resource", key: "data_resource" },
    { label: "description", key: "desc" },
    { label: "Directors", key: "directors" },
    { label: "Icon", key: "icon" },
    { label: "Id", key: "id" },
    { label: "Ingested_at", key: "ingested_at" },
    { label: "Presentor", key: "presentor" },
    { label: "Productiondate", key: "productiondate" },
    { label: "Rating", key: "rating" },
    { label: "Start_utc", key: "start_utc" },
    { label: "Title", key: "title" },
    { label: "Writers", key: "writers" },
    { label: "Stop_utc", key: "stop_utc" },
  ];

  return (
    <AntFooter>
      <div className="footerTop">
        <p style={{ width: "-webkit-fill-available" }}>
          X Media Sports {new Date().getFullYear()}
        </p>
        <div style={{ display: "flex", alignItems: "center", justifyContent:"center"}}>
          <p
            style={{
              margin: "0px",
              height: "auto",
              width: "70px",
              color: "gray",
              fontWeight: "600",
            }}
          >{`${
            data?.length < 10
              ? "0" + data?.length || "00"
              : data?.length || "00"
          } / ${getAllShows?.length || "00"}`}</p>
          <CSVLink
            style={{ display: "flex", alignItems: "center", gap: "20px" }}
            data={getAllShows?.length ? getAllShows : dummyData}
            headers={headers}
            filename={"data.csv"}
            className="btn btn-primary"
          >
            <Button
              disabled={!data?.length}
              htmlType="submit"
              style={{ backgroundColor: "#FF9A00" }}
              type="primary"
            >
              Export
            </Button>
          </CSVLink>
        </div>
      </div>
    </AntFooter>
  );
}

export default Footer;
