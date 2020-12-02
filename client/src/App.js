import React, { Component } from "react";
import "./App.scss";
import Welcome from "./components/Welcome";
import UserEntry from "./components/UserEntry";
import DynamicBackground from "./components/DynamicBackground";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
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

  render() {
    const isLoggedIn = false;

    if (isLoggedIn) {
      return <Welcome />;
    } else {
      return (
        <div>
          <UserEntry />
          <DynamicBackground />
        </div>
      );
    }
  }
}

export default App;
