import React, {useState, useEffect } from 'react';
import axios from 'axios';
import ListView from './PresentationalComponent';

const DataLoader = () => {
    const starWarsCharactersUrl = 'https://swapi.co/api/people/';
    const [starWarsCharacters, setStarWarsCharacters] = useState([]);
    useEffect(() => {
        axios.get(starWarsCharactersUrl)
        .then(response => {
            setStarWarsCharacters(response.data.results);
        })
    }, [])
    return (
        <ListView starWarsCharacters={starWarsCharacters} />
    );
}

export default DataLoader;