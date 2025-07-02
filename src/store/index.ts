import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counter/counterSlice'
import pokemons from './pokemons/pokemons'
import { useDispatch, useSelector } from 'react-redux'
// import { localStorageMiddleware } from './middlewares/localstorage-middleware'

export const store = configureStore({
  reducer: {
    // contador, es lo que vas a usar en el componente de cartCounter, con esta funcion
    //const count = useAppSelector(state => state.contador.count)
    contador: counterSlice,
    pokemons: pokemons,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  //   .concat(localStorageMiddleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


//hooks

//vamos a usar useDispatch para lanzar los disparadores y ejecutar accciones
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

//Aqui vamos a poder leer nuestro estado
export const useAppSelector = useSelector.withTypes<RootState>()


