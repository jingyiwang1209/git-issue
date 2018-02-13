import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import Reducers from "./reducers";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";

let store = createStore(Reducers, {}, applyMiddleware(reduxThunk));
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
);
registerServiceWorker();