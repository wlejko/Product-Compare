import React from "react";

export interface AppContextInterface {
  firstObject: {
    name: string;
    price: number;
    weight: number;
    condition: string;
    isCompared: boolean;
  };
  setFirstObject: (firstObject: {
    name: string;
    price: number;
    weight: number;
    condition: string;
    isCompared: boolean;
  }) => void;
  secondObject: {
    name: string;
    price: number;
    weight: number;
    condition: string;
    isCompared: boolean;
  };
  setSecondObject: (secondObject: {
    name: string;
    price: number;
    weight: number;
    condition: string;
    isCompared: boolean;
  }) => void;

  setAllProperties: (
    name: string,
    price: number,
    weight: number,
    condition: string,
    isCompared: boolean
  ) => void;
}

const context = React.createContext<AppContextInterface | null>(null);
export { context };
