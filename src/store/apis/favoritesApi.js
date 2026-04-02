import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const favoritesApi = createApi({
  reducerPath: 'favorites',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3005' }),
  tagTypes: ['Favorites'],
  endpoints: (builder) => ({
    getFavorites: builder.query({
      query: () => '/favorites',
      providesTags: ['Favorites']
    }),
    addFavorite: builder.mutation({
      query: (newFavorite) => ({
        url: '/favorites',
        method: 'POST',
        body: newFavorite
      }),
      invalidatesTags: ['Favorites']
    }),
    removeFavorite: builder.mutation({
      query: (favoriteId) => ({
        url: `/favorites/${favoriteId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Favorites']
    })
  })
});

export const { useGetFavoritesQuery, useAddFavoriteMutation, useRemoveFavoriteMutation } = favoritesApi;
export { favoritesApi };