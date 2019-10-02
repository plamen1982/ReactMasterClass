import React from 'react';

const ListView = ({ starWarsCharacters }) => (
    <div>
        {
            starWarsCharacters.map((hero, index) => (
                <div class="row" key={hero.created}>{index + 1}: {hero.name}</div>
            ))
        }
    </div>
);

export default ListView;