import React from "react";
import Image from "next/image";
import {
  IoBrowsersOutline,
  IoCalculator,
  IoFootballOutline,
  IoLogoReact,
} from "react-icons/io5";
import { SidebarMenuItem } from "./SidebarMenuItem";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline size={40}></IoBrowsersOutline>,
    title: "Dashboard",
    subtitle: "Visualitation",
  },

  {
    path: "/dashboard/counter",
    icon: <IoCalculator size={40}></IoCalculator>,
    title: "Counter",
    subtitle: "Contador client side",
  },

  {
    path: "/dashboard/pokemons",
    icon: <IoFootballOutline size={40}></IoFootballOutline>,
    title: "Pokemones",
    subtitle: "Generación estática",
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: "400px" }}
      className="bg-gray-900 min-h-screen z-1 w-64 left-0 overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className="mr-2"></IoLogoReact>
          <span>Yeyo dashboard</span>
          <span className="text-blue-500">21</span>
        </h1>
        <p className="text-slate-500 text-sm">Maneja todas tus jaladas</p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              // src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              src="/assets/gigachad.webp"
              alt="User avatar"
              width={50}
              height={50}
            />
          </span>
          <span className="text-sm md:text-base font-bold">Hazael Flores</span>
        </a>
      </div>

      {/* ESTE ES NUESTRO NAV PEDORRO */}
      <div id="nav" className="w-full px-6">
        {menuItems.map((item) => (
          <SidebarMenuItem
            //prefiero mandar todos y cada uno de los datos que quiero, no estoy listo para el spread operator
            key={item.path}
            path={item.path}
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </div>
    </div>
  );
};
