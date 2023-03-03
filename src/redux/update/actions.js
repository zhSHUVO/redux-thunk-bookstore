import { REMOVESTATE, UPDATEDATA } from "./actionTypes";

export const update = (book) => {
    return {
        type: UPDATEDATA,
        payload: book,
    };
};

export const removeState = () => {
    return {
        type: REMOVESTATE,
    };
};
