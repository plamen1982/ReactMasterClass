import './App.css';
import React, { useState } from 'react';
import ListView from './components/PresentationalComponent';
import axios from 'axios';

// import BrownButton from './components/JSXSyntaxAndButtonComposition';
// import { Box, BoxWithContent, MultipleBoxes } from './components/Generic-Components';

import DataLoader from './components/ContainerComponent';

const starWarsCharactersUrl = 'https://swapi.co/api/people/';

const getStarWarsHeroes = () => {
  return axios.get(starWarsCharactersUrl)
}

function App() {

  return (
    <DataLoader 
      component={ListView} 
      fetchData={getStarWarsHeroes} 
    />
  );
}
export default App;