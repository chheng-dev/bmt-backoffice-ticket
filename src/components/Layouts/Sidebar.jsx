import React, { useState } from "react";
import Sider from "antd/es/layout/Sider";
import { Menu, Space } from "antd";
import { NavLink } from "react-router-dom";
import { FiShoppingCart, FiHome, FiGrid, FiFolderMinus, FiSettings, FiCalendar,FiUser,FiUsers,FiShoppingBag,FiLogOut } from "react-icons/fi";
import logo from "../assets/img/icon-logo.png"
const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const [current, setCurrent] = useState('1');

    const SelectedKey = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} className="bg-white">
                <div
                    className="px-2 flex items-center justify-center"
                    style={{
                      
                    }}
                >
                    <img className="w-16 p-2" src={logo} />
                </div>

                <Menu theme="light" onClick={SelectedKey} selectedKeys={[current]} mode={"inline"} >
                    <Menu.Item key="1">
                        <NavLink
                            to={`/`}
                            className={isActive =>
                                "nav-link" + (!isActive ? " unselected" : "")
                            }
                        >

                            <span className="flex items-center">
                                <Space>
                                    <FiHome className="text-xl" />
                                    <span>Dashboard</span>
                                </Space>
                            </span>

                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <NavLink
                            to={"/admin/category"}
                            className={isActive =>
                                "nav-link" + (!isActive ? " unselected" : "")
                            }
                        >

                            <span className="flex items-center">
                                <Space>
                                    <FiGrid className="text-xl" />
                                    <span>Category</span>
                                </Space>
                            </span>

                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <NavLink
                            to="/admin/event"
                            className={isActive =>
                                "nav-link" + (!isActive ? " unselected" : "")
                            }
                        >

                            <span className="flex items-center">
                                <Space>
                                    <FiFolderMinus className="text-xl" />
                                    <span >All Events</span>
                                </Space>
                            </span>

                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <NavLink
                            to="/admin/order"
                            className={isActive =>
                                "nav-link" + (!isActive ? " unselected" : "")
                            }
                        >

                            <span className="flex items-center">
                                <Space>
                                    <FiShoppingCart className="text-xl" />
                                    <span>Orders</span>
                                </Space>
                            </span>

                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <NavLink
                            to="/admin/checkIn"
                            className={isActive =>
                                "nav-link" + (!isActive ? " unselected" : "")
                            }
                        >

                            <span className="flex items-center">
                                <Space>
                                    <FiLogOut className="text-xl" />
                                    <span>Check In</span>
                                </Space>
                            </span>

                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <NavLink
                            to="admin/events"
                            className={isActive =>
                                "nav-link" + (!isActive ? " unselected" : "")
                            }
                        >

                            <span className="flex items-center">
                                <Space>
                                    <FiCalendar className="text-xl" />
                                    <span>Report</span>
                                </Space>
                            </span>

                        </NavLink>
                    </Menu.Item>
                    <Menu.SubMenu key="users" title={
                        <>
                            <div className="flex items-center">
                                <Space>
                                    <FiUsers className="text-xl" />
                                    <span>Users</span>
                                </Space>
                            </div>
                        </>
                    }>
                        <Menu.Item key="users">
                            <NavLink
                                to="/admin/users"
                                className={isActive =>
                                    "nav-link" + (!isActive ? " unselected" : "")
                                }
                            >

                                <span className="flex items-center">
                                    <Space>
                                        <span>User List</span>
                                    </Space>
                                </span>

                            </NavLink>
                        </Menu.Item>
                        {/* <Menu.Item key="users">
                            <NavLink
                                to="admin/events"
                                className={isActive =>
                                    "nav-link" + (!isActive ? " unselected" : "")
                                }
                            >

                                <span className="flex items-center">
                                    <Space>
                                        <FiUsers className="text-xl" />
                                        <span>Users</span>
                                    </Space>
                                </span>

                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="9">
                            <NavLink
                                to="admin/events"
                                className={isActive =>
                                    "nav-link" + (!isActive ? " unselected" : "")
                                }
                            >

                                <span className="flex items-center">
                                    <Space>
                                        <FiShoppingBag className="text-xl" />
                                        <span>Vendor</span>
                                    </Space>
                                </span>

                            </NavLink>
                        </Menu.Item> */}
                    </Menu.SubMenu>
                    <Menu.SubMenu key="setting" title={
                        <>
                            <div className="flex items-center">
                                <Space>
                                    <FiSettings className="text-xl" />
                                    <span>Setting</span>
                                </Space>
                            </div>
                        </>
                    }>
                        <Menu.Item key="7">
                            <NavLink
                                to="admin/events"
                                className={isActive =>
                                    "nav-link" + (!isActive ? " unselected" : "")
                                }
                            >

                                <span className="flex items-center">
                                    <Space>
                                        <FiUser className="text-xl" />
                                        <span>Account</span>
                                    </Space>
                                </span>

                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <NavLink
                                to="admin/events"
                                className={isActive =>
                                    "nav-link" + (!isActive ? " unselected" : "")
                                }
                            >

                                <span className="flex items-center">
                                    <Space>
                                        <FiUsers className="text-xl" />
                                        <span>User Management</span>
                                    </Space>
                                </span>

                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="9">
                            <NavLink
                                to="admin/events"
                                className={isActive =>
                                    "nav-link" + (!isActive ? " unselected" : "")
                                }
                            >

                                <span className="flex items-center">
                                    <Space>
                                        <FiShoppingBag className="text-xl" />
                                        <span>Vendor</span>
                                    </Space>
                                </span>

                            </NavLink>
                        </Menu.Item>
                    </Menu.SubMenu>
                </Menu>

            </Sider>

        </>
    )
}



export default Sidebar;
