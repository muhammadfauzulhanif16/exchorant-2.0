import thunk from "redux-thunk";
import { reducer } from "./reducers";
import { applyMiddleware, createStore } from "redux";

export const stores = createStore(reducer, applyMiddleware(thunk));
