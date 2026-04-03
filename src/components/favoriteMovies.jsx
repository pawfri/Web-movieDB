import { useGetFavoritesQuery } from "../store";
import MovieCard from "./movieCard";
import { useSelector } from "react-redux";

function FavoriteMoviesList() {
  const { data, error, isFetching } = useGetFavoritesQuery();
  const selectedGenreId = useSelector((state) => state.searchMovie.selectedGenreId);

  const filteredMovies = selectedGenreId
    ? data?.filter((movie) => movie.genre_ids?.includes(Number(selectedGenreId)))
    : data;

  let content;
  if (isFetching) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div>Error loading favorites.</div>;
  } else if (data.length === 0) {
    content = <div>No favorite movies added yet. Click the star-icon on a movie to add it to favorites.</div>;
  } else if (filteredMovies.length === 0) {
    content = <div>No favorite movies found for the selected genre.</div>;
  } else {
    content = filteredMovies.map((movie) => {
  return <MovieCard key={movie.id} movie={{ ...movie, id: movie.movieId }}></MovieCard>;
});
  }

  return (
    <div className="row row-cols-3 row-cols-md-2 m-4">
      {content}
    </div>
  );
}

export default FavoriteMoviesList;