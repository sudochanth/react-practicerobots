import React from 'react';
// import {robots} from './robots';

const Card = ( {name, email, id}) => {
    return (
        <div>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>    
        </div>
    );
};

export default Card;