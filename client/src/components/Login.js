import React from "react";
import DynamicComponent from "./DynamicComponent";
import PasswordHint from"./PasswordHint"
import lang from "../Lang"
class Login extends DynamicComponent {
  constructor(props) {
    super(props, 500);

    const { changeContent, currentlyShowing } = this.props;
    this.title = "Login";
    this.state.isVisible = currentlyShowing === this.title;
    this.state.passwordHintVisible = false;
    this.state.fieldsValid = this.validateFields;
    this.changeContent = changeContent;
  }
  attemptLogin() {
    console.log(localStorage.getItem("user"));
    fetch("http://localhost:9000/api/user/me")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }))
      .catch((err) => err);
  }

  componentDidMount() {
    super.componentDidMount();
    // this.callAPI();
  }
  signIn() {}
  registerLinkClicked() {    
    this.changeContent("Register");

  }
  validateFields() {

  }
  render() {
    return (
        <div style={{ display: "none" }} className="container col-xl-4 col-lg-5 col-md-8 col-sm-10 col-xs-12 card mt-5 p-0 z-depth-3">
          <div className="card-header">
          <h2 className="h2 mb-0 currentTitle">{this.title}</h2>
          </div>
          <div className="card-body px-lg-5 ">
            <form
              className="text-center"
              style={{ color: "#757575" }}
              action="#!"
            >
              <div className="md-form">
                <input
                  type="email"
                  id="loginFormEmail"
                  className="form-control"
                />
                <label htmlFor="loginFormEmail">E-mail</label>
              </div>
              <div className="md-form">
                <input
                  type="password"
                  id="loginFormPassword"
                  className="form-control"
                  onChange={this.validateFields}
                />
                <label htmlFor="loginFormPassword">Password</label>
                <PasswordHint lang={lang.current.userEntry.passwordHint.login} currentlyShowing={this.state.passwordHintVisible}></PasswordHint>
              </div>
              <button
                disabled
                className="btn  mt-2 mx-0 mb-1 w-100"
                id="loginButton"
                type="submit"
                onClick={this.signIn.bind(this)}
              >
                Sign in
              </button>
              <p
                id="loginError"
                className="note note-danger w-100 mt-1 "
                style={{ display: "none" }}
              />
              <div
                className="d-flex justify-content-around  mt-3"
                style={{ alignItems: "center" }}
              >
                <div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="materialLoginFormRemember"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="materialLoginFormRemember"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <div>
                  <button disabled className="btn btn-secondary">
                    Forgot password?
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="card-footer">
            <p>
              Not a member?
              <button
                className="fake button"
                onClick={this.registerLinkClicked.bind(this)}
              >
                Register
              </button>
            </p>
          </div>
        </div>
    );
  }
}

export default Login;
