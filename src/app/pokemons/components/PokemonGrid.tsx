import React from "react";
import Image from "next/image";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import { PokemonCard } from "./PokemonCard";

interface Props {
  pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap gap-10 item-center justify-center">
      {/* literalmente no se como fregados me pude traer los pokemones aqui con el interface, me cuesta pensarlo */}

      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />

        //Para poder envolver esta mierda y que se mande como quieres, en este caso mas de un elemento, la imagen y el texto
        // Tienes que meterlos en un div, tienen que ir en paquete, y en este paquete es donde debe de ir el key
        // <div key={pokemon.id}>
        //   <Image
        //     src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
        //     width={100}
        //     height={100}
        //     alt={pokemon.name}
        //   />
        //   <p className="mt-2 text-center capitalize">{pokemon.name}</p>
        // </div>
      ))}
    </div>
  );
};
