import React from "react";
//import { Counter } from './features/counter/Counter';
import "./App.css";
import Header from "./stories/Header";

function App() {
  const darkMode=true;
  return (
    <div className="app">
      <Header title="React 2.0" darkMode={darkMode} />
    </div>
  );
}

export default App;
