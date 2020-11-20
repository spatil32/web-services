import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import SubMenu from "./SubMenu";
import { Nav, Button } from "react-bootstrap";
import classNames from "classnames";

import Login from "../login.component";
import Search from "../search.component";
import Setting from "../setting.component";
import SignUp from "../signup.component"

class SideBar extends React.Component {
  render() {
    return (
      <div>
        <div className={classNames("sidebar", { "is-open": this.props.isOpen })}>
          <div className="sidebar-header">
            <Button
              variant="link"
              onClick={this.props.toggle}
              style={{ color: "#fff" }}
              className="mt-4"
            >
              <FontAwesomeIcon icon={faTimes} pull="right" size="xs" />
            </Button>
            <h3>Vicayah</h3>
          </div>

          <Nav className="flex-column pt-2">
            <p className="ml-3">Heading</p>

            <Nav.Item className="active">
              <Nav.Link href="/">
                <FontAwesomeIcon icon={faHome} className="mr-2" />
                Home
              </Nav.Link>
            </Nav.Item>

            <SubMenu
              title="Pages"
              icon={faCopy}
              items={["Link", "Link2", "Active"]}
            />

            <Nav.Item>
              <Nav.Link href="/signup">
                <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                SignUp
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/settings">
                <FontAwesomeIcon icon={faImage} className="mr-2" />
                Settings
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/">
                <FontAwesomeIcon icon={faQuestion} className="mr-2" />
                FAQ
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/">
                <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className="content is-open container-fluid">
         <BrowserRouter>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/settings" component={Setting} />
              <Route path="/search/:id" component={Search} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default SideBar;
