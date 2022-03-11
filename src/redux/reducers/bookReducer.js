import { booksApi } from "../../api/api";

const SET_BOOKS = "SET_BOOKS";
const SET_TOTAL_ITEMS = "SET_TOTAL_ITEMS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  books: [],
  isFetching: false,
  totalItems: 0,
};

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS: {
      return { ...state, books: action.books };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case SET_TOTAL_ITEMS: {
      return { ...state, totalItems: action.totalItems };
    }
    default:
      return state;
  }
};

export const setBooks = (books) => ({ type: SET_BOOKS, books });
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const setTotalItems = (totalItems) => ({
  type: SET_TOTAL_ITEMS,
  totalItems,
});

export const requestBooks = (query, categorySubject, sorting) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let data = await booksApi.getBooks(query, categorySubject, sorting);
    dispatch(setTotalItems(data.totalItems));
    dispatch(setBooks(data.items));
    dispatch(toggleIsFetching(false));
  };
};
