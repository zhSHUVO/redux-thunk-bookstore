import { SEARCH } from "./actionTypes";

export const search = (searchText) => {
    return {
        type: SEARCH,
        payload: searchText,
    };
};
