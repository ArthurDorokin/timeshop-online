import React, {Component} from "react";
import Header from "../header";
import Footer from "../footer";
import BannerBig from "../banner-group/banner-big";
import BannerSmall from "../banner-group/banner-small";

class Layout extends Component {

    render() {
        const {offBanner} = this.props
        return (
            <main className={`${offBanner === true ? "off-banner" : ""}`}>
                <Header/>
                <div className="bannerAll">
                    <BannerBig/>
                    <BannerSmall/>
                </div>
                {this.props.children}
                <Footer/>
            </main>
        )
    }
}

export default Layout