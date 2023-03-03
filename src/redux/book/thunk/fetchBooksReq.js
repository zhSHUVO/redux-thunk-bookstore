import { fetchBooks } from "../action";

const fetchBooksReq = async (dispatch) => {
    const res = await fetch("http://localhost:9000/books");
    const books = await res.json();
    dispatch(fetchBooks(books));
};

export default fetchBooksReq;
