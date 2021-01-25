import React from "react";
import Input from "./components/Input/Input";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center", textTransform: "uppercase" }}>
        Input Fields
      </h1>
      <br />
      <div className="display-box_container">
        <div className="display-box">
          <pre>{`<Input label="Label" />`}</pre>
          <Input label="Label" />
        </div>
        <div className="display-box">
          <pre>{`<Input label="Label" error />`}</pre>
          <Input label="Label" error />
        </div>
        <div className="display-box">
          <pre>{`<Input helperText="Some explanatory text" />`}</pre>
          <Input label="Label" helperText="Some explanatory text" />
        </div>
      </div>
      <div className="display-box_container">
        <div className="display-box">
          <pre>{`<Input label="Label" disabled />`}</pre>
          <Input label="Label" disabled />
        </div>
        <div className="display-box">
          <pre>{`<Input label="Label" startIcon="call" />`}</pre>
          <Input label="Label" startIcon="call" />
        </div>
        <div className="display-box">
          <pre>{`<Input label="Label" endIcon="call" />`}</pre>
          <Input label="Label" endIcon="call" />
        </div>
      </div>
      <div className="display-box_container">
        <div className="display-box">
          <pre>{`<Input label="Label" value="Value" />`}</pre>
          <Input label="Label" value="Value" />
        </div>
        <div className="display-box">
          <pre>{`<Input label="Label" size="sm" />`}</pre>
          <Input label="Label" size="sm" />
        </div>
        <div className="display-box">
          <pre>{`<Input label="Label" size="lg"/>`}</pre>
          <Input label="Label" size="lg" />
        </div>
      </div>
      <div className="display-box_container">
        <div className="display-box" style={{ width: "100%" }}>
          <pre>{`<Input label="Label" fullWidth />`}</pre>
          <Input label="Label" fullWidth />
        </div>
      </div>
      <div className="display-box_container">
        <div className="display-box" style={{ width: "100%" }}>
          <pre>{`<Input label="Label" multiLine />`}</pre>
          <Input label="Label" multiLine />
        </div>
      </div>
      <footer>Nikolay Rademacher</footer>
    </>
  );
}

export default App;
