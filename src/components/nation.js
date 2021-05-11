import React from 'react';

export default function Nation(props) {
    return (
        <div className="Nation">
            <h4>{props.country}</h4>
            <p>{props.rank}</p>
            <p>Score: {props.score}, Year: {props.year}</p>
        </div>
    )
}