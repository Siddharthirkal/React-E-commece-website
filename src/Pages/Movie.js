// Movie.js
import React, { useState, useEffect, useCallback } from 'react';
import AddMovie from '../components/AddMovie';

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [error, setError] = useState(null);
  const [retryInterval, setRetryInterval] = useState(null);

  const retryFetchMovies = useCallback(() => {
    const retryDelay = 5000; // Retry after 5 seconds

    fetch('https://react-http-10007-default-rtdb.firebaseio.com/movies.json')
      .then(response => response.json())
      .then(data => {
        const loadedMovies = [];

        for (const key in data) {
          loadedMovies.push({
            id: key,
            title: data[key].title,
            openingText: data[key].openingText,
            releaseDate: data[key].releaseDate,
          });
        }
        setMovies(loadedMovies);
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
  }, [retryInterval]);

  const fetchMoviesHandler = useCallback(() => {
    setIsLoading(true);
    setError(null);
    retryFetchMovies();
  }, [retryFetchMovies]);

  const handleButtonClick = useCallback(() => {
    setButtonClicked(true);
  }, []);

  const handleCancelRetry = useCallback(() => {
    clearTimeout(retryInterval); // Clear the retry interval
    setRetryInterval(null);
    setError(null); // Remove retrying message on cancel
  }, [retryInterval]);

  const handleAddMovie = useCallback(async (movie) => {
    try {
      // Send a POST request to add the new movie
      const response = await fetch('https://react-http-10007-default-rtdb.firebaseio.com/movies.json', {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to add movie');
      }

      // Retrieve the updated list of movies after adding a new one
      const updatedMoviesResponse = await fetch('https://react-http-10007-default-rtdb.firebaseio.com/movies.json');
      const updatedMoviesData = await updatedMoviesResponse.json();

      if (updatedMoviesData && typeof updatedMoviesData === 'object') {
        const updatedMovies = Object.keys(updatedMoviesData).map((key) => ({
          id: key,
          ...updatedMoviesData[key],
        }));

        // Update the state with the new list of movies
        setMovies(updatedMovies);
      }

      // Log the added movie
      console.log('New Movie:', movie);
    } catch (error) {
      console.error('Error adding movie:', error);
    }
  }, [setMovies]);

  const handleDeleteMovie = useCallback(async (id) => {
    try {
      // Send a DELETE request to remove the movie
      const response = await fetch(`https://react-http-10007-default-rtdb.firebaseio.com/movies/${id}.json`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete movie');
      }

      // Update the state by removing the deleted movie
      setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
    } catch (error) {
      console.error('Error deleting movie:', error);
    }
  }, [setMovies]);

  useEffect(() => {
    if (!buttonClicked) {
      // Fetch movies on initial load
      fetchMoviesHandler();
    }
  }, [buttonClicked, fetchMoviesHandler]);

  return (
    <div>
      <AddMovie onAddMovie={handleAddMovie} />

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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <tr key={movie.id}>
                <td>{movie.id}</td>
                <td>{movie.title}</td>
                <td>{movie.openingText}</td>
                <td>{movie.releaseDate}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteMovie(movie.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Movie;
