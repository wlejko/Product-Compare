import React from "react";
import OneItem from "./OneItem";
import { itemList } from "../../shared/array";
import "../../App.css";

function renderSomething() {
  return itemList.map(({ name, price, weigth, condition, image }) => (
    <OneItem
      name={name}
      price={price}
      weight={weigth}
      image={image}
      condition={condition}
      key={name}
    />
  ));
}

export default function ItemList() {
  return <div className="listContainer">{renderSomething()}</div>;
}
