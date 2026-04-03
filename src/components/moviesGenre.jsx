import { useSelector, useDispatch } from "react-redux";
import { useFetchGenresQuery, changeSelectedGenreId } from "../store";

function MoviesGenre() {
  const dispatch = useDispatch();
  const selectedGenreId = useSelector((state) => state.searchMovie.selectedGenreId);
  const { data, error, isFetching } = useFetchGenresQuery();

  const handleGenreChange = (event) => {
    dispatch(changeSelectedGenreId(event.target.value));
  };

  if (isFetching) return <span>Loading genres...</span>;
  if (error) return <span>Error loading genres.</span>;

  return (
    <div className="d-flex align-items-center">
      <label>Genre</label>
      <select className="input ml-2 genre-select" value={selectedGenreId} onChange={handleGenreChange}>
        <option value="">All genres</option>
        {data?.genres?.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default MoviesGenre;