import { CartCounter } from "@/shopping-cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping-cart",
  description: "Simple contador",
};

export default function CounterPage() {
  //aqui podriamos llegar a tener conexion directa con la base de datos jaja

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      {/* YO MANDO EL VALUE = 20 DESDE EL SERVIDOR */}
      <CartCounter />
    </div>
  );
}
