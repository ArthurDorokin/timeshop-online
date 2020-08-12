import React, {Component} from "react";
import './Aksessuary.css'
import StoreContext from "../../../StoreContext";
import {NavLink} from "react-router-dom";
import Filter from "../filter";
import {catalog} from "../../../constans";

class Aksessuary extends Component {
    state = {
        catalog
    }

    handleChangeBrend = (catalog) => {
        this.setState({catalog})
    };

    render() {
        return (
            <div className="content in">
                <div className="block-aksessuary">
                    <div className="container">
                        <h1>Аксессуары</h1>
                        <img src="../img/aksessuary.jpg" alt="aksessuary"/>
                        <div className="wrap-aksessuary wrap-internal-card">
                            <Filter handleChangeBrend={this.handleChangeBrend}/>
                            <div className="blocks-aksessuary blocks-internal-card">
                                {this.state.catalog.filter((item) => item.typeProduct === 3).map((item) =>
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

export default Aksessuary