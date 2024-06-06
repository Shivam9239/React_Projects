import React from "react";
import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("olive");
  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="bg-white flex flex-wrap justify-center shadow-lg gap-3 px-3 py-2 rounded-3xl ">
          <button
            onClick={() => setColor("red")}
            className=" px-3 py-2 rounded-full"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("blue")}
            className=" px-3 py-2 rounded-full"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("purple")}
            className=" px-3 py-2 rounded-full"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>

          <button
            onClick={() => setColor("magenta")}
            className=" px-3 py-2 rounded-full"
            style={{ backgroundColor: "magenta" }}
          >
            Magenta
          </button>

          <button
            onClick={() => setColor("Orange")}
            className=" px-3 py-2 rounded-full"
            style={{ backgroundColor: "Orange" }}
          >
            Orange
          </button>

          <button
            onClick={() => setColor("skyblue")}
            className=" px-3 py-2 rounded-full"
            style={{ backgroundColor: "skyblue" }}
          >
            SkyBlue
          </button>

          <button
            onClick={() => setColor("Brown")}
            className=" px-3 py-2 rounded-full"
            style={{ backgroundColor: "brown" }}
          >
            Brown
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
