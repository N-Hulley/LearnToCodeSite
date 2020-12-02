import  { Component } from "react";
import $ from "jquery";
import ReactDOM from "react-dom";

class DynamicComponent extends Component {
  constructor(props, duration = 300, onShowComplete = null, onHideComplete = null) {
    super(props);
    this.duration = duration;
    this.onHideComplete = onHideComplete;
    this.onShowComplete = onShowComplete;
    this.state = {
      isVisible: true
    }
  }
  hide(onComplete) {
    var that = this;
    $(ReactDOM.findDOMNode(this)).slideUp({
        duration: this.duration,
        complete: function() {
          that.setState({isVisible: false});

        if (that.onHideComplete != null) {
            that.onHideComplete(that);
        }
        if (onComplete!= null) {
          onComplete(that);
        }
      }
    });
}
show() {
  this.setState({isVisible: true});
}
componentDidMount() {

  if (!this.state.isVisible) return;
  var that = this;

    $(ReactDOM.findDOMNode(this)).stop(true).hide().slideDown({
      duration: this.duration,
      complete: function() {
        if (that.onShowComplete != null)
          that.onShowComplete(that);
      }

    });
}
}

export default DynamicComponent;
