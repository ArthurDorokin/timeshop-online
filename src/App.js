import React, {Component} from 'react';
import './App.css';
import Layout from "./components/layout/Layout";
import Home from "./components/layout/Home";

import {catalog} from "../src/constans";

class App extends Component {
    state = {catalog}

    render() {
        return (
            <Layout>
                <Home catalog={this.state.catalog}/>
            </Layout>
        );
    }
}

export default App