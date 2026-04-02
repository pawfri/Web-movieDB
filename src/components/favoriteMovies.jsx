import { useGetFavoritesQuery } from "../store";
import MovieCard from "./movieCard";

function FavoriteMoviesList() {
  const { data, error, isFetching } = useGetFavoritesQuery();

  let content;
  if (isFetching) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div>Error loading favorites.</div>;
  } else if (data.length === 0) {
    content = <div>No favorite movies added yet. Click the star-icon on a movie to add it to favorites.</div>;
  } else {
    content = data.map((movie) => {
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