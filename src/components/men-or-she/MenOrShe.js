import React, {Component} from "react";
import './MenOrShe.css'
import {Men} from "./men/Men";
import {She} from "./she/She";

class MenOrShe extends Component {
    render() {
        return (
            <div className="wrap-menOrShe">
                <div className="container">
                    <Men/>
                    <She/>
                </div>
            </div>
        )
    }
};

export default MenOrShe