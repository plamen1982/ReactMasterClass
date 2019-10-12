import React, { useEffect, useState } from 'react';

const DataLoader = ({ component: Component, fetchData }) => {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        fetchData().then(response => {
        setNodes(response.data.results);
        })
    }, []);
    
    return (
        <Component starWarsCharacters={nodes} />
    );
}

export default DataLoader;