import { useState, useCallback } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let num = "0123456789";
    let char = "!@#$%^&*()_+}{<></>";

    if (numAllowed) str += num;
    if (charAllowed) str += char;

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length+1);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed]); // Correct dependency array

  return (
    <>
      <h1 className="text-white text-4xl text-center mt-5">
        Password Generator
      </h1>
      <div className="w-full max-w-md mx-auto rounded-lg px-4 py-6 bg-gray-700 text-center text-orange-500 text-2xl">
        <div className="flex rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={Password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
          />
          <button
            className="text-white flex my-5 bg-blue-500 px-3 py-0.5"
            onClick={() => navigator.clipboard.writeText(Password)}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              value={length}
              min={8}
              max={16}
              className="cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label>Length: {length}</label>
          </div>
        </div>
        <div className="flex text-sm gap-x-2 mt-4">
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numAllowed}
              onChange={(e) => setNumAllowed(e.target.checked)}
            />
            <label>Include Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={(e) => setCharAllowed(e.target.checked)}
            />
            <label>Include Symbols</label>
          </div>
        </div>
        <button
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
          onClick={PasswordGenerator}
        >
          Generate Password
        </button>
      </div>
    </>
  );
}

export default App;
