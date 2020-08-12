import React, {Component} from "react";
import './Zhenskie.css'
import StoreContext from "../../../StoreContext";
import {NavLink} from "react-router-dom";
import Filter from "../filter";
import {catalog} from "../../../constans";

class Zhenskie extends Component {
    state = {
        catalog
    }

    handleChangeBrend = (catalog) => {
        this.setState({catalog})
    };

    render() {
        return (
            <div className="content in">
                <div className="block-zhenskie">
                    <div className="container">
                        <h1>Женские</h1>
                        <img src="../img/zhenskie.jpg" alt="zhenskie"/>
                        <div className="wrap-zhenskie wrap-internal-card">
                            <Filter handleChangeBrend={this.handleChangeBrend}/>
                            <div className="blocks-zhenskie blocks-internal-card">
                                {this.state.catalog.filter((item) => item.typeProduct === 0).map((item) =>
                                    <div className="zhenskie-item internal-card-item" key={item.id}>
                                        <div className="zhenskie-blocks _card-item">
                                            <NavLink to={item.link}>
                                                <img src={item.img} alt={item.alt}/>
                                                <span className="flag">{item.filterIcon.name}</span>
                                                <p className="description">{item.description}</p>
                                                <p className="price">{item.price} грн</p>
                                            </NavLink>
                                        </div>
                                        <div className="btn-price">{item.buy}</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Zhenskie