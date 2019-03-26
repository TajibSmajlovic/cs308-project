import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "../../containers/App";

const root = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
    </Switch>
  </BrowserRouter>
);

export default root;
