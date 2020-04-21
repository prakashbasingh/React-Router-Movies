import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'


const MovieCard = props => {
  const { title, director, metascore, stars } =props.movie;

  return(

    <div className="movie-card">
      <h2>{title}</h2>
      
      <Route path='/movies/:id'>{/* it will hide movie detail on home page */}
      <Link to='/'> {/*when clicked oon movie detail it will take us to home page */}
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
        <div className="save-button">Save</div>
        </Link>
      </Route>
    </div>
  );
};

export default MovieCard;
