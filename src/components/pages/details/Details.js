import React, {Component} from "react";
import './Details.css'
import {DataContext} from "../../../StoreContext";
import {NavLink} from "react-router-dom";


class Details extends Component {

    static contextType = DataContext;
    state = {
        catalog: []
    }

    getProduct = () => {
        if (this.props.match.params.id) {
            const res = this.context.catalog;
            const data = res.filter(item => {
                return item.id === parseInt(this.props.match.params.id)
            })
            this.setState({catalog: data})
        }
    };

    componentDidMount() {
        this.getProduct();
    }

    render() {
        const {catalog} = this.state;

        return (
            <div className="details">
                <div className="container">
                    {catalog.map(item =>(
                        <div className="details-item" key={item.id}>
                            <div className="img">
                                <img src={item.img} alt={item.alt}/>
                            </div>
                            <div className="infoProduct">
                                <div className="title">{item.description}</div>
                                <div className="info">{item.info}</div>
                                <div className="sum">{item.price} грн</div>
                                <div className="buy">
                                    <NavLink to="/cart">{item.buy}</NavLink>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Details