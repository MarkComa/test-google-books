import React from "react";

export const Card = (props) => {
  return (
    <div className="flex max-w-4xl">
      <div className="w-1/3">
        <img
          src={
            props.imageLinks
              ? props.imageLinks.thumbnail
              : `https://via.placeholder.com/128x181/cfc`
          }
          alt="thumbnail"
        />
      </div>
      <div className="w-2/3">
        <h1 className="text-5xl mb-4">{props.title}</h1>
        <div className="text-left">{props.description}</div>
      </div>
    </div>
  );
};
