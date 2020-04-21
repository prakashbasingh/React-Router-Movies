import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      // when movie card clicked it will display only clicked movie detail
      <Link to = {`/movies/${movie.id}`}>
        <span className="saved-movie">{movie.title}</span>
      </Link>

    ))}
    {/* no home button on home page, appears on movie detail page and when clicked it will bring home page back */}
    <Route path='/movies/:id'> 
      <Link to='/'>
        <div className="home-button">Home</div>
      </Link>
    </Route>
  </div>
);

export default SavedList;
