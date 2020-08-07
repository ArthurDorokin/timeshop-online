import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="img-logo">
                        <NavLink to="/"><img src="../img/25529133563025_small2.jpg" alt=""/></NavLink>
                    </div>
                    <div className="footer-nav">
                        <div className="catalog">
                            <ul>
                                <li>Каталог</li>
                                <li><NavLink to="/">Мужские</NavLink></li>
                                <li><NavLink to="/">Женские</NavLink></li>
                                <li><NavLink to="/">Детские</NavLink></li>
                            </ul>
                        </div>
                        <div className="contact">
                            <ul>
                                <li>Клиентам</li>
                                <li><NavLink to="/">044 000-00-00</NavLink></li>
                                <li><NavLink to="/">090 000-00-00</NavLink></li>
                                <li><NavLink to="/">test@test.com</NavLink></li>
                                <li><NavLink to="/">Киев</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer