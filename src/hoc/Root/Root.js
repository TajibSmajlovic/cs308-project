import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux'
import App from "../../containers/App";
import Register from "../../containers/Authentication/Register/Register";
import Login from "../../containers/Authentication/Login/Login";
import EventModifer from "../../containers/EventBox/EventBox";
import Loading from "../../components/Loading/Loading";

import * as actions from '../../store/creators/auth-creators'

class Root extends React.Component {

  componentDidMount(){
    this.props.checkCookies();
  }

  render() {
    return(
      <BrowserRouter>
        <Loading />
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/create-event" component={EventModifer} />
        </Switch>
      </BrowserRouter>
    )
  }
};

export default connect(null, actions)(Root);
