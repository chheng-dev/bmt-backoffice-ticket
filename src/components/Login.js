import React, { Component } from "react";
import { Redirect } from "react-router-dom";
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            islogged: false,
            loginParams: {
                user_id: "",
                user_password: ""
            }
        };
    }
    handleFormChange = event => {
        let loginParamsNew = { ...this.state.loginParams };
        let val = event.target.value;
        loginParamsNew[event.target.name] = val;
        this.setState({
            loginParams: loginParamsNew
        });
    };

    login = event => {
        let user_id = this.state.loginParams.user_id;
        let user_password = this.state.loginParams.user_password;
        if (user_id === "admin" && user_password === "123") {
            localStorage.setItem("token", "T");
            this.setState({
                islogged: true
            });
        }
        event.preventDefault();
    };
    render() {
        if (localStorage.getItem("token")) {
            return <Redirect to="/" />;
        }
        return (
            <div className="">
                <div className="bg-white dark:bg-gray-900">
                    <div className="flex justify-center h-screen">
                        <div className="hidden bg-cover lg:block lg:w-2/3 bg-login z-30">
                            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                                <div>
                                    <h2 className="text-4xl font-bold text-white">Brand</h2>

                                    <p className="max-w-xl mt-3 text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus molestiae</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                            <div className="flex-1">
                                <div className="text-center">
                                    <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">Brand</h2>

                                    <p className="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
                                </div>

                                <div className="mt-8">
                                    <form onSubmit={this.login} className="form-signin">
                                        <div>
                                            <label for="text" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Username</label>
                                            <input type="text" onChange={this.handleFormChange} name="user_id" id="email" placeholder="Enter Username" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                        </div>

                                        <div className="mt-6">
                                            <div className="flex justify-between mb-2">
                                                <label for="password" className="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                                <a href="#" className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
                                            </div>

                                            <input type="password" onChange={this.handleFormChange} name="user_password" id="password" placeholder="Enter Password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                        </div>

                                        <div className="mt-6">
                                            <button
                                                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform btn-primary rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                                Sign in
                                            </button>
                                        </div>

                                    </form>

                                    <p className="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet? <a href="#" className="text-blue-500 focus:outline-none focus:underline hover:underline">Sign up</a>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;
