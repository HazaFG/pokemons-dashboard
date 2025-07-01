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
  //este es el id que estas utilizando en la card
  [id: string]: SimplePokemon,
}

const getInitialState = (): PokemonsState => {
  const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}')
  return favorites
}

const initialState: PokemonsState = {
  ...getInitialState()

  //como dato curioso, ten en cuenta que aqui, estas poniendo que este pokemon especificamente lo estas haciendo uno de tus favoritos
  //AHORA LEE ESTO, este id '1' se va a borrar de los favoritos jiji
  // '1': { id: '1', name: 'bulbasaur' },
  // '2': { id: '2', name: 'Ivysaur' },
};


const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      //vamos a evaluar si el pokemon ya existe
      const pokemon = action.payload;
      const { id } = pokemon


      if (state[id]) {
        // LEE ESTO PRIMERO: si existe este id en el state, borra el id, es decir: LEE LO QUE DICE EN EL STATE
        delete state[id];
        console.log('se quito el pokemon')
        // return;
      } else {
        //y pues si no existe, pues lo mete
        console.log('Se metio el pokemon jiji')
        state[id] = pokemon;
      }
      //TODO: No se debe de hacer en redux
      localStorage.setItem('favorite-pokemons', JSON.stringify(state))
    }
  }
});

export const { toggleFavorite } = pokemonSlice.actions;
export default pokemonSlice.reducer;
