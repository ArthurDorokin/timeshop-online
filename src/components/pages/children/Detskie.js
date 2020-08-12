import React, {Component} from "react";
import './Detskie.css'
import StoreContext from "../../../StoreContext";
import {NavLink} from "react-router-dom";
import Filter from "../filter";
import {catalog} from "../../../constans";

class Detskie extends Component {
    state = {
        catalog
    }

    handleChangeBrend = (catalog) => {
        this.setState({catalog})
    };

    render() {
        return (
            <div className="content in">
                <div className="block-detskie">
                    <div className="container">
                        <h1>Мужские</h1>
                        <img src="../img/detskie.jpg" alt="detskie"/>
                        <div className="wrap-detskie wrap-internal-card">
                            <Filter handleChangeBrend={this.handleChangeBrend}/>
                            <div className="blocks-detskie blocks-internal-card">
                                {this.state.catalog.filter((item) => item.typeProduct === 2).map((item) =>
                                    <div className="detskie-item internal-card-item" key={item.id}>
                                        <div className="detskie-blocks _card-item">
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

export default Detskie