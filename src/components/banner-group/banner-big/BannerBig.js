import React, {Component} from "react";
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
                            <a href="/catalog/">Купить</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default BannerBig