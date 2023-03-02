import { ADDBOOK, DELETEBOOK, FETCHBOOKS } from "./actionTypes";

export const fetchBooks = (books) => {
    return {
        type: FETCHBOOKS,
        payload: books,
    };
};
export const addBook = (book) => {
    return {
        type: ADDBOOK,
        payload: book,
    };
};
export const deleteBook = (id) => {
    return {
        type: DELETEBOOK,
        payload: id,
    };
};
