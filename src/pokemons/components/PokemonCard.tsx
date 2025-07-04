'use client'

import Link from "next/link";
import React from "react";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import Image from "next/image";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavorite } from "@/store/pokemons/pokemons";

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;

  //vamos a implementar la funcion de favoritos con redux, apunta:
  //                                esto ya por si, se trae los pokemones
  const isFavorite = useAppSelector(state => state.pokemons.favorites[id] != undefined)

  const dispatch = useAppDispatch()

  const onToggle = () => {
    // console.log('click', { pokemon })
    dispatch(toggleFavorite(pokemon))
  }

  //muy util, si necesitas recordar algo descomentalo, es para ver los booleanos
  // console.log({ isFavorite })

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
          (
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            width={100}
            height={100}
            alt={pokemon.name}
            priority={false}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            {pokemon.name}
          </p>
          <p className="text-sm text-gray-100">John@Doe.com</p>
          <div className="mt-5">
            <Link
              href={`/dashboard/pokemons/${name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Mas información
            </Link>
          </div>
        </div>
        <div className="border-b">
          <div onClick={onToggle} className="cursor-pointer px-4 py-2 flex items-center hover:bg-gray-100">
            <div className="text-red-600">
              {
                isFavorite
                  ? (<IoHeart />)
                  : (<IoHeartOutline />)
              }
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                {
                  isFavorite
                    ? 'Ya es favorito'
                    : 'No es favorito'
                }
              </p>
              <p className="text-xs text-gray-500">View your campaigns</p>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};
