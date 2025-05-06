"use client";

import React, { useState } from "react";

interface Props {
  value?: number;
}

export const CartCounter = ({ value = 0 }: Props) => {
  const [contador, setContador] = useState(value);

  //Manera facil de entender para mi xd
  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <>
      <span className="text-9xl">{contador}</span>

      <div className="flex">
        <button
          onClick={incrementar}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transtition-all w-[100px] mr-2"
        >
          +1
        </button>
        <button
          //Manera pro de hacerlo xd
          onClick={() => setContador(contador - 1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transtition-all w-[100px] mr-2"
        >
          -1
        </button>
      </div>
    </>
  );
};
