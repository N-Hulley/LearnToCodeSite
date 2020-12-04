import React, { Component } from "react";
import {uid} from "react-uid";
import Portal from "./Portal";
class Modal extends Component {
  constructor(props) {
    super(props);
    const { title, content, callback, confirmText, cancelText, open } = this.props;
    this.state = {
      title,
      content,
      callback,
      confirmText,
      cancelText,
      open,
      newChildren: null,
      id: uid(this)
    };

    if (this.props.children != null) {
        let child = this.props.children;
        if (child.type === "button")  {
            this.state.newChildren = React.cloneElement(child, {
                "data-toggle": "modal",
                "data-target": `#modal_${this.state.id}`,
                type: "button"
             });
             
        }
    }
  }
  componentWillUnmount() {  
    document.getElementsByClassName(`modal-backdrop fade show`)[0].remove();
  }
  confirm() {
    this.state.callback();
  }
  render() {
    const id = this.state.id;
    return (
        
      <>
        <Portal portalId={`portal_${id}`}>

         <div
          className="modal fade"
          id={`modal_${id}`}
          tabIndex={-1}
          role="dialog"
          aria-labelledby={`#modal_${id}_label`}
          aria-hidden={this.state.open ? "false" : "true"}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id={`#modal_${id}_label`}>
                  {this.state.title}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">{this.state.content}</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  {this.state.cancelText}
                </button>
                <button type="button" onClick={this.confirm.bind(this)} className="btn btn-primary">
                  {this.state.confirmText}
                </button>
              </div>
            </div>
          </div>
        </div> 
        </Portal>
          {this.state.newChildren}
      </>
    );
  }
}

export default Modal;
