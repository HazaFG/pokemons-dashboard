"use client";

import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, initCounterState, substractOne } from "@/store/counter/counterSlice";
import React, { useEffect, useState } from "react";

// interface Props {
//   value?: number;
// }

export interface CounterResponse {
  method: string;
  count: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch('/api/counter').then(res => res.json())
  console.log(data)
  return data
}

export const CartCounter = () => {

  //contador = nombre que le pusiste al slice en index.ts 
  //state viene de initialState en counterSlice.ts
  //count viene de counterSlice.ts tambien, y es esta interface: 
  //
  // interface CounterState {
  //   count: number;
  //   isReady: boolean;
  // }
  // 
  const count = useAppSelector(state => state.contador.count)

  //Tambien esta esta manera de verlo si se te hace mas facil sin la arrow function
  // const count = useAppSelector(function(state) {
  //   return state.contador.count;
  // });


  const dispatch = useAppDispatch();

  // que te sirva este ejemplo de como antes solamente cambiabas el valor del counter usando el value de Props
  // useEffect(() => {
  //   dispatch(initCounterState(value))
  // }, [dispatch, value])

  useEffect(() => {
    getApiCounter()
      .then(({ count }) => dispatch(initCounterState(count)))
  }, [dispatch])


  // const [contador, setContador] = useState(value);

  //Manera facil de entender para mi xd
  // const incrementar = () => {
  //   setContador(contador + 1);
  // };

  return (
    <>
      <span className="text-9xl">{count}</span>

      <div className="flex">
        <button
          onClick={() => dispatch(addOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transtition-all w-[100px] mr-2"
        >
          +1
        </button>
        <button
          onClick={() => dispatch(substractOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transtition-all w-[100px] mr-2"
        >
          -1
        </button>
      </div>
    </>
  );
};
