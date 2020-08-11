import React, {Component} from "react";
import Filter from "../filter";
import StoreContext from "../../../StoreContext";
import {NavLink} from "react-router-dom";

class Catalog extends Component {
    render() {
        return(
            <div className="content in">
                <div className="block-catalog">
                    <div className="container">
                        <h1>Каталог</h1>
                        <img src="../img/52324689631877.jpg" alt="catalog"/>
                        <div className="wrap-aksessuary wrap-internal-card">
                            <Filter/>
                            <div className="blocks-aksessuary blocks-internal-card">
                                <StoreContext.Consumer>
                                    {(catalog) => (
                                        catalog.map((item) =>
                                            <div className="aksessuary-item internal-card-item" key={item.id}>
                                                <div className="aksessuary-blocks _card-item">
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
            </div>
        )
    }
}

export default Catalog