import React from "react";

export const Part = ({ path, index, zIndex }) => {
  console.log("rerender");
  return (
    <img
      src={`character/${path}/${index + 1}.png`}
      alt=""
      className={`${zIndex} absolute top-0 left-0 object-cover object-center p-1 `}
    />
  );
};
