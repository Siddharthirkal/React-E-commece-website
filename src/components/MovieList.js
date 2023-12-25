import React from 'react';

const Movies = (props) => {
    return (
        <li className={classes.Movies}>
            <h2>{props.title}</h2>
            <h3>{props.releaseDate}</h3>
            <p>{props.openingText}</p>
        </li>
    );
};

export default Movies;