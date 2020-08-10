import React, {Component} from "react";
import Header from "../header";
import Footer from "../footer";
import ScrollToTop from "../include/ScrollToTop/ScrollToTop";

class Layout extends Component {

    render() {
        const {offBanner} = this.props
        return (
            <main className={`${offBanner === true ? "off-banner" : ""}`}>
                <ScrollToTop/>
                <Header/>
                {this.props.children}
                <Footer/>
            </main>
        )
    }
}

export default Layout