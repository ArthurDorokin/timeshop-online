import React, {Component} from "react";
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="img-logo">
                        <a href="/"><img src="../img/25529133563025_small2.jpg" alt=""/></a>
                    </div>
                    <div className="footer-nav">
                        <div className="catalog">
                            <ul>
                                <li>Каталог</li>
                                <li><a href="/">Мужские</a></li>
                                <li><a href="/">Женские</a></li>
                                <li><a href="/">Детские</a></li>
                            </ul>
                        </div>
                        <div className="contact">
                            <ul>
                                <li>Клиентам</li>
                                <li><a href="/">044 000-00-00</a></li>
                                <li><a href="/">090 000-00-00</a></li>
                                <li><a href="/">test@test.com</a></li>
                                <li><a href="/">Киев</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer