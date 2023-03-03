import { REMOVESTATE, UPDATEDATA } from "./actionTypes";

const initialState = {};

const updateReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATEDATA:
            return {
                ...state,
                book: action.payload,
            };

        case REMOVESTATE:
            return {};

        default:
            return state;
    }
};

export default updateReducer;
