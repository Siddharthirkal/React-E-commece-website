// AddMovie.js
import React, { useState, useCallback } from 'react';

const AddMovie = ({ onAddMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    openingText: '',
    releaseDate: '',
  });

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setNewMovie((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const handleAddMovie = useCallback(() => {
    onAddMovie(newMovie);
  }, [onAddMovie, newMovie]);

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          value={newMovie.title}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="openingText" className="form-label">
          Opening Text
        </label>
        <textarea
          className="form-control"
          id="openingText"
          name="openingText"
          value={newMovie.openingText}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="releaseDate" className="form-label">
          Release Date
        </label>
        <input
          type="text"
          className="form-control"
          id="releaseDate"
          name="releaseDate"
          value={newMovie.releaseDate}
          onChange={handleInputChange}
        />
      </div>
      <button type="button" className="btn btn-primary" onClick={handleAddMovie}>
        Add Movie
      </button>
    </form>
  );
};

export default AddMovie;
