import React from 'react';

const ListView = ({ starWarsCharacters }) => (
    <div className="container">
        {
            starWarsCharacters.map((hero, index) => (
                <div className="row" key={hero.created}>{index + 1}: {hero.name}</div>
            ))
        }
    </div>
);

export default ListView;