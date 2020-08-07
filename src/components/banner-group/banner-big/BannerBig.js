import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import './BannerBig.css'

class BannerBig extends Component {
    render() {
        return (
            <div className="bannerBig">
                <div className="container">
                    <div className="img">
                        <img src="../img/hotpng.com.png" alt="" />
                    </div>
                    <div className="title">
                        <h1>Смарт время<br/> смарт-часы!</h1>
                        <div className="btn">
                            <NavLink to="/catalog/">Купить</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default BannerBig