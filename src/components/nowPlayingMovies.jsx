import { useFetchNowPlayingMoviesQuery } from "../store";
import MovieCard from "./movieCard"
import { useSelector } from "react-redux";

function NowPlayingMovies() {
  const {data, error, isFetching } = useFetchNowPlayingMoviesQuery();
  const selectedGenreId = useSelector((state) => state.searchMovie.selectedGenreId);

  const filteredMovies = selectedGenreId 
    ? data?.results.filter(movie => movie.genre_ids.includes(parseInt(selectedGenreId)))
    : data?.results;

let content;
  if (isFetching) {
    content = <div>Loading;</div>
  } else if (error) {
    content = <div>Error loading movies.</div>;
  } else {
    content = filteredMovies.map((movie) => {
      return <MovieCard key={movie.id} movie={movie}></MovieCard>
    });
  }

    return (
    <div className="row row-cols-3 row-cols-md-2 m-4">
      {content}
    </div>
  );
  
}

export default NowPlayingMovies;