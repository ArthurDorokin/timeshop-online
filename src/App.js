import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./components/layout/Home";
import NotFound from "./components/not-found/NotFound";
import {catalog} from "../src/constans";

class App extends Component {
    state = {catalog}

    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path="/" render={(props) => <Home catalog={this.state.catalog} />}/>
                    {/*404*/}
                    <Route path='*' exact={true} component={NotFound}/>
                </Switch>
            </Layout>
        );
    }
}

export default App