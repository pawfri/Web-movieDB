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
      })
    };
  },
});

export const {useFetchPopularMoviesQuery} = moviesApi;
export { moviesApi };