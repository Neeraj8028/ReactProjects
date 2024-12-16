import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, Setcolor] = useState("pink");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="fixed flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-md">
            <button
              className="px-4 outline-none py-1 rounded-lg text-black"
              style={{ backgroundColor: "White" }}
              onClick={()=>Setcolor('white')}
            >
              White
            </button>
            <button
              className="px-4 outline-none py-1 rounded-lg text-white"
              style={{ backgroundColor: "red" }}
              onClick={()=>Setcolor('red')}
            >
              Red
            </button>
            <button
              className="px-4 outline-none py-1 rounded-lg text-white"
              style={{ backgroundColor: "Violet" }}
              onClick={()=>Setcolor('violet')}
            >
              Violet
            </button>
            <button
              className="px-4 outline-none py-1 rounded-lg text-white"
              style={{ backgroundColor: "Yellow" }}
              onClick={()=>Setcolor('yellow')}

            >
              Yellow
            </button>
            <button
              className="px-4 outline-none py-1 rounded-lg text-white"
              style={{ backgroundColor: "Blue" }}
              onClick={()=>Setcolor('blue')}

            >
              Blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
