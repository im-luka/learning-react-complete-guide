import React from "react";
import BackwardCounter from "./components/BackwardCounter";
import ForwardCounter from "./components/ForwardCounter";
import MultiplyCounter from "./components/MultiplyCounter";

function App() {
  return (
    <React.Fragment>
      <ForwardCounter />
      <BackwardCounter />
      <MultiplyCounter />
    </React.Fragment>
  );
}

export default App;
