import "./App.css";
import React, { useEffect, useState } from "react";
import ClickCounterDisplayer from "./components/ClickCounterDisplayer/ClickCounterDisplayer";
import { useSaveClickCount } from "./hooks/useSaveClickCount";

function App() {
  const [count, setCount] = useState(0);
  const [saveClickCount, clickCount, error, loading] = useSaveClickCount();

  useEffect(() => {
    const timer = setTimeout(() => {
      if(count !== 0) {
        saveClickCount(count);
      }
      setCount(0);
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="app">
      {error && <div>{error}</div>}

      <button disabled={loading} onClick={() => setCount((prev) => prev + 1)} className={"button"}>
        {loading ? "Загрузка" : "Кликнуть"}
      </button>

      <ClickCounterDisplayer
        className={"counter personCounter"}
        label={"Кликнули"}
        count={count}
      />

      <ClickCounterDisplayer
        className={"counter serverCounter"}
        label={"По версии сервера: "}
        count={clickCount}
      />
    </div>
  );
}

export default App;
