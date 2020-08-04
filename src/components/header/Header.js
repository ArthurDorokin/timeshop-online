import React, {Component} from "react";
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="wrap">
                        <div className="logo">
                            <img src="../img/25529133563025_small2.jpg" alt=""/>
                        </div>
                        <div className="navigation">
                            <ul>
                                <li><a href="#!">Мужские</a></li>
                                <li><a href="#!">Женские</a></li>
                                <li><a href="#!">Детские</a></li>
                                <li><a href="#!">Аксессуары</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="basket">
                        <ul>
                            <li className="img">
                                <span className="count-num">0</span>
                                <img src="../img/vippng.com-luggage-icon-png-2246050.png" alt=""/>
                            </li>
                            <li>Мой заказ</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
};

export default Header