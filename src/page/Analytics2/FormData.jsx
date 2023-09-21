import React, { useEffect, useState } from "react";
import { Breadcrumb, Button, Card, Col, DatePicker, Form, Input, Modal, Pagination, Row, Select, Spin, message } from "antd";
import { url } from "./constant";
import Footer from "../../layout/Footer";
import StationsCards from "../../Components/StationsCards";
import "./analytic.css"
import { postRequestFormData } from "../../hooks/apiCalls";
import { Link } from "react-router-dom";
import { countryData } from "../Analytics/constant";
import { useMediaQuery } from "react-responsive";

const { Option } = Select



const FormData = () => {

    const [stations, setStations] = useState([])
    const [shows, setShows] = useState()
    const [country, setCountry] = useState([])
    const [selectedCountry, setSelectedCountry] = useState(0)
    const [selectedStation, setSelectedStation] = useState(0)
    const [loading, setLoading] = useState(false)
    const [getAllShows, setGetAllShows] = useState([])
    const [pageNumber, setPageNumber] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const [values, setValues] = useState({ offset: 0, limit: 100 })



    const [AssignForm] = Form.useForm();


    const mobileResponsive = useMediaQuery({
        query: '(max-width: 900px)'
    })



    const getCountry = async () => {
        setLoading(true)
        const onSuccess = (res) => {
            setCountry(res)
            setLoading(false)
            storeData()
        }

        const onError = (res) => {
            setLoading(false)
            // message.error("Something Went Wrong")
        }

        const payload = { type: "getLocation" }
        await postRequestFormData(payload, url, true, onSuccess, onError)
    }

    useEffect(() => {
        getCountry()
    }, [])


    // Filter Statios
    let filterStations = []
    if (stations.length) {
        for (let i = 0; i < stations.length; i++) {
            for (let j = 0; j < countryData.length; j++) {
                if (stations[i] == countryData[j].name) {
                    filterStations.push(countryData[i].channels)
                }
            }
        }

    }
    // Filter Shows
    let filterShows = []
    if (filterStations.flat().length) {
        filterStations.flat().filter((item) => {
            if (item.name == shows) {
                filterShows.push(item)
            }
        })
    }


    const getStations = async (e) => {
        setLoading(true)
        const onSuccess = (res) => {
            setStations(res)
            setLoading(false)
        }

        const onError = (res) => {
            setLoading(false)
            message.error("Something Went Wrong")
        }

        const payload = { type: "getStations", countryId: e }
        await postRequestFormData(payload, url, true, onSuccess, onError)
    }


    const formHandler = async (value) => {
        localStorage.clear()
        setGetAllShows([])
        setPageNumber([])
        const startDateSecond = Math.floor(new Date(value.startDate).getTime() / 1000)
        const endDateSecond = Math.floor(new Date(value.endDate).getTime() / 1000)
        const findCountry = country.find((item) => item.id == selectedCountry)
        const findStation = stations.flat().find((item) => item.id == selectedStation)


        setLoading(true)
        const onSuccess = (res) => {
            message.success("Get All Shows Selected Date")
            setLoading(false)
            setGetAllShows(res)
            localStorage.setItem("shows1", JSON.stringify(res))
            setPageNumber(res.slice(0, 9))

        }

        const onError = (res) => {
            message.warning("Show is Not Available")
            setLoading(false)

        }

        const payload = {
            type: "result",
            qstring: value?.search,
            channel_name: findStation?.tvg_id || "na",
            country: findCountry?.name || "na",
            start_utc: startDateSecond || "na",
            stop_utc: endDateSecond || "na",
            // limit: values.limit,
            // offset: values.offset,
        }
        await postRequestFormData(payload, url, true, onSuccess, onError)

    }


    const storeShows = JSON.parse(localStorage.getItem("shows1"))
    const pagination = (page, listingSize) => {
        const pageDefault = (page - 1) * listingSize
        // setSkip(page * 10)
        const size = page * 10

        const listSize = getAllShows.length ? getAllShows?.slice(pageDefault, size) : storeShows?.slice(pageDefault, size)
        setPageNumber(listSize)

    }



    const storeData = () => {
        setPageNumber(getAllShows.length ? getAllShows.slice(0, 9) : storeShows.slice(0, 9))
    }


    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
        form.resetFields()
    };
    const handleCancel = () => {
        setIsModalOpen(false);
        form.resetFields()

    };

    const { TextArea } = Input;


    const storeCard = JSON.parse(localStorage.getItem("card"))

    const [form] = Form.useForm();


    useEffect(() => {
        if (isModalOpen) {
            form.setFieldsValue({
                countries: storeCard?.country || "--",
                stations: storeCard?.channel_name || "--",
                show: storeCard?.title || "--",
                actors: storeCard?.actors || "--",
                category: storeCard?.category || "--",
                composer: storeCard?.composer || "--",
                directors: storeCard?.directors || "--",
                descriptions: storeCard?.desc || "--"
            });
        }
    }, [isModalOpen])



    return (
        <Spin spinning={loading}>
            <div className="FormDtaa" style={{ height: "100%", overflowY: "auto" }}>
                <Form form={form} style={{ padding: "20px" }} layout="vertical" onFinish={formHandler}>
                    <Card title={<Breadcrumb
                        items={[
                            {
                                title: <a href="">Home</a>,
                            },
                            {
                                title: <a href="">Tv</a>,
                            },
                            {
                                title: 'Analytic-I',
                            },
                        ]}
                    />}

                    >
                        <Row gutter={20}>
                            <Col span={24}>
                                <Form.Item name="search" label="Search" rules={[{ required: true, message: "please enter anything" }]}>
                                    <Input className="ant-input-affix-wrapper" placeholder="Search" />
                                </Form.Item>
                            </Col>
                            {/* <Col span={24}>
                                <div className="extra">
                                    <Form.Item name="offset" label="Offset" rules={[{ required: false, message: "please enter offset" }]}>
                                        <Input onChange={(e) => setValues({ offset: e.target.value, limit: values.limit })} min={0} defaultValue={0} type="number" className="ant-input-affix-wrapper" placeholder="Enter offset" />
                                    </Form.Item>

                                    <Form.Item name="limit" label="Limit" rules={[{ required: false, message: "please enter limit" }]}>
                                        <Input onChange={(e) => setValues({ offset: values.offset, limit: e.target.value })} min={0} defaultValue={100} type="number" className="ant-input-affix-wrapper" placeholder="limit" />
                                    </Form.Item>
                                </div>
                            </Col> */}
                        </Row>
                        <Row gutter={20}>
                            <Col span={mobileResponsive ? 24 : 12}>
                                <Form.Item name="countries" label="Countries">
                                    <Select onSelect={(e) => {
                                        getStations(e)
                                        setSelectedCountry(e)
                                        AssignForm.resetFields(['stations', 'startDate', 'endDate']);
                                    }} placeholder="Plaese Select Multi Countrie"
                                    optionFilterProp="children"
                                    showSearch
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                      }
                                    >
                                        {country?.map((item, index) =>
                                            <Option key={index} value={item.id}>{item?.name}</Option>
                                        )}
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={mobileResponsive ? 24 : 12}>
                                <Form.Item name="stations" label="Stations / Channels" >
                                    <Select disabled={!stations.flat().length} onSelect={(e) => {
                                        setShows(e)
                                        setSelectedStation(e)
                                    }} placeholder="Plaese Select Station"
                                    optionFilterProp="children"
                                    showSearch
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                      }
                                    
                                    >
                                        {stations.flat().map((item, index) =>
                                            <Option key={index} value={item?.id} >{item?.stations}</Option>
                                        )}
                                    </Select>
                                </Form.Item>
                            </Col>
                            {/* <Col span={8}>
                                <Form.Item name="shows" label="Shows" rules={[{ required: true, message: "please select shows" }]}>
                                    <Select placeholder="Plaese Select Show">
                                        { demoData[0].stations.map((item, index) =>
                                            <Option key={index} value={item?.name} >{item?.name}</Option>
                                        )}
                                    </Select>
                                </Form.Item>
                            </Col> */}
                        </Row>
                        <Row gutter={20}>
                            <Col span={mobileResponsive ? 24 : 12}>
                                <Form.Item name="startDate" label="Start Date" >
                                    <DatePicker className="ant-input-affix-wrapper" style={{ width: "100%" }} />
                                </Form.Item>
                            </Col>
                            <Col span={mobileResponsive ? 24 : 12}>
                                <Form.Item name="endDate" label="End Date" >
                                    <DatePicker className="ant-input-affix-wrapper" style={{ width: "100%" }} />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item name="Order" label="Order By">
                                    <DatePicker className="ant-input-affix-wrapper" disabled style={{ width: "100%" }} />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row>
                            <Col span={24}>
                                <Button htmlType="submit" style={{ backgroundColor: "#FF9A00", float: "right" }} type="primary">Get Shows</Button>
                            </Col>
                        </Row>
                    </Card>
                </Form>

                {/* Add Footer */}
                <Footer data={pageNumber} getAllShows={storeShows} />

                {
                    storeShows &&
                    <div style={{ display: "flex", justifyContent: "center"}}>
                        <Pagination onChange={(e, page) => pagination(e, page)} className="pagination" defaultCurrent={1} total={storeShows.length} showSizeChanger={false} style={{ display: "flex", justifyContent: "center" }} />
                    </div>
                }

                <Row>
                    {pageNumber?.map((item) =>
                        <Col span={mobileResponsive ? 24 : 8}>

                            {/* <Link to={"/analytics-2-detail"}> */}
                            <div onClick={() => {
                                localStorage.setItem("card", JSON.stringify(item))
                                showModal()
                            }
                            } style={{ padding: "20px" }}>

                                <StationsCards stop_utc={item?.stop_utc} start_utc={item?.start_utc} countryName={item?.country} stationName={item?.channel_name} dec={item?.desc} title={item?.title ? item?.title : item?.channel_name} icon={item?.icon} />

                            </div>
                            {/* </Link> */}
                        </Col>
                    )}
                </Row>




                <Modal width={mobileResponsive ? "90%" : "80%"} footer={false} title="Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <Form form={form} layout="vertical">
                        <Row gutter={20}>
                            <Col span={mobileResponsive ? 24 : 12}>
                                <Form.Item name="countries" label="Country">
                                    <Input className="ant-input-affix-wrapper" readOnly />
                                </Form.Item>
                            </Col>
                            <Col span={mobileResponsive ? 24 : 12}>
                                <Form.Item name="stations" label="Stations / Channels" >
                                    <Input className="ant-input-affix-wrapper" />
                                </Form.Item>
                            </Col>
                            <Col span={mobileResponsive ? 24 : 12}>
                                <Form.Item name="show" label="Show" rules={[{ required: true, message: "please select stations" }]}>
                                    <Input className="ant-input-affix-wrapper" readOnly />
                                </Form.Item>
                            </Col>

                            <Col span={mobileResponsive ? 24 : 12}>
                                <Form.Item name="actors" label="Actors" >
                                    <Input className="ant-input-affix-wrapper" readOnly />
                                </Form.Item>
                            </Col>
                            <Col span={mobileResponsive ? 24 : 12}>
                                <Form.Item name="category" label="Category">
                                    <Input className="ant-input-affix-wrapper" readOnly />
                                </Form.Item>
                            </Col>
                            <Col span={mobileResponsive ? 24 : 12}>
                                <Form.Item name="composer" label="Composer">
                                    <Input className="ant-input-affix-wrapper" readOnly />
                                </Form.Item>
                            </Col>

                            <Col span={mobileResponsive ? 24 : 12}>
                                <Form.Item name="directors" label="Directors">
                                    <Input className="ant-input-affix-wrapper" readOnly />
                                </Form.Item>
                            </Col>
                            <Col span={mobileResponsive ? 24 : 12}>
                                <Form.Item name="descriptions" label="Descriptions">
                                    <TextArea rows={2} readOnly />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Modal>



            </div>
        </Spin>
    )
}

export default FormData