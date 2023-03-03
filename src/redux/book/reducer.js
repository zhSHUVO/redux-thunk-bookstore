import { ADDBOOK, DELETEBOOK, FETCHBOOKS, UPDATEDBOOK } from "./actionTypes";

const initialState = [];

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHBOOKS:
            return action.payload;

        case ADDBOOK:
            return [...state, action.payload];

        case DELETEBOOK:
            return state.filter((book) => book.id !== action.payload);

        case UPDATEDBOOK:
            return state.map((book) => {
                if (book.id !== action.payload.id) {
                    return book;
                }
                return {
                    ...book,
                    name: action.payload.name,
                    author: action.payload.author,
                    thumbnail: action.payload.thumbnail,
                    price: action.payload.price,
                    rating: action.payload.rating,
                    featured: action.payload.featured,
                    id: action.payload.id,
                };
            });

        default:
            return state;
    }
};

export default bookReducer;
