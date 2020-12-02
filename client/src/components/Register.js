import React from "react";
import DynamicComponent from "./DynamicComponent";
import PasswordHint from "./InputConditions";
import lang from "../Lang";
import validate from "../Utils";
class Register extends DynamicComponent {
  constructor(props) {
    super(props, 500);
    const { changeContent, currentlyShowing } = this.props;
    this.title = "Register";
    this.state = {
      isVisible: currentlyShowing === this.title,
      loading: false,
      fieldsValid: false,

      passwordValue: "",
      passwordValid: false,
      passwordHintVisible: false,
      passwordConditions: {},

      emailValue: "",
      emailValid: false,
      emailConditions: {},

      displaynameValue: "",
      displaynameValid: false,
      displaynameConditions: {},
    };

    this.changeContent = changeContent;
    this.passwordHint = React.createRef();
  }
  attemptLogin() {
    console.log(localStorage.getItem("user"));
    fetch("http://localhost:9000/api/user/me")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }))
      .catch((err) => err);
  }

  registerClicked() {
    this.setState({ loading: true });
  }
  loginLinkClicked() {
    this.changeContent("Login");
  }

  fieldsChanged(evt, field) {

    let value = evt.target.value;
    let validated = validate[field](value);

    this.setState({
      [field+"Value"]: value,
      [field+"Valid"]: validated.valid,
      [field+"Conditions"]: validated.conditions
    });
    this.setState({fieldsValid: 
      this.state.passwordValid &&
      this.state.emailValid &&
      this.state.passwordValid
    });
  }

  allFieldsValid() {

  }

  render() {
    //

    return (
      <div
        style={{ display: "none" }}
        className="container col-xl-4 col-lg-5 col-md-8 col-sm-10 col-xs-12 card mt-5 p-0 z-depth-3"
      >
        <div className="card-header">
          <h2 className="h2 currentTitle">{this.title}</h2>
        </div>
        <div className="card-body px-lg-5 ">
          <form
            className="text-center"
            style={{ color: "#757575" }}
            action="#!"
          >
            <div className="md-form">
              <input
                type="text"
                id="registerFormName"
                className="form-control"                
                onChange={evt => this.fieldsChanged(evt, "displayname")}
                required
              />
              <label htmlFor="registerFormDisplayname">
                {lang.current.userEntry.name}
              </label>
            </div>
            <div className="md-form">
              <input
                type="email"
                id="registerFormEmail"
                className="form-control"
                onChange={evt => this.fieldsChanged(evt, "email")}
                required
              />
              <label htmlFor="registerFormEmail">
                {lang.current.userEntry.email}
              </label>
            </div>
            <div className="md-form">
              <input
                type="password"
                id="registerFormPassword"
                className="form-control "
                onChange={evt => this.fieldsChanged(evt, "password")}
                required
              />
              <label
                htmlFor="registerFormPassword"
                data-error="Passwords do not match"
                data-success
              >
                Password
              </label>
              <PasswordHint
                lang={lang.current.userEntry.passwordHint.register}
                currentlyShowing={this.state.passwordHintVisible}
                ref={this.passwordHint}
              ></PasswordHint>
            </div>
            <div className="md-form password-confirm"></div>
            <button
              disabled={!this.state.fieldsValid}
              className="btn  mt-2 mx-0 mb-1 w-100"
              id="registerSubmit"
              onClick={this.registerClicked.bind(this)}
              type="submit"
            >
              Register
            </button>
          </form>
        </div>
        <div className="card-footer">
          <p>
            Already a member?
            <button
              className="fake button"
              onClick={this.loginLinkClicked.bind(this)}
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    );
  }
}

export default Register;
