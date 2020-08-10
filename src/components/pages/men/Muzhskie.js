import React, {Component} from "react";
import './Muzhskie.css'
import StoreContext from "../../../StoreContext";
import {NavLink} from "react-router-dom";

class Muzhskie extends Component {
    render() {
        return (
            <div className="block-muzhskie">
                <div className="container">
                <h1>Мужские</h1>
                    <img src="../img/muzhskie.jpg" alt="muzhskie"/>
                    <div className="wrap-muzhskie">
                        <div className="blocks-muzhskie">
                            <StoreContext.Consumer>
                                {(catalog) => (
                                    catalog.filter((item) => item.typeProduct === 1).map((item) =>
                                        <div className="muzhskie-item" key={item.id}>
                                            <div className="muzhskie-blocks">
                                                <NavLink to={item.link}>
                                                    <img src={item.img} alt={item.alt}/>
                                                    <span className="flag">{item.filterIcon.name}</span>
                                                    <p className="description">{item.description}</p>
                                                    <p className="price">{item.price} грн</p>
                                                </NavLink>
                                            </div>
                                            <div className="btn-price">{item.buy}</div>
                                        </div>
                                    )
                                )}
                            </StoreContext.Consumer>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Muzhskie