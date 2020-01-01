import React, { useContext } from "react";
import { OneItemProps } from "../../shared/interfaces";
import { context } from "../../contexts/AppProvider";
import "../../styles/card.css";

export default function OneItem(props: OneItemProps) {
  const itemConcumer = useContext(context);
  const { name, price, weight, image, condition } = props;

  //function to update state in context
  function updateName(
    name: string,
    price: number,
    weight: number,
    condition: string,
    isCompared: boolean
  ) {
    itemConcumer?.setAllProperties(name, price, weight, condition, isCompared);
  }

  return (
    <div
      className="container"
      onClick={() => updateName(name, price, weight, condition, true)}
    >
      <img src={image} className="imageStyle" alt={name}></img>
    </div>
  );
}
