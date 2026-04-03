import { Routes, Route, Link } from 'react-router-dom';
import PopularMoviesList from './components/popularMoviesList';
import HighestRatedMoviesList from './components/highestRatedMoviesList';
import UpcomingMoviesList from './components/upcomingMovies';
import SearchMovie from './components/searchMovie';
import SearchedMoviesList from './components/searchedMovieList';
import MovieGenre from './components/moviesGenre';
import PlayMovie from './components/playMovie';
import FavoriteMovies from './components/favoriteMovies';
import NowPlayingMovies from './components/nowPlayingMovies';
import Home from './components/home';

function App() {
  return (
    <div>
      <div className="jumbotron pb-3 pt-3">
        <div className="navbar navbar-expand-lg">
          <nav className="nav navbar-nav">    
            <Link to='/' className="nav-item nav-link">Home</Link>
            <Link to='/popular' className="nav-item nav-link">Popular</Link>
            <Link to='/highest-rated' className="nav-item nav-link">Highest Rated</Link>
            <Link to='/upcoming' className="nav-item nav-link">Upcoming</Link>
            <Link to='/now-playing' className="nav-item nav-link">Now Playing</Link>
            <Link to='/favorites' className="nav-item nav-link">My Favorites</Link>
          </nav>
        </div>
          <span className='h1'>React Moviefinder</span>
          <div className="d-flex justify-content-between align-items-center p-0">
            <span>Your localhost for what's new in movies</span>

            <div className="d-flex align-items-center"><MovieGenre />
              <div className="ml-3"><SearchMovie /></div>
            </div>
          </div>
        </div>
        <Routes>
            <Route path='/' element={<Home/>} />  
            <Route path='/popular' element={<PopularMoviesList/>} />    
            <Route path='/highest-rated' element={<HighestRatedMoviesList/>} />
            <Route path='/upcoming' element={<UpcomingMoviesList/>} />
            <Route path='/searchedMovie' element={<SearchedMoviesList/>} />
            <Route path='/movie/:movieId' element={<PlayMovie/>} />
            <Route path='/now-playing' element={<NowPlayingMovies/>} />
            <Route path='/favorites' element={<FavoriteMovies/>} />
        </Routes>
    </div>
  );
}

export default App;