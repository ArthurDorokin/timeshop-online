import React, {Component} from "react";
import Content from "../content";

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Content catalog={this.props.catalog}/>
            </div>
        )
    }
}

export default Home