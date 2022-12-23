import React, { Fragment, useEffect, useState } from "react";
import { Button, Space, Table } from 'antd';
import { DatePicker } from "antd";
import Column from "antd/es/table/Column";
import { Link, withRouter } from "react-router-dom"
import { Popover } from "antd";
import Loading from "../Loading";
import { Input, Tooltip } from "antd";
import { FiInfo } from "react-icons/fi";
import {Select} from "antd";


const { RangePicker } = DatePicker

const onBlurSearch = () => {
    console.log("hello world")
}

const contentSearch = (
    <div className="">
        {/* <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 dark:border-gray-400 dark:bg-gray-400">
            <h3 class="font-semibold text-gray-900 dark:text-white">Search</h3>
        </div> */}
        <div class="px-3 py-2 text-gray-500">
            <Input
                placeholder="Enter your username"
                suffix={
                    <Tooltip title="Search by Event Name">
                        <FiInfo />
                    </Tooltip>
                }
            />
        </div>
        <div className="mt-3 px-3 py-1 bg-gray-200 text-white">
            <div className="flex">
                <div className="flex w-1/2 justify-start items-center">
                    <Link>Reset</Link>
                </div>
                <div className="flex w-1/2 justify-end items-center">
                    <Link>
                        <span className="text-gray-400">Apply</span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

const contentAllEvent = (
    <div className="">
        {/* <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 dark:border-gray-400 dark:bg-gray-400">
            <h3 class="font-semibold text-gray-900 dark:text-white">Search</h3>
        </div> */}
        <div class="px-3 py-2 text-gray-500">
            <Select
                showSearch
                style={{
                    width: 200,
                }}
                placeholder="Search Event Type"
                optionFilterProp="children"
                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                filterSort={(optionA, optionB) =>
                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                }
                options={[
                    {
                        value: '1',
                        label: 'Upcoming',
                    },
                    {
                        value: '2',
                        label: 'Past Event',
                    },
                    {
                        value: '3',
                        label: 'Draft',
                    },
                ]}
            />
        </div>
        <div className="mt-3 px-3 py-1 bg-gray-200 text-white">
            <div className="flex">
                <div className="flex w-1/2 justify-start items-center">
                    <Link>Reset</Link>
                </div>
                {/* <div className="flex w-1/2 justify-end items-center">
                    <Link>
                        <span className="text-gray-400">Apply</span>
                    </Link>
                </div> */}
            </div>
        </div>
    </div>
);





const Event = (props) => {

    const [eventList, setEvent] = useState([]);
    const [loading, setLoading] = useState(false)
    const getEventList = async () => {
        try {
            setLoading(true)
            const respone = await fetch(`https://dummyjson.com/products`);
            const data = await respone.json();
            setEvent(data.products)
            console.log(data.products)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }

    const onChange = (pagination, filters, sorter, extra) => {
        setLoading(true)
        console.log('params', pagination, filters, sorter, extra);
        setLoading(false)
    };


    useEffect(() => {
        // setLoading(true)
        getEventList();
        // setLoading(false)
    }, [])

    const { match } = props;

    if (loading) {
        return <Loading />
    }
    return (
        <>
            <Fragment>
                <div className="w-full">
                    <div className="my-4 flex bg-white p-4 ">
                        <div className="flex w-1/2 justify-start items-center">
                            <h2 className="text-xl font-bold">Event Lists</h2>
                        </div>
                        <div className="flex w-1/2 justify-end items-center">
                            <Link to={`${match.path}/create`}>
                                <button size={`large`} className="btn-primary">
                                    Create Event
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="bg-white p-4">
                        <div className="">
                            <div className="mb-4 ">
                                <Space>
                                    <Popover placement="bottom" content={contentSearch} trigger="click">
                                        <Button>Search</Button>
                                    </Popover>
                                    <Popover placement="bottom" content={contentAllEvent} trigger="click">
                                        <Button>All Events</Button>
                                    </Popover>
                                    <RangePicker />
                                </Space>
                            </div>
                            <Table bordered size={"small"} dataSource={eventList} onChange={onChange}>
                                <Column
                                    title="Id"
                                    key="idx"
                                    dataIndex={'id'}
                                    align="center"
                                    width={80}
                                />
                                <Column
                                    title="Event Image"
                                    key="img"
                                    align="center"
                                    width={80}
                                    render={(_, record) => (
                                        <img className="w-12 h-12 object-cover" src={record.thumbnail}></img>
                                    )}
                                />
                                <Column
                                    title="Event name"
                                    key="event"
                                    dataIndex={'title'}
                                />
                                <Column
                                    title="Status"
                                    key="status"
                                    width={120}
                                    align="center"
                                    render={(_, record) => (
                                        <span className="bg-success-400 text-white rounded-lg px-3 py-0.5">
                                            Pending
                                        </span>
                                    )}
                                />
                                <Column
                                    title="Category"
                                    key="eventType"
                                    dataIndex={'category'}
                                    width={200}
                                />
                                <Column
                                    title="Qty"
                                    key="qty"
                                    width={120}
                                    align="center"
                                    render={(_, record) => (
                                        <span className="font-bold">
                                            {record.stock}
                                        </span>
                                    )}
                                />
                                <Column
                                    title="Price"
                                    key="price"
                                    width={120}
                                    align="center"
                                    render={(_, record) => (
                                        <span className="font-bold text-red-700">
                                            ${record.price}
                                        </span>
                                    )}
                                />
                                <Column
                                    title="Created At"
                                    key="createdAt"
                                    width={120}
                                    align="center"
                                    render={(_, record) => (
                                        <span className="">
                                            22-01-2022
                                        </span>
                                    )}
                                />
                                <Column
                                    title="Action"
                                    key="action"
                                    width={120}
                                    render={(text, record) => (
                                        <>

                                            <div className="inline-flex items-center rounded-md">
                                                <Link to={`${match.path}/${record.id}`}>
                                                    <button className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-l-lg font-medium px-4 py-2 inline-flex space-x-1 items-center">
                                                        <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                        </svg>
                                                        </span>
                                                    </button>
                                                </Link>

                                                <button className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border-y border-slate-200 font-medium px-4 py-2 inline-flex space-x-1 items-center">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                    </span>
                                                </button>
                                                <button className=" text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-r-lg font-medium px-4 py-2 inline-flex space-x-1 items-center">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                        </svg>
                                                    </span>
                                                </button>
                                            </div>
                                        </>
                                    )}
                                />
                            </Table>
                        </div>
                    </div>
                </div>
            </Fragment>
        </>
    )
}

export default withRouter(Event);