import { update } from "../../update/actions";

const updateBookReq = (book, bookId) => {
    // console.log(book);
    return async (dispatch) => {
        const res = await fetch(`http://localhost:9000/books/${bookId}`, {
            method: "PATCH",
            body: JSON.stringify(book),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });

        const updatedBook = await res.json();
        console.log(updatedBook);

        dispatch(update(updatedBook));
    };
};

export default updateBookReq;
