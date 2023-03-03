import { SEARCH } from "./actionTypes";

const initialState = {
    status: "all",
    searchText: "",
};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH:
            return {
                ...state,
                searchTerm: action.payload,
            };
        default:
            return state;
    }
};

export default filterReducer;
