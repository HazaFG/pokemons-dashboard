import { SimpleWidget } from "@/components/SimpleWidget";
import React from "react";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Pagina principal",
  description: "Pagina principal pokemones",
};

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl">Hola main page</h1>
      <span className="mt-2 text-xl">Dashboard</span>


      <div className="flex flex-wrap p-2 items-center justify-center">
        <SimpleWidget />
      </div>
    </div>
  );
}
