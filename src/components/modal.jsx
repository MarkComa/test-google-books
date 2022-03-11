import React from "react";

export const Modal = ({
  visible = false,
  title = "",
  content = "",
  onClose,
}) => {
  if (!visible) return null;
  return (
    <div
      onClick={onClose}
      className="fixed top-0 bottom-0 left-0 right-0 w-full z-50 flex items-center justify-center bg-gray-800/70"
    >
      <div onClick={(e) => e.stopPropagation()}>
        <span
          className="p-4 -my-4 -mr-4 ml-auto cursor-pointer"
          onClick={onClose}
        >
          &times;
        </span>

        <div className="overflow-auto">
          <div className="flex bg-white p-4">{content}</div>
        </div>
      </div>
    </div>
  );
};
