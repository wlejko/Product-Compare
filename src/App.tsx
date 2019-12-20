import React, { useState } from "react";
import ItemList from "./components/ItemList/ItemList";
import CompareView from "./components/CompaperView/CompareView";
import { context } from "./contexts/AppProvider";
import "./App.css";

const App: React.FC = () => {
  const [firstObject, setFirstObject] = useState({
    name: "",
    price: 0,
    weight: 0,
    condition: "",
    isCompared: false
  });
  const [secondObject, setSecondObject] = useState({
    name: "",
    price: 0,
    weight: 0,
    condition: "",
    isCompared: false
  });

  return (
    <context.Provider
      value={{
        firstObject,
        secondObject,
        setFirstObject,
        setSecondObject,
        setAllProperties: (
          name: string,
          price: number,
          weight: number,
          condition: string,
          isCompared: boolean
        ) => {
          if (firstObject.isCompared === true) {
            setSecondObject({ name, price, weight, condition, isCompared });
          } else {
            setFirstObject({ name, price, weight, condition, isCompared });
          }
        }
      }}
    >
      <div className="topSide">
        <ItemList />
      </div>
      <div className="botSide">
        <CompareView />
      </div>
    </context.Provider>
  );
};

export default App;
