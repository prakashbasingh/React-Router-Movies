import React, { useState, useEffect } from 'react';
// importing Route, Switch, and Link from react-router-dom
import { Route, Switch, Link } from 'react-router-dom'

import axios from 'axios';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const MovieDataURL = 'http://localhost:5000/api/movies'

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
        {/* wrapping components in routes */}
        <Switch>
          <Route path = '/movies/:id'>
            <Movie addToSavedList = {addToSavedList}/>
          </Route>

          <Route path = '/'>
            <MovieList/>
          </Route>
        </Switch>
      </div>

    </div>
  );
};

export default App;
