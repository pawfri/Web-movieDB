import { Link } from 'react-router-dom';
import { useGetFavoritesQuery, useAddFavoriteMutation, useRemoveFavoriteMutation } from '../store';

function MovieCard({movie}){
    const posterBasePath = 'https://image.tmdb.org/t/p/w185';
    const { data: favorites = [] } = useGetFavoritesQuery();
    const [addFavorite] = useAddFavoriteMutation();
    const [removeFavorite] = useRemoveFavoriteMutation();
    const existingFavorite = favorites.find((fav) => fav.movieId === movie.id);
    const isFavorite = !!existingFavorite;
    

    const handleFavoriteClick = () =>
        isFavorite
            ? removeFavorite(existingFavorite.id)
            : addFavorite({
                movieId: movie.id,                
                title: movie.title,
                poster_path: movie.poster_path,
                vote_average: movie.vote_average,
                overview: movie.overview,
                release_date: movie.release_date,
                genre_ids: movie.genre_ids || []
            });

    return (
        <div className="col-lg-2 mb-4">
            <div className="card">
                <img src= {posterBasePath + movie.poster_path} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title "><span>{movie.title.substring(0,200)}</span></h5>
                    
                    <span className={isFavorite ? "fas fa-star" : "far fa-star"}
                    aria-hidden="true"
                    onClick={handleFavoriteClick}
                    style={{ cursor: "pointer" }}></span>
                    
                    <span className="ml-1">{movie.vote_average}</span>
                    <p className="card-text">{movie.overview.substring(0,125).concat('....')}</p>
                    <div className="d-flex justify-content-between p-0"><span className="far fa-calendar" aria-hidden="true"> {movie.release_date}</span><Link to={`/movie/${movie.id}`} className="far fa-play-circle"></Link></div>            
                </div>
            </div>
        </div>
      );
}


      
export default MovieCard;