import React from "react";
import ReactDOM from "react-dom";
import SwitchButton from "./SwitchButton";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <SwitchButton />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
