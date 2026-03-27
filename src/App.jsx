import { Routes, Route, Link } from 'react-router-dom';
import PopularMoviesList from './components/popularMoviesList';
import HighestRatedMoviesList from './components/highestRatedMoviesList';
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
          </nav>
        </div>
          <span className='h1'>React Moviefinder</span>
      <span className="d-flex justify-content-between p-0">Your localhost for what's new in movies</span>
        </div>
        <Routes>
            <Route path='/' element={<Home/>} />  
            <Route path='/popular' element={<PopularMoviesList/>} />    
            <Route path='/highest-rated' element={<HighestRatedMoviesList/>} />
        </Routes>
    </div>
  );
}

export default App;