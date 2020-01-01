import React, { useContext } from "react";
import OneRow from "./OneRow";
import { context } from "../../contexts/AppProvider";
import "../../App.css";

export interface OneItemProps {
  name: string;
  price: number;
  weight: number;
  condition: string;
  id: number;
}

export default function CompareItem(props: OneItemProps) {
  const { name, price, weight, condition, id } = props;
  const itemConcumer = useContext(context);

  //function to delete object from compare view
  function deleteObject(id: number) {
    if (id === 1) {
      itemConcumer?.setFirstObject({
        name: "",
        price: 0,
        weight: 0,
        condition: "",
        isCompared: false
      });
    } else {
      itemConcumer?.setSecondObject({
        name: "",
        price: 0,
        weight: 0,
        condition: "",
        isCompared: false
      });
    }
  }

  return (
    <div className="compareContainer">
      <>
        <p className="compareName">{name}</p>
        <OneRow rowName="Price" rowValue={price} />
        <OneRow rowName="Weight" rowValue={weight} />
        <OneRow rowName="Condition" rowValue={condition} />
        <button onClick={() => deleteObject(id)} className="deleteButtonStyle">
          Delete
        </button>
      </>
    </div>
  );
}
