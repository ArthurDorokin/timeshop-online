import React, {Component} from "react";
import Header from "../header";
import Footer from "../footer";
import BannerBig from "../banner-group/banner-big";
import BannerSmall from "../banner-group/banner-small";

class Layout extends Component {
    render() {
        return (
            <main className={`${window.location.href !== 'http://localhost:3000/' ? "home-page" : ""}`}>
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