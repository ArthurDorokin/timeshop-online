import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./components/layout/Home";
import NotFound from "./components/not-found/NotFound";
/*pages*/
import Muzhskie from "./components/pages/men";
import Zhenskie from "./components/pages/women";
import Detskie from "./components/pages/children";
import Aksessuary from "./components/pages/accessories";

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
        console.log(window.location.href)
        return (
            <Layout
                offBanner={this.state.offBanner}
            >
                <Switch>
                    <Route exact path="/" render={(props) => <Home />}/>
                    {/*pages*/}
                    <Route exact path="/muzhskie" render={(props) => <Muzhskie/>}/>
                    <Route exact path="/zhenskie" render={(props) => <Zhenskie/> }/>
                    <Route exact path="/detskie" render={(props) => <Detskie/> }/>
                    <Route exact path="/aksessuary" render={(props) => <Aksessuary/> }/>
                    {/*404*/}
                    <Route exact path='*' render={(props) => <NotFound callback={this.onChildDidMount}/>}/>
                </Switch>
            </Layout>
        );
    }
}

export default App