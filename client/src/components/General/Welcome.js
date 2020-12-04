import React from "react";
import DynamicComponent from "./DynamicComponent";
import Modal from "../General/Modal";
import Lang from "../../Lang";
import "./Welcome.scss";
import { Redirect } from "react-router-dom";

class Welcome extends DynamicComponent {
  constructor(props) {
    super(props, 300);
    this.state = {
      apiResponse: "",
      redirect: null
    };

  }

  guestModeConfirm() {
    this.setState({redirect:"course"});

  }
  render() {
    
    if (this.state.redirect != null) {
        return (
            <Redirect to={`/${this.state.redirect}`}/>
        );
    }
    return (
      <div className="container card mt-5 p-0">
        <div className="card-header">
          <h1 className="h1">Learn to code</h1>
          <p>Learn to code completely free!</p>
        </div>
        <div className="card-body">
          <button id="button" className="btn btn-primary">
            {Lang.current.general.welcome.createAccount}
          </button>
          <Modal
            content={Lang.current.general.welcome.useAsGuestModal.description}
            callback={this.guestModeConfirm .bind(this)}
            confirmText="Yes"
            cancelText="No"
            title={Lang.current.general.welcome.useAsGuestModal.areYouSure}
            open={false}

          >
          <button className="btn btn-secondary">
            {Lang.current.general.welcome.useAsGuest}
          </button>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Welcome;
