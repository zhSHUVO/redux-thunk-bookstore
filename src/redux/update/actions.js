import { UPDATEDATA } from "./actionTypes";

export const update = (book) => {
    return {
        type: UPDATEDATA,
        payload: book,
    };
};
