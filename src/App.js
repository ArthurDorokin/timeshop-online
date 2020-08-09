import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./components/layout/Home";
import NotFound from "./components/not-found/NotFound";

class App extends Component {
    state = {
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
                    <Route exact path="/" render={(props) => <Home />}/>
                    {/*404*/}
                    <Route exact path='*' render={(props) => <NotFound callback={this.onChildDidMount}/>}/>
                </Switch>
            </Layout>
        );
    }
}

export default App