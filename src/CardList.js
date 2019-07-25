import React from 'react';
import {robots} from './robots';
import './CardList.css';
import Card from './Card'

const CardList = ( { robots } ) => {
    return (
        <div className="card-list">
        {
            robots.map((robot, i) => {
                return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
            })
        }
        </div>
    );
};

export default CardList;