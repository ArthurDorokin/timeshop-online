import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {DataContext} from "../../StoreContext";
import './Header.css'

class Header extends Component {

    static contextType = DataContext;

    render() {
        const {cart} = this.context;
        return (
            <div className="header">
                <div className="container">
                    <div className="wrap">
                        <div className="logo">
                            <NavLink to="/"><img src="../img/25529133563025_small2.jpg" alt=""/></NavLink>
                        </div>
                        <div className="navigation">
                            <ul>
                                <li><NavLink to="/muzhskie">Мужские</NavLink></li>
                                <li><NavLink to="/zhenskie">Женские</NavLink></li>
                                <li><NavLink to="/detskie">Детские</NavLink></li>
                                <li><NavLink to="/aksessuary">Аксессуары</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="basket">
                        <NavLink to="/cart">
                            <ul>
                                <li className="img">
                                    <span className="count-num">{cart.length}</span>
                                    <img src="../img/vippng.com-luggage-icon-png-2246050.png" alt=""/>
                                </li>
                                <li>Мой заказ</li>
                            </ul>
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
};

export default Header