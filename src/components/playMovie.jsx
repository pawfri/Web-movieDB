import { useNavigate, useParams } from "react-router-dom";
import { useFetchMovieVideoQuery } from "../store";

function PlayMovie() {
  const { movieId } = useParams();
  const { data, error, isFetching } = useFetchMovieVideoQuery(movieId);
  const navigate = useNavigate();
  const handleBack = () => {navigate(-1);
  };

  if (isFetching) {
    return <div className="m-4">Loading trailer...</div>;
  }

  if (error) {
    return <div className="m-4">Error loading trailer.</div>;
  }

  const videos = data?.results ?? [];
  const trailer =
    videos.find((v) => v.site === "YouTube" && v.type === "Trailer") ||
    videos.find((v) => v.site === "YouTube");

  if (!trailer) {
    return (
      <div className="m-4">
        <button type="button" onClick={handleBack} className="btn btn-link p-0 trailer-back-button">Back</button>
        <p>No trailer available.</p>
      </div>
    );
  }

  return (
    <div className="container-fluid mt-4">
      <div className="trailer-wrap mt-3">
        <button type="button" onClick={handleBack} className="btn btn-link p-0 trailer-back-button">Back</button>
        <iframe
          className="trailer-iframe"
          src={"https://www.youtube.com/embed/" + trailer.key}
          title="Movie Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default PlayMovie;