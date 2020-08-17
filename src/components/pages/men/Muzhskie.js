import React, {Component} from "react";
import './Muzhskie.css'
import {DataContext} from "../../../StoreContext";
import {catalog} from "../../../constans";
import {NavLink} from "react-router-dom";
import Filter from "../filter";

class Muzhskie extends Component {

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
                <div className="block-muzhskie">
                    <div className="container">
                        <h1>Мужские</h1>
                        <img className="pages-img" src="../img/muzhskie.jpg" alt="muzhskie"/>
                        <div className="wrap-muzhskie wrap-internal-card">
                            <Filter handleChangeBrend={this.handleChangeBrend}/>
                            <div className="blocks-muzhskie blocks-internal-card">
                                {catalog.filter((item) => item.typeProduct === 1).map((item) =>
                                    <div className="muzhskie-item internal-card-item" key={item.id}>
                                        <div className="muzhskie-blocks _card-item">
                                            <NavLink to={`/product/${item.id}`}>
                                                <img src={item.img} alt={item.alt}/>
                                                <span className="flag">{item.filterIcon.name}</span>
                                                <p className="description">{item.description}</p>
                                                <p className="price">{item.price} грн</p>
                                            </NavLink>
                                        </div>
                                        <div className="btn-price" onClick={() => this.context.addCart(item.id)}>{item.buy}</div>
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

export default Muzhskie