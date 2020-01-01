import React, { useContext } from "react";
import CompareItem from "./CompareItem";
import { context } from "../../contexts/AppProvider";
import "../../App.css";

export default function CompareView() {
  const itemConcumer = useContext(context);

  //rendering objects if compare is true

  return (
    <div className="containerView">
      <div className="oneCompareSide">
        {itemConcumer?.firstObject.isCompared && (
          <CompareItem
            name={itemConcumer?.firstObject.name}
            price={itemConcumer?.firstObject.price}
            weight={itemConcumer?.firstObject.weight}
            condition={itemConcumer.firstObject.condition}
            id={1}
          />
        )}
      </div>
      <div className="divider"></div>
      <div className="oneCompareSide">
        {itemConcumer?.secondObject.isCompared && (
          <CompareItem
            name={itemConcumer?.secondObject.name}
            price={itemConcumer?.secondObject.price}
            weight={itemConcumer?.secondObject.weight}
            condition={itemConcumer.secondObject.condition}
            id={2}
          />
        )}
      </div>
    </div>
  );
}
