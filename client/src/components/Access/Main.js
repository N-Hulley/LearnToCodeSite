import React, { Component } from "react";
import Login from "./Login";
import Register from "./Register";
import './Main.scss';

class Access extends Component {
  constructor(props) {
    super(props);
    console.log(this.state);
    this.state = 
    { 
        apiResponse: "", 
        currentlyShowing: this.props.openningPage 
    };
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
    return (
    <div>
        {this.state.currentlyShowing === "Login" ? 
        (
        <Login
            currentlyShowing={this.state.currentlyShowing}
            changeContent={this.changeContent.bind(this)}
            ref={this.current}
        />
        ) 
        : 
        (
        <Register
            currentlyShowing={this.state.currentlyShowing}
            changeContent={this.changeContent.bind(this)}
            ref={this.current}
        />
        )}
    </div>
    )
  }
}

export default Access;
