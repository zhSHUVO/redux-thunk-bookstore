import { combineReducers } from "redux";
import bookReducer from "./book/reducer";
import filterReducer from "./filter/reducer";

const rootReducer = combineReducers({
    books: bookReducer,
    filters: filterReducer,
});

export default rootReducer;
