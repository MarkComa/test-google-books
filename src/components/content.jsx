import React from "react";
import { useSelector } from "react-redux";
import { Cards } from "./cards";
import { Preloader } from "./preloader";

export const Content = () => {
  const isFetching = useSelector((state) => state.books.isFetching);
  const books = useSelector((state) => state.books.books);
  const booksEl = books.map((el) => <Cards {...el} />);

  return (
    <>
      <Preloader isFetching={isFetching} />
      <div className="grid grid-cols-4 gap-3 mt-8 mx-auto max-w-3xl ">
        {booksEl}
      </div>
    </>
  );
};
