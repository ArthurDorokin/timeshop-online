import React, {Component} from "react";
// import {aboutCompanyText} from "src/constans.js";
import {aboutCompanyText} from "../aboutCompany/constant"

class AboutCompany extends Component {
    render() {
        return (
            <div className="aboutCompany">
                <div className="container">
                    <h2>О магазине</h2>
                    <div dangerouslySetInnerHTML={{__html: aboutCompanyText.aboutCompanyInfo[0].info}}/>
                </div>
            </div>
        )
    }
}

export default AboutCompany