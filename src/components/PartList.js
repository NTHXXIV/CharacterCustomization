import React from "react";

export const PartList = ({ total, path, set, selected }) => {
  let parts = [];
  for (let i = 0; i < total; i++) {
    parts.push(
      <div
        key={path + i}
        className={
          selected === i
            ? "cursor-pointer border-2 border-pink-600 rounded-xl shadow h-12 w-12 overflow-hidden relative bg-pink-400 	 "
            : "cursor-pointer border-2 border-pink-600 rounded-xl shadow h-12 w-12 overflow-hidden relative"
        }
        onClick={() => set(i)}
      >
        <img
          src={`character/${path}/${i + 1}.png`}
          alt=""
          className="absolute"
        />
      </div>
    );
  }
  return (
    <div className=" bg-pink-300 border-4 border-solid border-pink-600 rounded-2xl flex flex-wrap p-5 gap-4 ">
      {parts}
    </div>
  );
};
