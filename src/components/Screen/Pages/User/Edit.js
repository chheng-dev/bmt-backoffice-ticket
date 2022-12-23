import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumb, Checkbox, Switch,Input,Space} from "antd";
import Column from "antd/es/table/Column";
import { Link, useParams, withRouter } from "react-router-dom";
import Loading from "../Loading";
import { FiHome, FiInfo } from "react-icons/fi";

const EditUser = (props) => {
    const params = useParams();
    const [loading,setLoading] = useState(false);
    const getSingleUser = async () => {
        try {
            setLoading(true);
            const respone = await fetch(`https://api.escuelajs.co/api/v1/users/${params.id}`);
            const data = await respone.json();
            console.log(data)
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    useEffect(()=>{
        getSingleUser();
    },[]);


    if (loading) {
        return <Loading />
    }
    return (
        <Fragment>
            <div className="w-full h-full">
                <Breadcrumb>
                    <Breadcrumb.Item href="">
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="">
                        <span>Users</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>Edit User</Breadcrumb.Item>
                </Breadcrumb>
                <div className="w-full">
                    <div className="md:my-4 flex bg-white p-4">
                        <h2 className="text-xl font-bold">Edit User</h2>
                    </div>
                    <div className="w-full bg-white p-4">

                        <div className="max-w-4xl mx-auto">
                            <h1 className="text-xl font-semibold mb-4">User Info</h1>
                            <div className="w-full md:my-4">
                                <div className="grid grid-cols-1 md:flex md:gap-4">
                                    <div className="md:flex-block md:w-1/2 md:justify-start md:items-center my-2 md:my-0">

                                        <span className="">First Name</span>
                                        <Input placeholder="Enter First Name" />

                                    </div>
                                    <div className="md:flex-block md:w-1/2 md:justify-start md:items-center my-2 md:my-0">
                                        Last Name
                                        <Input placeholder="Enter Last Name" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:my-4">
                                <div className="md:flex md:gap-4">
                                    <div className="md:flex-block md:w-1/2 md:justify-start md:items-center my-2 md:my-0">
                                        <span className="">Email</span>
                                        <Input placeholder="Enter Email" />
                                    </div>
                                    <div className="md:flex-block md:w-1/2 md:justify-start md:items-center my-2 md:my-0">
                                        Phone Number
                                        <Input placeholder="Enter Phone Number" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:my-4">
                                <div className="md:flex md:gap-4">
                                    <div className="md:flex-block md:w-1/2 md:justify-start md:items-center my-2 md:my-0">
                                        <span className="">Password</span>
                                        <Input.Password type="password" placeholder="Enter Password" />
                                    </div>
                                    <div className="md:flex-block md:w-1/2 md:justify-start md:items-center my-2 md:my-0">
                                        Password Confirmation
                                        <Input.Password type="password" placeholder="Enter Password Confirmation" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="w-full my-4 bg-white p-4">
                        <div className="max-w-4xl mx-auto">

                            <div>
                                <span className="">Role </span>
                                <div className="w-full mb-3 mt-5 bg-lightGray p-4">
                                    <div className="flex gap-4">
                                        <Space>
                                            <Checkbox></Checkbox>
                                            <span className="text-sm">Super Admin</span>
                                        </Space>
                                        <Space>
                                            <Checkbox></Checkbox>
                                            <span className="text-sm">User</span>
                                        </Space>
                                        <Space>
                                            <Checkbox></Checkbox>
                                            <span className="text-sm">Hoster</span>
                                        </Space>

                                    </div>
                                </div>
                            </div>
                            <div>
                                <span>Permissions</span>
                                <div className="w-full mb-3 mt-5 bg-lightGray p-4">
                                    <div className="md:flex md:gap-4">
                                        <div className="flex md:w-1/2 justify-start items-center">
                                            <span className="text-sm">1. View Dashboard</span>
                                        </div>
                                        <div className="flex md:w-1/2 justify-end items-center">
                                            <Space>
                                                <Switch size="small" defaultChecked className="ml-2" />
                                            </Space>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mb-3 mt-5 bg-lightGray p-4">
                                    <div className="md:flex md:gap-4">

                                        <div className="flex md:w-1/2 justify-start items-center">
                                            <span className="text-sm">2. View Category</span>
                                        </div>
                                        <div className="text-sm flex md:w-1/2 justify-end items-center">
                                            <Space>
                                                <span>
                                                    Add
                                                    <Switch size="small" defaultChecked={false} className="ml-2" />
                                                </span>
                                                <span>
                                                    View
                                                    <Switch size="small" defaultChecked={false} className="ml-2" />
                                                </span>
                                                <span>

                                                    Edit
                                                    <Switch size="small" defaultChecked className="ml-2" />
                                                </span>
                                                <span>

                                                    Delete
                                                    <Switch size="small" defaultChecked className="ml-2" />
                                                </span>
                                            </Space>

                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mb-3 mt-5 bg-lightGray p-4">
                                    <div className="md:flex md:gap-4">

                                        <div className="flex md:w-1/2 justify-start items-center">
                                            <span className="text-sm">3. View Event</span>
                                        </div>
                                        <div className="text-sm flex md:w-1/2 justify-end items-center">
                                            <Space>
                                                <span>
                                                    Add
                                                    <Switch size="small" defaultChecked={false} className="ml-2" />
                                                </span>
                                                <span>
                                                    View
                                                    <Switch size="small" defaultChecked={false} className="ml-2" />
                                                </span>
                                                <span>

                                                    Edit
                                                    <Switch size="small" defaultChecked className="ml-2" />
                                                </span>
                                                <span>

                                                    Delete
                                                    <Switch size="small" defaultChecked className="ml-2" />
                                                </span>
                                            </Space>

                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mb-3 mt-5 bg-lightGray p-4">
                                    <div className="md:flex md:gap-4">

                                        <div className="flex md:w-1/2 justify-start items-center">
                                            <span className="text-sm">4. View Order</span>
                                        </div>
                                        <div className="text-sm flex md:w-1/2 justify-end items-center">
                                            <Space>
                                                <span>
                                                    Add
                                                    <Switch size="small" defaultChecked className="ml-2" />
                                                </span>
                                                <span>
                                                    View
                                                    <Switch size="small" defaultChecked className="ml-2" />
                                                </span>
                                                <span>

                                                    Edit
                                                    <Switch size="small" defaultChecked={false} className="ml-2" />
                                                </span>
                                                <span>

                                                    Delete
                                                    <Switch size="small" defaultChecked={false} className="ml-2" />
                                                </span>
                                            </Space>

                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mb-3 mt-5 bg-lightGray p-4">
                                    <div className="md:flex md:gap-4">

                                        <div className="flex md:w-1/2 justify-start items-center">
                                            <span className="text-sm">5. View Check In</span>
                                        </div>
                                        <div className="text-sm flex md:w-1/2 justify-end items-center">
                                            <Space>
                                                <span>
                                                    Add
                                                    <Switch size="small" defaultChecked className="ml-2" />
                                                </span>
                                                <span>
                                                    View
                                                    <Switch size="small" defaultChecked className="ml-2" />
                                                </span>
                                                <span>

                                                    Edit
                                                    <Switch size="small" defaultChecked={false} className="ml-2" />
                                                </span>
                                                <span>

                                                    Delete
                                                    <Switch size="small" defaultChecked={false} className="ml-2" />
                                                </span>
                                            </Space>

                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mb-3 mt-5 bg-lightGray p-4">
                                    <div className="md:flex md:gap-4">

                                        <div className="flex md:w-1/2 justify-start items-center">
                                            <span className="text-sm">6. View Report</span>
                                        </div>
                                        <div className="text-sm flex md:w-1/2 justify-end items-center">
                                            <Space>
                                                <span>
                                                    Add
                                                    <Switch size="small" defaultChecked className="ml-2" />
                                                </span>
                                                <span>
                                                    View
                                                    <Switch size="small" defaultChecked className="ml-2" />
                                                </span>
                                                <span>

                                                    Edit
                                                    <Switch size="small" defaultChecked className="ml-2" />
                                                </span>
                                                <span>

                                                    Delete
                                                    <Switch size="small" defaultChecked className="ml-2" />
                                                </span>
                                            </Space>

                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mb-3 mt-5 bg-lightGray p-4">
                                    <div className="md:flex md:gap-4">

                                        <div className="flex md:w-1/2 justify-start items-center">
                                            <span className="text-sm">7. View User</span>
                                        </div>
                                        <div className="text-sm flex md:w-1/2 justify-end items-center">
                                            <Space>
                                                <span>
                                                    Add
                                                    <Switch size="small" defaultChecked className="ml-2" />
                                                </span>
                                                <span>
                                                    View
                                                    <Switch size="small" defaultChecked className="ml-2" />
                                                </span>
                                                <span>

                                                    Edit
                                                    <Switch size="small" defaultChecked={false} className="ml-2" />
                                                </span>
                                                <span>

                                                    Delete
                                                    <Switch size="small" defaultChecked={false} className="ml-2" />
                                                </span>
                                            </Space>

                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mb-3 mt-5 bg-lightGray p-4">
                                    <div className="md:flex md:gap-4">

                                        <div className="flex md:w-1/2 justify-start items-center">
                                            <span className="text-sm">8. View Setting</span>
                                        </div>
                                        <div className="text-sm flex md:w-1/2 justify-end items-center">
                                            <Space>
                                                <span>
                                                    Add
                                                    <Switch size="small" defaultChecked className="ml-2" />
                                                </span>
                                                <span>
                                                    View
                                                    <Switch size="small" defaultChecked className="ml-2" />
                                                </span>
                                                <span>

                                                    Edit
                                                    <Switch size="small" defaultChecked className="ml-2" />
                                                </span>
                                                <span>

                                                    Delete
                                                    <Switch size="small" defaultChecked className="ml-2" />
                                                </span>
                                            </Space>

                                        </div>
                                    </div>
                                </div>
                                <div className="flex py-3">
                                    <div className="flex w-1/2 justify-start items-center"></div>
                                    <div className="flex w-1/2 justify-end items-center">
                                        <button type="button" className="btn-primary">Update & Continue</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default withRouter(EditUser);