import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { moviesApi } from './apis/moviesApi';
import { favoritesApi } from './apis/favoritesApi';
import { searchMovieReducer, changeSearchTerm, changeSelectedGenreId } from './searchedMovieSlice';


export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    [favoritesApi.reducerPath]: favoritesApi.reducer,
    searchMovie: searchMovieReducer
  },
  middleware: (getDefaultMiddleware) => {  //Thunk middelware
    return getDefaultMiddleware()
    .concat(moviesApi.middleware, favoritesApi.middleware);
  }
});

setupListeners(store.dispatch);

export { useFetchPopularMoviesQuery, useFetchHighestRatedMoviesQuery, useFetchSearchedMovieQuery, useFetchUpcomingMoviesQuery, useFetchNowPlayingMoviesQuery, useFetchGenresQuery, useFetchMoviesByGenreQuery, useFetchMovieVideoQuery } from './apis/moviesApi';
export { useGetFavoritesQuery, useAddFavoriteMutation, useRemoveFavoriteMutation } from './apis/favoritesApi';
export { changeSearchTerm, changeSelectedGenreId };
export type RootState = ReturnType<typeof store.getState>