import React, { Component } from 'react';
import {catalog} from "./constans";

export const DataContext = React.createContext(null);

export class DataProvider extends Component {

    state = {
        catalog
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