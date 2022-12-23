import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import LayoutContent from "./components/Layouts/Layout";
const App = () => {
  return (
    <>
      <Switch>
        <ProtectedRoute path="/admin">
          <Dashboard />
        </ProtectedRoute>
        <Route exact path="/">
          <Redirect exact from="/" to="/admin" />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </>
  );
}

export default App;
