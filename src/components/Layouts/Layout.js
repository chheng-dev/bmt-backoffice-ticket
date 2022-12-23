import React from 'react';
import { Dropdown, Layout, Button, Popover, Space } from 'antd';
import Sidebar from './Sidebar';
import Foot from './Footer';
import { Content } from 'antd/es/layout/layout';
import { Link, Redirect } from "react-router-dom";
import { CiSettings, CiUser, CiLogout } from "react-icons/ci";
import { FiSun, FiSearch, FiBell, FiGrid, FiInfo } from "react-icons/fi";
import { Input, Tooltip } from 'antd';

class LayoutContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            islogout: false,
            isTheme: "light",
        };
    }
    signOut = () => {
        localStorage.removeItem("token");
        this.setState({
            islogout: true
        });
    };

    componentDidMount() {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    handleSwitchTheme () {
        console.log("hello");
        localStorage.theme = "light";
        // this.setState({
        //     isTheme: "dark" ? "light" : "dark"
        // });
    }




    render() {
        if (this.state.islogout) {
            return <Redirect to="/login" />;
        }
        const menuContent = (
            <div className='w-64'>
                <div id="dropdownBottom" class=" z-10 w-full bg-white rounded divide-y divide-gray-100 ">
                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-700" aria-labelledby="dropdownBottomButton">
                        <Link>
                            <li className='class="block py-2 px-4 hover:bg-primary-100 hover:text-black'>
                                <Space>
                                    <CiUser className='text-xl' />
                                    Profile
                                </Space>
                            </li>
                        </Link>
                        <Link>
                            <li className='class="block py-2 px-4 hover:bg-primary-100 hover:text-black'>
                                <Space>
                                    <CiSettings className='text-xl' />
                                    Settings
                                </Space>
                            </li>
                        </Link>
                        <Link onClick={this.signOut}>
                            <li className='class="block py-2 px-4 hover:bg-primary-100 hover:text-black'>
                                <Space>
                                    <CiLogout className='text-xl' />
                                    Sign Out
                                </Space>

                            </li>
                        </Link>

                    </ul>
                </div>
            </div>
        );
        return (
            <>

                <Layout
                    style={{
                        minHeight: '100vh',

                    }}
                >

                    {/* sidebar */}
                    <Sidebar />

                    <Layout className="site-layout rounded-lg h-90vh" style={{

                    }}>


                        <div className="w-full bg-white p-4 mb-4 shadow-lg">
                            <div className='flex'>
                                <div className='flex w-1/2 justify-start items-center'>
                                    <Input
                                        className='w-2/3 p-2'
                                        placeholder="Search"
                                        prefix={<FiSearch className="site-form-item-icon" />}
                                        suffix={
                                            <Tooltip title="Extra information">
                                                <FiInfo
                                                    style={{
                                                        color: 'rgba(0,0,0,.45)',
                                                    }}
                                                />
                                            </Tooltip>
                                        }
                                    />
                                </div>
                                <div className='flex w-1/2 justify-end items-center cursor-pointer'>
                                    <Space size={'middle'}>
                                        <Link>
                                            <FiBell />
                                        </Link>
                                        <Link>
                                            <FiGrid />
                                        </Link>
                                        {/* <Link> */}
                                            {/* <button onClick={this.handleSwitchTheme}>
                                                <FiSun />
                                            </button> */}
                                        {/* </Link> */}
                                        <Link>
                                            <Popover placement="bottomRight" content={menuContent} trigger="click">
                                                <Space>
                                                    <h3 className='text-gray-700 text-xs'>Chheng Chung</h3>
                                                    <img className='rounded-full w-8 h-8' src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80' />
                                                </Space>
                                            </Popover>
                                        </Link>
                                    </Space>

                                </div>
                            </div>
                        </div>


                        <Content
                            style={{
                                margin: '0 16px',
                            }}
                        >
                            {this.props.children}
                        </Content>
                        <Foot />
                    </Layout>
                </Layout>
            </>
        );
    }
};
export default LayoutContent;

