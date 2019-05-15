import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "../../containers/App";
import Register from "../../containers/Authentication/Register/Register";
import Login from "../../containers/Authentication/Login/Login";
import EventModifer from "../../containers/EventBox/EventBox";

const root = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/create-event" component={EventModifer} />
    </Switch>
  </BrowserRouter>
);

export default root;
