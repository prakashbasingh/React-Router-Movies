import React, { useState, useState } from 'react';
// STEP 2 - import Route, Switch and Link from react router
import { Route, Switch, Link } from 'react-router-dom'

import axios from 'axios'

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>Replace this Div with your Routes</div>
    </div>
  );
};

export default App;
