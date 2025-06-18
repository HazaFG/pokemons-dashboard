import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

//Creamos nuestra funcion asincrona de JS, esta es la forma
const getPokemons = async (limit = 20, offset = 0 //Este tambien
): Promise<SimplePokemon[]> => {
  const dataPostman: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}limit&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = dataPostman.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  // throw new Error("esto es un error que no deberia de suceder");
  // throw notFound();
  // Un pedillo con la fecha xd

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de Pokemons <small>estático</small>
      </span>

      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
