import React from "react";
import DynamicComponent from "../General/DynamicComponent";
class PasswordHint extends DynamicComponent {
  constructor(props) {
    super(props, 500);
    
  }

  render() {    
    if (this.props.conditions.length <= 0) return null;
    console.log(this.props.conditions);
    return (
      <small className="help form-text text-muted text-left" >
        <ul>
          {this.props.conditions.map((c, i) => (
              <InputConditionItem condition={c} key={i} />))}
        </ul>
      </small>
    );
  }
}
class InputConditionItem extends DynamicComponent {
  constructor(props) {
    super(props, 500);

  }
  render() {
    return(
      <li className="error"><span>{this.props.condition}</span></li>
    );
  }
}
export default PasswordHint;
