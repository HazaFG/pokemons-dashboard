import { SimpleWidget } from "@/components/dashboard/SimpleWidget";
import React from "react";
import type { Metadata } from "next";
import { IoCartOutline } from "react-icons/io5";
import { WidgetsGrid } from "@/components/dashboard/WidgetsGrid";


export const metadata: Metadata = {
  title: "Pagina principal",
  description: "Pagina principal pokemones",
};

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl">Hola, imagina que esto es un carrito de compras</h1>
      <WidgetsGrid />
    </div >
  );
}
