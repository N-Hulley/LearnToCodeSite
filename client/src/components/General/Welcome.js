import React from "react";
import DynamicComponent from "./DynamicComponent";
import "./Welcome.scss";

class Welcome extends DynamicComponent {
    constructor(props) {
        super(props, 300);
        this.state = { apiResponse: "" };
    }

    render() {
        return (  
            <div className="container card mt-5 p-0">
                <div className="card-header">
                    <h1 className="h1">Learn to code</h1>
                    <p>Learn to code completely free!</p>
                </div>
                <div className="card-body">
                    <button id="button" className="btn btn-primary">Create an account</button>
                    <button id="openObject" className="btn btn-secondary">Use as guest</button>
                    {/* <button className="navbar-toggler first-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent20" aria-controls="navbarSupportedContent20" aria-expanded="false" aria-label="Toggle navigation">
                    </button> */}
                </div>
            </div>
        );
    }
}

export default Welcome;

