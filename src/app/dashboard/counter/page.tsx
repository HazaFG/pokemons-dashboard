"use client";

import { Metadata } from "next";
import { useState } from "react";

// export const metadata: Metadata = {
//   title: "Counter Page",
//   description: "Simple contador",
// };

export default function CounterPage() {
  const [contador, setContador] = useState(10);

  //Manera facil de entender para mi xd
  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
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
    </div>
  );
}
