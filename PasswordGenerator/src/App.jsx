import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [buttonText, setButtonText] = useState("Copy");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwyz";
    if (numbersAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+{}[]:~";

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, numbersAllowed, charAllowed, setPassword]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password).then(() => {
      setButtonText("Copied");
      setTimeout(() => {
        setButtonText("copy");
      }, 2000);
    });
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numbersAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-500 tex-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          placeholder="Password"
          value={password}
          ref={passwordRef}
          className=" outline-none w-full text-center px-3 py-1"
          readOnly
        />

        <button
          onClick={copyToClipboard}
          className="bg-blue-700 text-white px-3 py-1"
        >
          {buttonText}
        </button>
      </div>
      <div className="flex text-sm gap-x-2 ">
        <div className="flex items-center gap-x-2">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="outline-none cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="length">Length:{length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numbersAllowed}
            id="numberAllowed"
            onChange={() => setNumbersAllowed((prev) => !prev)}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="charAllowed"
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label htmlFor="numberInput">Characters</label>
        </div>
      </div>
    </div>
  );
};

export default App;
