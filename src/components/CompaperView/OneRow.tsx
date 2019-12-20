import React from "react";
import "../../App.css";

export interface RowProps {
  rowName: string;
  rowValue: number | string;
}

export default function OneRow(props: RowProps) {
  return (
    <div className="compareBoxe">
      <div style={{ marginRight: "20px" }}>{props.rowName}:</div>

      {props.rowValue}
    </div>
  );
}
