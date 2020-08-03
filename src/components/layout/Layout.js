import React, {Component} from "react";
import Header from "../header";
import Footer from "../footer";
import BannerBig from "../banner-group/banner-big";
import BannerSmall from "../banner-group/banner-small";

class Layout extends Component {
    render() {
        return (
            <div>
                <main>
                    <Header/>
                    <div className="bannerAll">
                        <BannerBig/>
                        <BannerSmall/>
                    </div>
                    {this.props.children}
                    <Footer/>
                </main>
            </div>
        )
    }
}

export default Layout