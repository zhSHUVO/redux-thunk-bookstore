import { FETCHBOOKS } from "./actionTypes";

const initialState = [];

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHBOOKS:
            return action.payload;

        default:
            return state;
    }
};

export default bookReducer;
