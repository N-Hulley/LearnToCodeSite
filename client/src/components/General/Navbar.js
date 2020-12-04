import React, { Component } from "react";
import { Route, NavLink, HashRouter, Switch } from "react-router-dom";
import "../../Lang";
import AccessMain from "../Access/Main";
import Welcome from "../General/Welcome";
import Error404 from "./Error404";
import "./Navbar.scss";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
      isOpen: false
    };
  }

  toggleCollapse() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <HashRouter>
        <div>
          <nav className="mb-1 navbar navbar-expand-lg navbar-dark ">
            <NavLink to="/" className="navbar-brand">
              Learn to Code
            </NavLink>

            <ul>
              <li className="nav-item">
                <NavLink to="/" className="nav-link btn btn-outline-primary">
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle btn btn-outline-secondary"
                  id="navbarUserDropdown"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-user" />
                  &nbsp;
                </button>
                <div
                  className="dropdown-menu dropdown-menu-right dropdown-default"
                  aria-labelledby="navbarUserDropdown"
                >
                  <NavLink className="dropdown-item" to="/login">
                    Login
                  </NavLink>
                  <NavLink className="dropdown-item" to="/register">
                    Register
                  </NavLink>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div className="content">
          <Switch>
            <Route
              exact
              path="/"
              component={(props) => <Welcome {...props} />}
            ></Route>
            <Route
              path={`/login`}
              component={(props) => (
                <AccessMain {...props} openningPage="Login" />
              )}
            ></Route>
            <Route
              path={`/register`}
              component={(props) => (
                <AccessMain {...props} openningPage="Register" />
              )}
            ></Route>
            <Route
              path={`/courses`}
              component={(props) => (
                <AccessMain {...props} openningPage="Courses" />
              )}
            ></Route>
            <Route component={(props) => <Error404 />}></Route>
            {/* <Route exact path="/accousnt"  component={AccessMain} /> */}
          </Switch>
              
        </div>
      </HashRouter>
    );
  }
}

export default Navbar;
