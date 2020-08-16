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
import Catalog from "./components/pages/catalog";
import {DataProvider} from "./StoreContext";
import Details from "./components/pages/details";
import Cart from "./components/pages/cart";
import Payment from "./components/pages/payment";

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
            <DataProvider>
                <Layout offBanner={this.state.offBanner}>
                    <Switch>
                        <Route exact path="/" render={(props) => <Home/>}/>
                        {/*pages*/}
                        <Route exact path="/muzhskie" render={(props) => <Muzhskie/>}/>
                        <Route exact path="/zhenskie" render={(props) => <Zhenskie/>}/>
                        <Route exact path="/detskie" render={(props) => <Detskie/>}/>
                        <Route exact path="/aksessuary" render={(props) => <Aksessuary/>}/>
                        <Route exact path="/catalog" render={(props) => <Catalog/>}/>
                        <Route path='/product/:id' component={Details}/>
                        <Route path='/cart' component={Cart}/>
                        <Route path='/payment' component={Payment}/>
                        {/*404*/}
                        <Route exact path='*' render={(props) => <NotFound callback={this.onChildDidMount}/>}/>
                    </Switch>
                </Layout>
            </DataProvider>
        );
    }
}

export default App