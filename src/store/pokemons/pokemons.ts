import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/*
 * vamos a usar un objeto de este tipo para hacer nuestros pokemones favoritos
 {
    "1": {id: 1, name: bulbasaur},
    "2": {id: 2, name: bulbasaur},
    "3": {id: 3, name: bulbasaur},
 }
*/

//Vamos a definir como queremos que luzca nuestro state

interface PokemonsState {
  [key: string]: SimplePokemon,
}

const initialState: PokemonsState = {
  //como dato curioso, ten en cuenta que aqui, estas poniendo que este pokemon especificamente lo estas haciendo uno de tus favoritos
  '1': { id: '1', name: 'bulbasaur' },
};

const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    // reducers 
  }
});

export const { } = pokemonSlice.actions;
export default pokemonSlice.reducer;
