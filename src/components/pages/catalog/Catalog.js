import React, {Component} from "react";
import Filter from "../filter";
//import StoreContext from "../../../StoreContext";
import {NavLink} from "react-router-dom";
import {catalog} from "../../../constans";

class Catalog extends Component {
    state = {
        catalog
    }

    handleChangeBrend = (catalog) => {
        this.setState({catalog})
    };

    render() {
        return(
            <div className="content in">
                <div className="block-catalog">
                    <div className="container">
                        <h1>Каталог</h1>
                        <img src="../img/52324689631877.jpg" alt="catalog"/>
                        <div className="wrap-aksessuary wrap-internal-card">
                            <Filter handleChangeBrend={this.handleChangeBrend}/>
                            <div className="blocks-aksessuary blocks-internal-card">
                                {this.state.catalog.map((item) =>
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
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Catalog