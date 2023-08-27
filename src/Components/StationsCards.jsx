import { Card, Col, Row } from "antd";
import moment from "moment/moment";
import React from "react";

const StationsCards = ({countryName,stationName,dec,title,icon,stop_utc,start_utc}) => {
    return (
        <Card title={`${countryName.toUpperCase()} / ${stationName}`} extra={<p>{moment.unix(start_utc).format("DD-MM-YYYY")}</p>}>
            <Row>
                <Col span={24}>
                    <h2 style={{margin:"0px"}} >{title}</h2>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <img style={{borderRadius:"7px",marginTop:"10px"}} width={"150px"} height={"130px"} src={icon ? icon : "/stock-photo-boston-ma-usa-july-charles-and-mercy-general-hospital-station-mgh-in-downtown-2076091318.jpg"} />
                </Col>
            </Row>
            <Row gutter={50} style={{alignContent:"center"}}>
                <Col span={24}>
                    <p style={{textAlign:"justify"}}>{dec}</p>
                </Col>
            </Row>

        </Card>
    )
}

export default StationsCards