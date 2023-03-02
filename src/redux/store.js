import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import bookReducer from "./reducer";

const store = createStore(
    bookReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
