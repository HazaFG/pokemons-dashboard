'use client'

import { useAppSelector } from "@/store"
import { IoHeartOutline, } from "react-icons/io5";
import { PokemonGrid } from "./PokemonGrid";
import { useState } from "react";

export const PokemonFavorite = () => {
  const pokemonesFavoritos = useAppSelector(state => Object.values(state.pokemons.favorites))
  const [pokemones] = useState(Object.values(pokemonesFavoritos))

  // useEffect(() => {
  //   setPokemons(Object.values(pokemonesFavoritos))
  // }, [pokemonesFavoritos])

  return (
    <>
      {
        pokemonesFavoritos.length ? <PokemonGrid pokemons={pokemones} /> : <NoFavorites />
      }
    </>
  )
}

export const NoFavorites = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[50vh] text-gray-600">
      <IoHeartOutline size={100} className="mb-4" />
      <p className="text-xl">No hay Pokémon favoritos.</p>
      <p className="text-sm">¡Añade algunos desde la galería!</p>
    </div>
  )
}
