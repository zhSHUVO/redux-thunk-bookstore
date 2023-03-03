import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import addBookReq from "../redux/book/thunk/addBookReq";
import updateBookReq from "../redux/book/thunk/updateBookReq";
import { removeState } from "../redux/update/actions";

const AddBook = () => {
    const dispatch = useDispatch();
    const [book, setBook] = useState();

    const updateBook = useSelector((state) => state.update.book);

    const submitBook = (event) => {
        console.log(event);
        setBook({
            ...book,
            [event.target.name]: event.target.value,
        });
    };
    const submit = (event) => {
        event.preventDefault();
        const featured = { featured: false };
        const addBookInfo = Object.assign(featured, book);
        if (updateBook) {
            dispatch(updateBookReq(book, updateBook.id));
            dispatch(removeState());
            document.getElementById("submit").innerHTML = "Add Book";
        } else {
            dispatch(addBookReq(addBookInfo));
        }

        event.target.reset();
    };

    return (
        <div>
            <div>
                <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
                    <h4 className="mb-8 text-xl font-bold text-center">
                        Add New Book
                    </h4>
                    <form onSubmit={submit} className="book-form">
                        <div className="space-y-2">
                            <label htmlFor="name">Book Name</label>
                            <input
                                defaultValue={updateBook && updateBook.name}
                                onChange={submitBook}
                                required
                                className="text-input"
                                type="text"
                                id="input-Bookname"
                                name="name"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="category">Author</label>
                            <input
                                defaultValue={updateBook && updateBook.author}
                                onChange={submitBook}
                                required
                                className="text-input"
                                type="text"
                                id="input-Bookauthor"
                                name="author"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="image">Image Url</label>
                            <input
                                defaultValue={
                                    updateBook && updateBook.thumbnail
                                }
                                onChange={submitBook}
                                required
                                className="text-input"
                                type="text"
                                id="input-Bookthumbnail"
                                name="thumbnail"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-8 pb-4">
                            <div className="space-y-2">
                                <label htmlFor="price">Price</label>
                                <input
                                    defaultValue={
                                        updateBook && updateBook.price
                                    }
                                    onChange={submitBook}
                                    required
                                    className="text-input"
                                    type="number"
                                    id="input-Bookprice"
                                    name="price"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="quantity">Rating</label>
                                <input
                                    defaultValue={
                                        updateBook && updateBook.rating
                                    }
                                    onChange={submitBook}
                                    required
                                    className="text-input"
                                    type="number"
                                    id="input-Bookrating"
                                    name="rating"
                                    min="1"
                                    max="5"
                                />
                            </div>
                        </div>

                        <div className="flex items-center">
                            <input
                                defaultChecked={
                                    updateBook && updateBook.featured
                                }
                                onChange={(e) =>
                                    (book.featured = e.target.checked)
                                }
                                id="input-Bookfeatured"
                                type="checkbox"
                                name="featured"
                                className="w-4 h-4"
                            />
                            <label htmlFor="featured" className="ml-2 text-sm">
                                {" "}
                                This is a featured book{" "}
                            </label>
                        </div>

                        <button type="submit" className="submit" id="submit">
                            Add Book
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBook;
