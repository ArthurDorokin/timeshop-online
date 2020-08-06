import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./components/layout/Home";
import NotFound from "./components/not-found/NotFound";
import {catalog} from "../src/constans";

class App extends Component {
    state = {
        catalog,
        offBanner: false
    }

    onChildDidMount = () => {
        if (true) {
            const offBanner = this.state.offBanner;
            this.setState({
                offBanner: !offBanner
            })
        }
    };

    render() {
        return (
            <Layout
                offBanner={this.state.offBanner}
            >
                <Switch>
                    <Route exact path="/" render={(props) => <Home
                        catalog={this.state.catalog}
                    />}/>
                    {/*404*/}
                    <Route exact path='*' render={(props) => <NotFound callback={this.onChildDidMount}/>}/>
                </Switch>
            </Layout>
        );
    }
}

export default App