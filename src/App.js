import React, { useState, useEffect } from "react";
import Avatar from "./components/Avatar";
import { PartList } from "./components/PartList";

const total = {
  body: 17,
  eyes: 17,
  hair: 74,
  mouth: 24,
  eyebrows: 15,
  facialHair: 18,
  glasses: 17,
  hats: 29,
  neckwear: 19,
  earrings: 33,
  clothing1: 5,
  clothing2: 6,
  clothing3: 10,
};
function App() {
  const [body, setBody] = useState(0);
  const [eyes, setEyes] = useState(2);
  const [eyebrows, setEyebrow] = useState(2);
  const [hair, setHair] = useState(0);
  const [facialHair, setFacialHair] = useState(1);
  const [clothing1, setClothing1] = useState(0);
  const [clothing2, setClothing2] = useState(0);
  const [clothing3, setClothing3] = useState(0);
  const [mouth, setMouth] = useState(2);
  const [hats, setHats] = useState(8);
  const [neckwear, setNeckwear] = useState(8);
  const [earrings, setEarrings] = useState(2);
  const [glasses, setGlasses] = useState(2);
  const randomize = () => {
    setBody(Math.floor(Math.random() * total.body));
    setEyes(Math.floor(Math.random() * total.eyes));
    setEyebrow(Math.floor(Math.random() * total.eyebrows));
    setHair(Math.floor(Math.random() * total.hair));
    setFacialHair(Math.floor(Math.random() * total.facialHair));
    setMouth(Math.floor(Math.random() * total.mouth));
    setMouth(Math.floor(Math.random() * total.mouth));
    setEarrings(Math.floor(Math.random() * total.earrings));
    setGlasses(Math.floor(Math.random() * total.glasses));
    setHats(Math.floor(Math.random() * total.hats));
    setNeckwear(Math.floor(Math.random() * total.neckwear));
    setClothing1(Math.floor(Math.random() * total.clothing1));
    setClothing2(Math.floor(Math.random() * total.clothing2));
    setClothing3(Math.floor(Math.random() * total.clothing3));
  };
  useEffect(() => {
    randomize();
  }, []);

  return (
    <div
      className="flex flex-col items-center bg-cover"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1617957743103-310accdfb999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80)",
      }}
    >
      <div className="text-5xl font-bold shadow-lg shadow-red-500 p-2 text-white italic mt-1">
        CHARACTER CUSTOMIZATION
      </div>

      <div className="container px-5 py-24 mx-auto flex flex-wrap justify-center gap-7 ">
        <div className="bg-slate-200 xl:sticky top-3.5 border-double border-8 border-pink-600 rounded-xl p-5 h-1/2">
          <Avatar
            body={body}
            eyes={eyes}
            hair={hair}
            facialHair={facialHair}
            clothing1={clothing1}
            clothing2={clothing2}
            clothing3={clothing3}
            mouth={mouth}
            eyebrow={eyebrows}
            glasses={glasses}
            earrings={earrings}
            hats={hats}
            neckwear={neckwear}
          />
          <div className="text-center">
            <button
              className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={() => randomize()}
            >
              Randomize!
            </button>
          </div>
        </div>

        <div>
          <div className="max-w-2xl text-center">
            <h2 className="text-white p-2 text-2xl">Body</h2>
            <PartList
              total={total.body}
              path="body"
              set={setBody}
              selected={body}
            />
          </div>
          <div className="max-w-2xl text-center">
            <h2 className="text-white p-2 text-2xl">Eyes</h2>
            <PartList
              total={total.eyes}
              path="eyes"
              set={setEyes}
              selected={eyes}
            />
          </div>
          <div className="max-w-2xl text-center">
            <h2 className="text-white p-2 text-2xl">Hair</h2>
            <PartList
              total={total.hair}
              path="hair"
              set={setHair}
              selected={hair}
            />
          </div>
          <div className="max-w-2xl text-center">
            <h2 className="text-white p-2 text-2xl">Facial Hair</h2>
            <PartList
              total={total.facialHair}
              path="facial_hair"
              set={setFacialHair}
              selected={facialHair}
            />
          </div>
          <div className="max-w-2xl text-center">
            <h2 className="text-white p-2 text-2xl">Mouth</h2>
            <PartList
              total={total.mouth}
              path="mouths"
              set={setMouth}
              selected={mouth}
            />
          </div>
          <div className="max-w-2xl text-center">
            <h2 className="text-white p-2 text-2xl">Eyebrows</h2>
            <PartList
              total={total.eyebrows}
              path="eyebrows"
              set={setEyebrow}
              selected={eyebrows}
            />
          </div>
          <div className="max-w-2xl text-center">
            <h2 className="text-white p-2 text-2xl">Glasses</h2>
            <PartList
              total={total.glasses}
              path="accessories/glasses"
              set={setGlasses}
              selected={glasses}
            />
          </div>
          <div className="max-w-2xl text-center">
            <h2 className="text-white p-2 text-2xl">Earrings</h2>
            <PartList
              total={total.earrings}
              path="accessories/earrings"
              set={setEarrings}
              selected={earrings}
            />
          </div>
          <div className="max-w-2xl text-center">
            <h2 className="text-white p-2 text-2xl">Hats</h2>
            <PartList
              total={total.hats}
              path="accessories/hats"
              set={setHats}
              selected={hats}
            />
          </div>
          <div className="max-w-2xl text-center">
            <h2 className="text-white p-2 text-2xl">Neckwear</h2>
            <PartList
              total={total.neckwear}
              path="accessories/neckwear"
              set={setNeckwear}
              selected={neckwear}
            />
          </div>
          <div className="max-w-2xl text-center">
            <h2 className="text-white p-2 text-2xl">Clothing (L1)</h2>
            <PartList
              total={total.clothing1}
              path="clothes/layer_1"
              set={setClothing1}
              selected={clothing1}
            />
          </div>
          <div className="max-w-2xl text-center">
            <h2 className="text-white p-2 text-2xl">Clothing (L2)</h2>
            <PartList
              total={total.clothing2}
              path="clothes/layer_2"
              set={setClothing2}
              selected={clothing2}
            />
          </div>
          <div className="max-w-2xl text-center">
            <h2 className="text-white p-2 text-2xl">Clothing (L3)</h2>
            <PartList
              total={total.clothing3}
              path="clothes/layer_3"
              set={setClothing3}
              selected={clothing3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
