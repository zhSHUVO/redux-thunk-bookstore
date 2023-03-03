import { SEARCH, STATUSCHANGED } from "./actionTypes";

export const search = (searchText) => {
    return {
        type: SEARCH,
        payload: searchText,
    };
};

export const status = (status) => {
    return {
        type: STATUSCHANGED,
        payload: status,
    };
};
