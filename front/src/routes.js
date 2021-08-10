import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Category from "./pages/category/[id]";

import AboutContact from "./pages/aboutcontact";
import Department from "./pages/department/[name]";
import Product from "./pages/product/[id]";
import Search from "./pages/search/[value]";
import ErrorNotFound from "./pages/error";
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
