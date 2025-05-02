import { PokemonsResponse, SimplePokemon } from "@/app/pokemons";

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
    <div>
      {/* Comentario para evitar que prettier me lo haga cagada */}
      {JSON.stringify(pokemons)}
    </div>
  );
}
