import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import StoreContext from "./StoreContext";
import {catalog} from "./constans";

const app = (
    <BrowserRouter>
        <StoreContext.Provider value={catalog}>
            <App />
        </StoreContext.Provider>
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
