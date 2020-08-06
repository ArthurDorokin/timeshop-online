import React, {Component} from "react";
import './NotFound.css'

class NotFound extends Component {

    componentDidMount() {
        this.props.callback();
    }

    render() {
        return (
            <div className="notFound">
                <div className="container">
                   <div className="border-wrap">
                       <div>
                           <span className="error-s">error</span>
                           <p>4</p>
                           <img src="../img/unnamed.png" alt=""/>
                           <p>4</p>
                       </div>
                       <p className="not-found-text">This page does not exist</p>
                   </div>
                </div>
            </div>
        )
    }
}

export default NotFound