import React from 'react';
const starWarsCharacters = [
    {id:1, name: 'Anakin Skywalker'},
    {id:2, name: 'Obi-Wan Kenovi'},
    {id:3, name: 'Luke Skywalker'},
    {id:4, name: 'Yoda'},
    {id:5, name: 'Han Solo'},
]
export const ListView = () => (
    <div>
        {
            starWarsCharacters.map(hero => (
            <div class="row" key={hero.id}>{hero.id}: {hero.name}</div>
        ))}
    </div>
)