import React, {Component} from "react";
import './Zhenskie.css'
import {NavLink} from "react-router-dom";
import Filter from "../filter";
import {DataContext} from "../../../StoreContext";
import {catalog} from "../../../constans";

class Zhenskie extends Component {

    static contextType = DataContext;

    state = {
        catalog
    }

    handleChangeBrend = (catalog) => {
        this.setState({catalog})
    };

    render() {

        const {catalog} = this.state;

        return (
            <div className="content in">
                <div className="block-zhenskie">
                    <div className="container">
                        <h1>Женские</h1>
                        <img src="../img/zhenskie.jpg" alt="zhenskie"/>
                        <div className="wrap-zhenskie wrap-internal-card">
                            <Filter handleChangeBrend={this.handleChangeBrend}/>
                            <div className="blocks-zhenskie blocks-internal-card">
                                {catalog.filter((item) => item.typeProduct === 0).map((item) =>
                                    <div className="zhenskie-item internal-card-item" key={item.id}>
                                        <div className="zhenskie-blocks _card-item">
                                            <NavLink to={`/product/${item.id}`}>
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