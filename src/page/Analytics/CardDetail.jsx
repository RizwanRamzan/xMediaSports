import { Card, Col, Form, Input, Row } from "antd";
import {ArrowLeftOutlined} from "@ant-design/icons";

import "./home.css"
import { Link } from "react-router-dom";


const CardDetail = () => {


    const { TextArea } = Input;


    const storeCard = JSON.parse(localStorage.getItem("card"))

    return (
        <Card style={{ margin: "20px" }} title={<Link to={"/"} style={{color:"#FF9A00"}} ><ArrowLeftOutlined style={{color:"#FF9A00"}} /> Back</Link>} extra={<img width={"40px"} src={storeCard?.icon ? storeCard?.icon : "/Flag-United-States-of-America.webp"} />}>
            <Form layout="vertical">
                <Row gutter={20}>
                    <Col span={8}>
                        <Form.Item name="countries" label="Country" rules={[{ required: true, message: "please select muti countries" }]}>
                            <Input className="ant-input-affix-wrapper" defaultValue={storeCard?.country || "--"} readOnly />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item name="stations" label="Stations / Channels" rules={[{ required: true, message: "please select stations" }]}>
                            <Input className="ant-input-affix-wrapper" defaultValue={storeCard?.channel_name || "--"} />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item name="stations" label="Show" rules={[{ required: true, message: "please select stations" }]}>
                            <Input className="ant-input-affix-wrapper" defaultValue={storeCard?.title || "--"}/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={20}>
                    <Col span={8}>
                        <Form.Item name="countries" label="Actors" rules={[{ required: true, message: "please select muti countries" }]}>
                            <Input className="ant-input-affix-wrapper" defaultValue={storeCard?.actors || "--"} readOnly />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item name="stations" label="Category" rules={[{ required: true, message: "please select stations" }]}>
                            <Input className="ant-input-affix-wrapper" defaultValue={storeCard?.category || "--"} />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item name="stations" label="Composer" rules={[{ required: true, message: "please select stations" }]}>
                            <Input className="ant-input-affix-wrapper" defaultValue={storeCard?.composer || "--"}/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={20}>
                    <Col span={12}>
                        <Form.Item name="countries" label="Directors" rules={[{ required: true, message: "please select muti countries" }]}>
                            <Input className="ant-input-affix-wrapper" defaultValue={storeCard?.directors || "--"} readOnly />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item name="stations" label="Descriptions" rules={[{ required: true, message: "please select stations" }]}>
                            <TextArea rows={2} defaultValue={storeCard?.desc || "--"} />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Card>
    )
}


export default CardDetail