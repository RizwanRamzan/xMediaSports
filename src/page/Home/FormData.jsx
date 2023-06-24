import React, { useState } from "react";
import { Breadcrumb, Button, Card, Col, DatePicker, Form, Input, Row, Select } from "antd";
import { demoData } from "./constant";

const { Option } = Select



const FormData = () => {


    const formHandler = (value) => {
        console.log(value)
    }


    

    return (
        <div style={{backgroundColor:"lightgrey",height:"100vh"}}>
            <Form style={{padding:"50px"}} onFinish={formHandler} layout="vertical">
                <Card title={<Breadcrumb
                    items={[
                        {
                            title: <a href="">Home</a>,
                        },
                        {
                            title: <a href="">Tv</a>,
                        },
                        {
                            title: 'Tv News',
                        },
                    ]}
                />} extra={<Button htmlType="submit" style={{backgroundColor:"#FF9A00"}} type="primary">Export</Button>}>
                    <Row gutter={20}>
                        <Col span={8}>
                            <Form.Item name="countries" label="Countries" rules={[{ required: true, message: "please select muti countries" }]}>
                                <Select mode="multiple" showArro placeholder="Plaese Select Multi Countrie">
                                    {demoData?.map((item)=>
                                    <Option key={item?.id} value={item.name}>{item?.name}</Option>
                                    )}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="stations" label="Stations" rules={[{ required: true, message: "please select stations" }]}>
                                <Select placeholder="Plaese Select Station">
                                    <Option value="1" >Testing</Option>
                                    <Option value="2">Testing</Option>
                                    <Option value="3">Testing</Option>
                                    <Option value="4">Testing</Option>
                                    <Option value="5">Testing</Option>
                                    <Option value="5">Testing</Option>
                                    <Option value="6">Testing</Option>
                                    <Option value="7">Testing</Option>
                                    <Option value="8">Testing</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="shows" label="Shows" rules={[{ required: true, message: "please select shows" }]}>
                                <Select placeholder="Plaese Select Show">
                                    <Option value="1" >Testing</Option>
                                    <Option value="2">Testing</Option>
                                    <Option value="3">Testing</Option>
                                    <Option value="4">Testing</Option>
                                    <Option value="5">Testing</Option>
                                    <Option value="5">Testing</Option>
                                    <Option value="6">Testing</Option>
                                    <Option value="7">Testing</Option>
                                    <Option value="8">Testing</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={20}>
                        <Col span={12}>
                            <Form.Item name="search" label="Search" rules={[{ required: true, message: "please select Search" }]}>
                                <Input placeholder="Search" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="Order" label="Order By" rules={[{ required: true, message: "please select Order" }]}>
                            <DatePicker style={{width:"100%"}} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={20}>
                        <Col span={12}>
                            <Form.Item name="startDate" label="Start Date" rules={[{ required: true, message: "please select startDate" }]}>
                            <DatePicker style={{width:"100%"}} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="endDate" label="End Date" rules={[{ required: true, message: "please select endDate" }]}>
                            <DatePicker style={{width:"100%"}} />
                            </Form.Item>
                        </Col>
                    </Row>
                </Card>
            </Form>
        </div>
    )
}

export default FormData