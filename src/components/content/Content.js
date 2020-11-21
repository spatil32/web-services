import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import NavBar from "./Navbar";

import Login from "../login.component";
import Search from "../search.component";
import Setting from "../setting.component";
import SignUp from "../signup.component"

const Content = ({ onToggle, isOpen }) => {
  return (
    <Container
      fluid
      className={classNames("content", { "is-open": isOpen })}
    >
      <div className="content is-open container-fluid">
        <BrowserRouter>
          <NavBar toggle={onToggle} />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/settings" component={Setting} />
            <Route path="/search/:id" component={Search} />
          </Switch>
        </BrowserRouter>
      </div>
    </Container>
  );
}

export default Content;
