import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Category from "./views/category/[id]";

import AboutContact from "./views/aboutcontact";
import Department from "./views/department/[name]";
import Product from "./views/product/[id]";
import Search from "./views/search/[value]";
import ErrorNotFound from "./views/error";
import ScrollToTop from "./scrollToTop";

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/contato-sobre" exact component={AboutContact} />
          <Route path="/produto/:id" exact component={Product} />
          <Route path="/departamento/:name" exact component={Department} />
          <Route path="/:departamento/:categoria" exact component={Category} />
          <Route path="/produtos" exact component={Search} />
          <Route path="*" component={ErrorNotFound} />
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Router;
