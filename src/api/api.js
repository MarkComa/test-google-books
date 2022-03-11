import axios from "axios";

const API_KEY = "AIzaSyA_ub99rKhoRUd-O-yd9E4cZ_8f1qjzR_U";

export const booksApi = {
  getBooks(query, categorySubject, sorting) {
    return axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}${categorySubject}&orderBy=${sorting}&key=${API_KEY}`
      )
      .then((res) => res.data);
  },
};
