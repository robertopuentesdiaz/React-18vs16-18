import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

export default function App() {
  const initState = "-null-";
  const [a, setA] = useState(initState);
  const [b, setB] = useState(initState);
  const [c, setC] = useState(initState);
  const [d, setD] = useState(initState);
  const [e, setE] = useState(initState);
  const [f, setF] = useState(initState);
  const [g, setG] = useState(initState);
  const [h, setH] = useState(initState);
  const [i, setI] = useState(initState);
  const [j, setJ] = useState(initState);

  const myChanges = (newState: string) => {
    setTimeout(() => {
      setA(newState);
      setB(newState);
      setC(newState);
      setD(newState);
      setE(newState);
      setF(newState);
      setG(newState);
      setH(newState);
      setI(newState);
      setJ(newState);
      setA(newState);
    }, 1000);
  };

  console.log("RENDERS");
  return (
    <div className="App">
      <h2>
        REACT {React.version} & REACT-DOM {ReactDOM.version}
      </h2>
      <button
        onClick={() => {
          myChanges("-ok-");
        }}
      >
        CHANGE NOW!
      </button>
      <h3>
        {a}-{b}-{c}-{d}-{e}-{f}-{g}-{h}-{i}-{j}
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr"
        }}
      ></div>
    </div>
  );
}
