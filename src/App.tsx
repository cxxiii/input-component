import React from "react";
import Input from "./components/Input/Input";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center", textTransform: "uppercase" }}>
        Buttons
      </h1>
      <br />
      <div className="display-box_container">
        <div className="display-box">
          <pre>{`<Input />`}</pre>
          <Input value="Hello World" />
        </div>
      </div>
      <footer>Nikolay Rademacher</footer>
    </>
  );
}

export default App;
