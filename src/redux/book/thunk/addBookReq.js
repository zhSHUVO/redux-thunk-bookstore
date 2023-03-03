import { addBook } from "../action";

const addBookReq = (addBookInfo) => {
    return async (dispatch) => {
        const res = await fetch("http://localhost:9000/books", {
            method: "POST",
            body: JSON.stringify({
                name: addBookInfo.name,
                author: addBookInfo.author,
                thumbnail: addBookInfo.thumbnail,
                price: addBookInfo.price,
                rating: addBookInfo.rating,
                featured: addBookInfo.featured,
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
