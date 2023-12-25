// components/Movie.js
import React, { useState, useEffect } from 'react';

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [error, setError] = useState(null);
  const [retryInterval, setRetryInterval] = useState(null);

  useEffect(() => {
    if (buttonClicked) {
      fetchMoviesHandler();
    }
  }, [buttonClicked]);

  const fetchMoviesHandler = () => {
    setIsLoading(true);
    setError(null);
    retryFetchMovies();
  };

  const retryFetchMovies = () => {
    const retryDelay = 5000; // Retry after 5 seconds

    fetch('https://swapi.dev/api/films/')
      .then(response => response.json())
      .then(data => {
        const transformedMovies = data.results.map(movieData => ({
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        }));
        setMovies(transformedMovies);
        setIsLoading(false);
        setRetryInterval(null); // Reset retry interval on success
      })
      .catch(err => {
        console.error('Error fetching movies:', err);
        if (!retryInterval) {
          setError('Something went wrong... Retrying');
          setRetryInterval(
            setTimeout(() => {
              retryFetchMovies();
            }, retryDelay)
          );
        }
      });
  };

  const handleButtonClick = () => {
    setButtonClicked(true);
  };

  const handleCancelRetry = () => {
    clearTimeout(retryInterval); // Clear the retry interval
    setRetryInterval(null);
    setError(null); // Remove retrying message on cancel
  };

  return (
    <div>
      <button onClick={handleButtonClick} className="btn btn-primary my-3">
        Fetch Movies
      </button>
      {!buttonClicked && <p>No movies found.</p>}

      {error && (
        <p>
          {error}{' '}
          <button onClick={handleCancelRetry} className="btn btn-danger">
            Cancel Retry
          </button>
        </p>
      )}

      {isLoading && (
        <p>
          Loading...{' '}
          {/* <button onClick={handleCancelRetry} className="btn btn-danger">
            Cancel Retry
          </button> */}
        </p>
      )}

      {!isLoading && movies.length > 0 && (
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Opening Text</th>
              <th>Release Date</th>
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <tr key={movie.id}>
                <td>{movie.id}</td>
                <td>{movie.title}</td>
                <td>{movie.openingText}</td>
                <td>{movie.releaseDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Movie;
