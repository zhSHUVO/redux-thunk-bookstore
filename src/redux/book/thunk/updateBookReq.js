import { updated } from "../action";

const updateBookReq = (book, bookId) => {
    return async (dispatch) => {
        const res = await fetch(`http://localhost:9000/books/${bookId}`, {
            method: "PATCH",
            body: JSON.stringify(book),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });

        const updatedBook = await res.json();

        dispatch(updated(updatedBook));
    };
};

export default updateBookReq;
