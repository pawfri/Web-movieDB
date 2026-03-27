import PopularMoviesList from './components/popularMoviesList';
import HighestRatedMoviesList from './components/highestRatedMoviesList';

function App() {
  return (
    <div>
      
      <h1 className="title is-2">Movies from TheMovieDB</h1>
      <PopularMoviesList />

      <h1 className="title is-2">Highest Rated Movies from TheMovieDB</h1>
      <HighestRatedMoviesList />

    </div>
  );
}
export default App;