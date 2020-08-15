import React, { Component } from 'react';
import {catalog} from "./constans";

export const DataContext = React.createContext(null);

export class DataProvider extends Component {

    state = {
        catalog
    }

    takeGoods = (id) => {
        const catalog = this.state.catalog;
        const result = catalog.filter(item => item.id === id);
        const [card] = result;
        console.log([card])
    }

    render() {
        const {catalog} = this.state;

        return(
            <DataContext.Provider value={{catalog}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }

}