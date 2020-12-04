import React from "react";
import DynamicComponent from "./DynamicComponent";

class Error404 extends DynamicComponent {
    constructor(props) {
        super(props, 500);
        this.state = { apiResponse: "" };
    }

    render() {
        return (  
            <div className="container card mt-5 p-0">
                <div className="card-header">
                    <h1 className="h1">404</h1>
                </div>
                <div className="card-body">
                    <p>This page was not found.</p>
                    {/* <button className="navbar-toggler first-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent20" aria-controls="navbarSupportedContent20" aria-expanded="false" aria-label="Toggle navigation">
                    </button> */}
                </div>
            </div>
        );
    }
}

export default Error404;

