import React, {Component} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Content.css'
import {Hit} from "./hit/Hit";
import {New} from "./new/New";

class Content extends Component {
    render() {
        return (
            <div className="content">
                <div className="container">
                    <div className="wrap-hit">
                        <h2>Хиты продаж</h2>
                        <div className="blocks-hit">
                            <Hit catalog={this.props.catalog}/>
                        </div>
                    </div>
                    <div className="wrap-men-or-she"></div>
                    <div className="wrap-new">
                        <h2>Новинки</h2>
                        <div className="blocks-hit">
                            <New catalog={this.props.catalog}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content