import { ADDBOOK, DELETEBOOK, FETCHBOOKS, UPDATEDBOOK } from "./actionTypes";

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

export const updated = (updatedBook) => {
    return {
        type: UPDATEDBOOK,
        payload: updatedBook,
    };
};
