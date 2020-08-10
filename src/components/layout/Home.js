import React, {Component} from "react";
import Content from "../content";
import BannerBig from "../banner-group/banner-big";
import BannerSmall from "../banner-group/banner-small";

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="bannerAll">
                    <BannerBig/>
                    <BannerSmall/>
                </div>
                <Content/>
            </div>
        )
    }
}

export default Home