import React from "react";
import preloader from "../assets/images/preloader.svg";
export const Preloader = (props) => {
  return (
    <div>
      {props.isFetching ? (
        <div className="fixed top-0 bottom-0 right-0 left-0 bg-gray-900/70 flex justify-center items-center">
          <img src={preloader} alt="preloader" />{" "}
        </div>
      ) : null}
    </div>
  );
};
