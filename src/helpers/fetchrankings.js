import React from 'react';

const RankingsList = (props) => {
    const { ranklists } = props;
    if (!ranklists || ranklists.length === 0) return <p>No rankings, sorry</p>;
    return (
        <ul>
            <h2 classNamse='list-head'>Available Public Repositories</h2>
            {ranklists.map((ranklist) => {
                return (
                    <li key={ranklist.id} className='list'>
                        <span className='ranklist-text'>{ranklist.country} </span>
                        <span className='ranklist-description'>{ranklist.rank}</span>
                        <span className='ranklist-description'>{ranklist.score}</span>
                        <span className='ranklist-description'>{ranklist.year}</span>
                    </li>
                );
            })}
        </ul>
    );
};
export default RankingsList;