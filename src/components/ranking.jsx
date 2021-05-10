import React from 'react';

export default function Ranking(props) {
    return (
        <div className="Ranking">
            <h2>{props.rank}</h2>
            <h2>{props.country}</h2>
            <p>
                Score : {props.score}, year: {props.year}
            </p>
        </div>
    );
}