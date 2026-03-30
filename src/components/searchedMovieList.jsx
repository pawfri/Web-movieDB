import { useFetchSearchedMovieQuery } from "../store";
import MovieCard from "./movieCard";
import { useSelector, useDispatch } from "react-redux";



function SearchedMoviesList() {  
    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => {
        return state.searchMovie.searchTerm;
    });
  const {data, error, isFetching } = useFetchSearchedMovieQuery(searchTerm);
                                                                  
  let content;
  if (isFetching) {
    content = <div>Loading;</div>
  } else if (error) {
    content = <div>Error loading movies.</div>;
  } else {
    content = data.results
        .filter(movie => movie.poster_path !== null)
        .map((movie) => {
      return <MovieCard key={movie.id} movie={movie}></MovieCard>
    });
  }

    return (
    <div className="row row-cols-3 row-cols-md-2 m-4">
      {content}
    </div>
  );
}

export default SearchedMoviesList;