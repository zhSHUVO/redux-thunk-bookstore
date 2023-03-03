import { addBook } from "../action";

const addBookReq = (addaddBookInfo) => {
    return async (dispatch) => {
        const res = await fetch("http://localhost:9000/books", {
            method: "POST",
            body: JSON.stringify({
                name: addaddBookInfo.name,
                author: addaddBookInfo.author,
                thumbnail: addaddBookInfo.thumbnail,
                price: addaddBookInfo.price,
                rating: addaddBookInfo.rating,
                featured: addaddBookInfo.featured,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const book = await res.json();
        dispatch(addBook(book));
    };
};

export default addBookReq;
