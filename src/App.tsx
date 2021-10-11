import React from "react";
import "./App.css";
import MyEditor from "./features/myeditor/MyEditor";
import "draft-js/dist/Draft.css";
import { Counter } from "./features/counter/Counter";

function App() {
  return (
    <div className="App">
      <h1>draft.js redux sample</h1>
      <MyEditor />
      <Counter />
    </div>
  );
}

export default App;
