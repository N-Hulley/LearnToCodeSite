import React, { Component } from "react";
import "./Welcome.scss";

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    render() {
        return (  
            <div className="container card mt-5 p-0">
                <div className="card-header">
                    <h1 className="h1">Ghosty Story Writer</h1>
                    <p>Manage the story structure and data.</p>
                </div>
                <div className="card-body">
                    <button id="button" className="btn btn-primary">Create new object</button>
                    <button id="openObject" className="btn btn-secondary">Open object</button>
                    <input id="file-input" type="file" name="name" style={{display: 'none'}} />
                    <button className="navbar-toggler first-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent20" aria-controls="navbarSupportedContent20" aria-expanded="false" aria-label="Toggle navigation">
                    </button>
                </div>
            </div>
        );
    }
}

export default Welcome;

