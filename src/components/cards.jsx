import React, { useState } from "react";
import { Modal } from "./modal";
import { Card } from "./card";

export const Cards = (props) => {
  const [isModal, setModal] = useState(false);
  const cards = props.volumeInfo;
  const category = cards.categories
    ? cards.categories.toString().split(" ")
    : [];
  const authors = cards.authors ? cards.authors.toString() : "";

  const onCard = () => setModal(true);
  const onClose = () => setModal(false);

  return (
    <div className="mb-4">
      <button
        onClick={onCard}
        className="bg-gray-200 px-3 py-2 flex flex-col items-center w-full h-full"
      >
        <img
          className="h-48"
          src={
            cards.imageLinks
              ? cards.imageLinks.smallThumbnail
              : `https://via.placeholder.com/128x181/cfc`
          }
          alt=""
          width="128"
        />
        <p className="underline">{category[0]}</p>
        <p className="font-bold w-full truncate ...">{cards.title}</p>
        <p className="ml-1 h-12 text-ellipsis overflow-hidden ...">{authors}</p>
      </button>

      <Modal
        visible={isModal}
        content={
          <Card
            imageLinks={cards.imageLinks}
            authors={authors}
            title={cards.title}
            category={category}
            description={cards.description}
          />
        }
        onClose={onClose}
      />
    </div>
  );
};
