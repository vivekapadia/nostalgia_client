import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import App from "./App.js";

ReactDOM.render(<App />, document.getElementById("root"));
