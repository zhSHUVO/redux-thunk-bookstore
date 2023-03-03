import { combineReducers } from "redux";
import bookReducer from "./book/reducer";
import filterReducer from "./filter/reducer";
import updateReducer from "./update/reducer";

const rootReducer = combineReducers({
    books: bookReducer,
    filters: filterReducer,
    update: updateReducer,
});

export default rootReducer;
