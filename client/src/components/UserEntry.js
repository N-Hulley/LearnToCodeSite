import React, { Component } from "react";
import Login from "./Login";
import Register from "./Register";

class UserEntry extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "", currentlyShowing: "Login" };
    this.current = React.createRef();
  }

  callAPI() {
    console.log(localStorage.getItem("user"));
    fetch("http://localhost:9000/api/user/me")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }))
      .catch((err) => err);
  }

  componentDidMount() {
    // this.callAPI();
  }

  changeContent(next) {
    let temp = this;
    this.current.current.hide(function () {
      temp.setState({ currentlyShowing: next });
    });
  }

  render() {
    return this.state.currentlyShowing === "Login" ? (
      <Login
        currentlyShowing={this.state.currentlyShowing}
        changeContent={this.changeContent.bind(this)}
        ref={this.current}
      />
    ) : (
      <Register
        currentlyShowing={this.state.currentlyShowing}
        changeContent={this.changeContent.bind(this)}
        ref={this.current}
      />
    );
  }
}

export default UserEntry;
