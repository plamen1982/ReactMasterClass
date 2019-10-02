import React, { useEffect, useState } from 'react';

const DataLoader = ({ component: Component, fetchData }) => {
    const [node, setNode] = useState([]);
    
    useEffect(() => {
        fetchData().then(response => {
        setNode(response.data.results);
        })
    }, [])
    return (
        <Component starWarsCharacters={node} />
    );
}

export default DataLoader;