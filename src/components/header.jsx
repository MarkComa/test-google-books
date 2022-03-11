import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { requestBooks } from "../redux/reducers/bookReducer";

export const Header = () => {
  const [query, setQuery] = useState();
  const totalItems = useSelector((state) => state.books.totalItems);
  const [category, setCategory] = useState("");
  const [sorting, setSorting] = useState("relevance");
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const categorySubject = category !== "" ? "+subject:${category}" : "";
  const onSubmit = () => {
    dispatch(requestBooks(query, categorySubject, sorting));
  };

  return (
    <div className="text-center h-47 bg-[url(https://ungerboeck.com/images/headers/RESOURCES-landing.jpg)] bg-bottom bg-no-repeat bg-cover ">
      <form
        {...register("search")}
        onSubmit={handleSubmit(onSubmit)}
        className="pt-4 pb-4 "
      >
        <input
          className="h-8 w-80 border border-gray-700 shadow-lg   shadow-slate-900"
          type="text"
          onChange={(e) => setQuery(e.target.value)}
        />
        <input
          className="ml-3 bg-slate-200 p-1 shadow-lg   shadow-slate-900"
          type="submit"
        />
        <div className="flex justify-center mt-4">
          <div className="mr-3">
            <span className="mr-1 text-lg bg-gradient-to-t from-white via-white to-black text-transparent bg-clip-text">
              Category
            </span>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="art">art</option>
              <option value="biography">biography</option>
              <option value="computers">computers</option>
              <option value="history">history</option>
              <option value="medical">medical</option>
              <option value="poetry">poetry</option>
              <option value="">all</option>
            </select>
          </div>
          <div>
            <span className="mr-1 text-slate-700">Sorting by</span>
            <select
              value={sorting}
              onChange={(e) => setSorting(e.target.value)}
            >
              <option value="newest">newest</option>
              <option value="relevance">relevance</option>
            </select>
          </div>
        </div>
      </form>
      <div className="bg-slate-200">Total items: {totalItems}</div>
    </div>
  );
};
