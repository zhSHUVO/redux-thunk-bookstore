import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBooksReq from "../redux/thunk/fetchBooksReq";
import BookCard from "./BookCard";

const BookList = () => {
    const dispatch = useDispatch();
    const books = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchBooksReq);
    }, [dispatch]);
    return (
        <div>
            <div className="order-2 xl:-order-1">
                <div className="flex items-center justify-between mb-12">
                    <h4 className="mt-2 text-xl font-bold">Book List</h4>

                    <div className="flex items-center space-x-4">
                        <button
                            className="filter-btn active-filter"
                            id="lws-filterAll"
                        >
                            All
                        </button>
                        <button className="filter-btn" id="lws-filterFeatured">
                            Featured
                        </button>
                    </div>
                </div>
                <div className="lws-bookContainer">
                    {books.map((book) => (
                        <BookCard key={book.id} book={book}></BookCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BookList;
