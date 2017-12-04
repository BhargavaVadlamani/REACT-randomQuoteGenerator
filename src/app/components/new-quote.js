import React from "react";
import { render } from "react-dom";

export class NewQuote extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary">New Quote</button>
            </div>
        );
    }
}



