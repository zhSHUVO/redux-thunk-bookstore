import { deleteBook } from "../action";

const deleteBookReq = (id) => {
    return async (dispatch) => {
        await fetch(`http://localhost:9000/books/${id}`, {
            method: "DELETE",
        });
        dispatch(deleteBook(id));
    };
};

export default deleteBookReq;
