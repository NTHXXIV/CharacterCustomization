import React from "react";
import { Part } from "./Part";

const Avatar = ({
  body,
  eyes,
  hair,
  clothing1,
  clothing2,
  clothing3,
  mouth,
  eyebrow,
  glasses,
  earrings,
  neckwear,
  hats,
}) => {
  return (
    <div className="relative w-80 h-96">
      <Part path="body" index={body} zIndex={"z-0"} />
      <Part path="eyes" index={eyes} zIndex={"z-10"} />
      <Part path="hair" index={hair} zIndex={"z-30"} />
      <Part path="clothes/layer_1" index={clothing1} zIndex={"z-10"} />
      <Part path="clothes/layer_2" index={clothing2} zIndex={"z-20"} />
      <Part path="clothes/layer_3" index={clothing3} zIndex={"z-30"} />
      <Part path="mouths" index={mouth} zIndex={"z-10"} />
      <Part path="noses" index={0} zIndex={"z-10"} />
      <Part path="eyebrows" index={eyebrow} zIndex={"z-10"} />
      <Part path="accessories/glasses" index={glasses} zIndex={"z-20"} />
      <Part path="accessories/earrings" index={earrings} zIndex={"z-40"} />
      <Part path="accessories/hats" index={hats} zIndex={"z-40"} />
      <Part path="accessories/neckwear" index={neckwear} zIndex={"z-40"} />
    </div>
  );
};

export default Avatar;
