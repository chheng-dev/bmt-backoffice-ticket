import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import Category from "./Screen/Pages/Category/Category";
import { IndexDashboard } from "./IndexDashboard";
import LayoutContent from "./Layouts/Layout";
import CreateCategory from "./Screen/Pages/Category/Create";
import EditCategory from "./Screen/Pages/Category/Edit";
import Event from "./Screen/Pages/Event/Event";
import EditEvent from "./Screen/Pages/Event/Edit";
import CreateEvent from "./Screen/Pages/Event/Create";
import Order from "./Screen/Pages/Order/index";
import { CheckIn } from "./Screen/Pages/Checkin";
import User  from "./Screen/Pages/User/User";
import {CreateUser} from "./Screen/Pages/User/Create";
import EditUser  from "./Screen/Pages/User/Edit";
import NotFound from ".//Screen/Pages/404/index";
import { Test } from "../Test";



class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            islogout: false
        };
    }
    signOut = () => {
        localStorage.removeItem("token");
        this.setState({
            islogout: true
        });
    };
    render() {
        if (this.state.islogout) {
            return <Redirect to="/login" />;
        }
        const { match } = this.props;
        return (
            <main role="main">
                <div className="main">
                    <LayoutContent>
                        <Switch>

                            {/* Category */}

                            <Route exact path={`${match.path}/category`}>
                                <Category />
                            </Route>
                            <Route path={`${match.path}/category/create`}>
                                <CreateCategory />
                            </Route>
                            <Route path={`${match.path}/category/:id`}>
                                <EditCategory />
                            </Route>

                            <Route exact path={`${match.path}`}>
                                <IndexDashboard />
                            </Route>

                            {/* Event Pages */}

                            <Route exact path={`${match.path}/event`}>
                                <Event />
                            </Route>
                            <Route path={`${match.path}/event/create`}>
                                <CreateEvent />
                            </Route>
                            <Route path={`${match.path}/event/:id`}>
                                <EditEvent />
                            </Route>

                            {/* Order Pages */}
                            <Route exact path={`${match.path}/order`}>
                                <Order />
                            </Route>

                            {/* CheckIn */}
                            <Route exact path={`${match.path}/checkIn`}>
                                <CheckIn/>
                            </Route>

                            {/* Users List */}
                            <Route exact path={`${match.path}/users`}>
                                <User/>
                            </Route>
                            <Route path={`${match.path}/users/create`}>
                                <CreateUser/>
                            </Route>
                            <Route path={`${match.path}/users/:id`}>
                                <EditUser/>
                            </Route>

                            {/* Not found Route */}
                            
                            <Route path="*">
                                <NotFound />
                            </Route>
                        </Switch>
                    </LayoutContent>
                </div>
            </main>

        )
    }
}
export default withRouter(Dashboard);