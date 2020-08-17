import React, {Component} from "react";
import './cart.css'
import {DataContext} from "../../../StoreContext";
import {NavLink} from "react-router-dom";

class Cart extends Component {

    static contextType = DataContext;

    componentDidMount() {
        this.context.getTotal();
    }

    render() {
        const {cart, reduction, increase, removeProduct, total} = this.context;

        if (cart.length === 0) {
            return <div className="cart">
                        <div className="container">
                            <h2 style={{textAlign: "center"}}>Nothings Product</h2>
                        </div>
                    </div>
        } else {
            return (
                <div className="cart">
                    <div className="container">
                        <div className="wrap-details">
                            {cart.map(item => (
                                <div className="details-item" key={item.id}>
                                    <div className="img">
                                        <img src={item.img} alt={item.alt}/>
                                    </div>
                                    <div className="infoProduct">
                                        <div className="title">{item.description}</div>
                                        <div className="sum">{item.price * item.counterBasket} грн</div>
                                        <div className="amount">
                                            <button className="count" onClick={() => reduction(item.id)}> -</button>
                                            <span>{item.counterBasket}</span>
                                            <button className="count" onClick={() => increase(item.id)}> +</button>
                                        </div>
                                    </div>
                                    <div className="delete" onClick={() => removeProduct(item.id)}>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            ))}
                            <div className="total">
                                <NavLink to="/payment">Payment</NavLink>
                                <h3>Total: <span>{total}</span> грн</h3>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
};

export default Cart