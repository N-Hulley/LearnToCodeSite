import React from "react";
import DynamicComponent from "./DynamicComponent";
class PasswordHint extends DynamicComponent {
  constructor(props) {
    super(props, 500);
    const { currentlyShowing, lang, conditions } = this.props;
    this.lang = lang;
    this.state.isVisible = currentlyShowing === this.title;
  
  }

  render() {
    return (
      <small className="passwordHelp form-text text-muted text-left" style={{display:"none"}}>
        <span>Your password must:</span>
        <ul>
          <li className="eight-chars">{this.lang.eightChars}</li>
          <li className="lower-and-upper">{this.lang.upperAndLower}</li>
          <li className="one-number">{this.lang.oneNumber}</li>
        </ul>
      </small>
    );
  }
}

export default PasswordHint;
