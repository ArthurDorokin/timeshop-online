import React, {Component} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Content.css'
import {Hit} from "./hit/Hit";
import {New} from "./new/New";
import MenOrShe from "../men-or-she";
import AboutCompany from "../aboutCompany";
import {DataContext} from "../../StoreContext";

class Content extends Component {

    static contextType = DataContext;

    render() {

        const {catalog, addCart} = this.context;

        return (
            <div className="content">
                <div className="container">
                    <div className="wrap-hit wrap-internal-card">
                        <h2>Хиты продаж</h2>
                        <div className="blocks-hit blocks-internal-card">
                            <Hit catalog={catalog} addCart={addCart}/>
                        </div>
                    </div>
                    <div className="wrap-men-or-she">
                        <MenOrShe/>
                    </div>
                    <div className="wrap-new wrap-internal-card">
                        <h2>Новинки</h2>
                        <div className="blocks-new blocks-internal-card">
                            <New catalog={catalog} addCart={addCart}/>
                        </div>
                    </div>
                    <AboutCompany/>
                </div>
            </div>
        )
    }
}

export default Content