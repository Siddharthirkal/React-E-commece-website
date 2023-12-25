// components/Movie.js
import React, { useState, useEffect } from 'react';

const Movie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMoviesHandler();
  }, []);

  const fetchMoviesHandler = () => {
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
      })
      .catch(error => console.error('Error fetching movies:', error));
  };

  return (
    <div>
      <button onClick={fetchMoviesHandler} className="btn btn-primary my-3">Fetch Movies</button>
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
    </div>
  );
};

export default Movie;
