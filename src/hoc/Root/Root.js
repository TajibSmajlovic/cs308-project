import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../../store/creators/auth-creators";
import Loading from "../../components/Loading/Loading";
import asyncComponent from "../AsyncComponent/asyncComponent";

const asyncApp = asyncComponent(() => {
  return import("../../containers/App");
});
const asyncRegister = asyncComponent(() => {
  return import("../../containers/Authentication/Register/Register");
});
const asyncLogin = asyncComponent(() => {
  return import("../../containers/Authentication/Login/Login");
});
const asyncEventModifier = asyncComponent(() => {
  return import("../../components/EventBox/EventBox");
});

class Root extends React.Component {
  componentDidMount() {
    this.props.checkCookies();
  }

  render() {
    return (
      <BrowserRouter>
        <Loading />
        <Switch>
          <Route path="/" exact component={asyncApp} />
          <Route path="/register" component={asyncRegister} />
          <Route path="/login" component={asyncLogin} />
          <Route path="/create-event" component={asyncEventModifier} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  actions
)(Root);
