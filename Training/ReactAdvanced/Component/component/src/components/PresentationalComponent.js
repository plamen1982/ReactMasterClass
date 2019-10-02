import React from 'react';
// const starWarsCharacters = [
//     {id:1, name: 'Anakin Skywalker'},
//     {id:2, name: 'Obi-Wan Kenovi'},
//     {id:3, name: 'Luke Skywalker'},
//     {id:4, name: 'Yoda'},
//     {id:5, name: 'Han Solo'},
// ]
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