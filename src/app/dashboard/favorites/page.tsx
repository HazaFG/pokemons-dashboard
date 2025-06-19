import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

export const metadata = {
  title: 'Favoritos',
  description: 'Estos son los pokemones favoritos del usuario'
}

export default async function FavoritesPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de Pokemones <small className="text-blue-500">Favoritos</small>
      </span>

      <PokemonGrid pokemons={[]} />
    </div>
  );
}

