import { PokemonsResponse, SimplePokemon } from "@/app/pokemons";
import Image from "next/image";

//Creamos nuestra funcion asincrona de JS, esta es la forma
const getPokemons = async (
  limit = 20, //Estos son parametros bro
  offset = 0 //Este tambien
): Promise<SimplePokemon[]> => {
  const dataPostman: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}limit&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = dataPostman.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap gap-10 item-center justify-center">
        {/* VAMOS A RESOLVER LA TAREA QUE NO PUDISTE HACER, :( */}

        {pokemons.map((pokemon) => (
          //Para poder envolver esta mierda y que se mande como quieres, en este caso mas de un elemento, la imagen y el texto
          // Tienes que meterlos en un div, tienen que ir en paquete, y en este paquete es donde debe de ir el key
          <div key={pokemon.id}>
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              width={100}
              height={100}
              alt={pokemon.name}
            />
            <p className="mt-2 text-center capitalize">{pokemon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
