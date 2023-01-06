import React, { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [text, setText] = useState(false);

  const changeTextHandler = () => {
    setText(true);
  };

  return (
    <div>
      <h2>Hello World</h2>
      {!text && <Output>It's good to see you</Output>}
      {text && <Output>Text is changed</Output>}
      <button onClick={changeTextHandler}>change text</button>
    </div>
  );
};

export default Greeting;
