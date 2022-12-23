import React, { useEffect, useState, Fragment } from "react";
import { Table, Button } from 'antd';
import { Switch, Route, Link, withRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Space } from "antd";
import Column from "antd/es/table/Column";
import Loading from "../Loading";
import axios from "axios"

const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};



const Category = (props) => {

    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(false)
    const loadCateogry = async () => {
        try {
            setLoading(true)
            const respone = await fetch(`https://api.escuelajs.co/api/v1/categories`);
            const data = await respone.json();
            setCategory(data)
            console.log(data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }

    const handleDeleteCategory = async (record) => {
        let categoryId = record.id;
        console.log(categoryId)
        setLoading(true);
        await axios.delete(`https://api.escuelajs.co/api/v1/categories/${categoryId}`)
            .then(() => {
                setLoading(false);
            }, [])

    }

    useEffect(() => {
        loadCateogry();
    }, [])

    if (loading) {
        return <Loading />
    }
    const { match } = props;
    return (

        <>
            <Fragment>
                <div className="w-full h-full">
                    <div className="my-4 flex bg-white p-4 ">
                        <div className="flex w-1/2 justify-start items-center">
                            <h2 className="text-xl font-bold">Categories Lists</h2>
                        </div>
                        <div className="flex w-1/2 justify-end items-center">
                            <Link to={`${match.path}/create`}>
                                <button type="button" className="btn-primary">
                                    Create Category
                                </button>

                            </Link>
                        </div>
                    </div>

                    <Table className="shadow-sm rounded-lg" bordered size={"small"} dataSource={category} onChange={onChange} pagination={6} scroll={{ x: 1300 }}>
                        <Column
                            title="Category name"
                            dataIndex="name"
                            key="1"
                            render={(name) => (
                                <>
                                    <span className="bg-gray-400 px-3 rounded-lg text-white py-1">{name}</span>
                                </>
                            )}
                        />
                        <Column
                            title="Slug"
                            dataIndex="name"
                            key="2"
                        />
                        <Column
                            title="Image"
                            dataIndex="image"
                            key="3"
                            width={200}
                            render={(image) => (
                                <>
                                    <img src={image} className="w-16 rounded-lg" />
                                </>
                            )}
                        />
                        <Column
                            title="Action"
                            key="4"
                            width={200}
                            render={(text, record) => (
                                <>
                                    <Space>
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
                                            <button onClick={() => handleDeleteCategory(record)} className=" text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-r-lg font-medium px-4 py-2 inline-flex space-x-1 items-center">
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </div>
                                    </Space>
                                </>
                            )}
                        />
                    </Table>



                </div>
            </Fragment>
        </>
    )
}

export default withRouter(Category);