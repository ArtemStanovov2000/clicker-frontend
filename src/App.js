import './App.css';
import { useState, useEffect } from "react";
import ButtonElement from './ButtonElement';
import CounterElement from './CounterElement';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(0)
    }, 1000);
    return () => clearInterval(timer);
  });
  
  return (
    <div className="app">
      <ButtonElement setState={setCount} state={count} className={"button"}></ButtonElement>
      <CounterElement className={"counter personCounter"} description={"Кликнули"} stateCounter={count}></CounterElement>
      <CounterElement className={"counter serverCounter"} description={"По версии сервера: "} stateCounter={0}></CounterElement>
    </div>
  );
}

export default App;
