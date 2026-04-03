import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const moviesApi = createApi({
  reducerPath: 'movies',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://api.themoviedb.org/3/'
  }),
  endpoints(builder) {
    return {
      fetchPopularMovies: builder.query({
        query: () => {
          return {
            url: 'discover/movie',
            params: {
              sort_by: 'popularity.desc',
              api_key: import.meta.env.VITE_TMDB_API_KEY
            },
            method: 'GET',
          };
        },
      }),
      fetchHighestRatedMovies: builder.query({
        query: () => {
          return {
            url: 'discover/movie',
            params: {
              sort_by: 'vote_average.desc',
              api_key: import.meta.env.VITE_TMDB_API_KEY
            },
            method: 'GET',
          };
        },
      }),
      fetchSearchedMovie: builder.query({
        query: (searchTerm) => {
          return {
            url: 'search/movie',
            params: {
              query: searchTerm,
              api_key: import.meta.env.VITE_TMDB_API_KEY
            },
            method: 'GET',
          };
        },
      }),
      fetchNowPlayingMovies: builder.query({
        query: () => {
          return {
            url: 'movie/now_playing',
            params: {
              api_key: import.meta.env.VITE_TMDB_API_KEY
            },
            method: 'GET',
          };
        },
      }),
      fetchUpcomingMovies: builder.query({
        query: () => {
          return {
            url: 'movie/upcoming',
            params: {
              api_key: import.meta.env.VITE_TMDB_API_KEY
            },
            method: 'GET',
          };
        },
      }),
      fetchGenres: builder.query({
        query: () => ({
          url: 'genre/movie/list',
          params: {
            api_key: import.meta.env.VITE_TMDB_API_KEY
          },
          method: 'GET'
        })
      }),
      fetchMoviesByGenre: builder.query({
        query: (genreId) => ({
          url: 'discover/movie',
          params: {
            with_genres: genreId,
            sort_by: 'popularity.desc',
            api_key: import.meta.env.VITE_TMDB_API_KEY
          },
          method: 'GET'
        })
      }),
      fetchMovieVideo: builder.query({
        query: (movieId) => {
          return {
            url: `movie/${movieId}/videos`,
            params: {
              api_key: import.meta.env.VITE_TMDB_API_KEY
            },
            method: 'GET',
          };
        },
      }),
    };
  }
});

export const {useFetchPopularMoviesQuery, useFetchHighestRatedMoviesQuery, useFetchSearchedMovieQuery, useFetchUpcomingMoviesQuery, useFetchNowPlayingMoviesQuery, useFetchGenresQuery, useFetchMoviesByGenreQuery, useFetchMovieVideoQuery} = moviesApi;
export { moviesApi };