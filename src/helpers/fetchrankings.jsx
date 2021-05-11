import React from 'react';

const RankingsList = (props) => {
    const { ranklists } = props;
    if (!ranklists || ranklists.length === 0) return <p>No rankings, sorry</p>;
    return (
        <ul>
            <h2 classNamse='list-head'>Rankings For "COUNTRY"</h2>
            {/* need code here to reference the selected country.. */}
            {ranklists.map((ranklist) => {
                return (
                    <li className='list'>
                        <p className='ranklist-text'>Country: {ranklist.country} </p>
                        <p className='ranklist-description'>Rank: {ranklist.rank}</p>
                        <p className='ranklist-description'>Score: {ranklist.score}</p>
                        <p className='ranklist-description'>Year: {ranklist.year}</p>
                    </li>
                );
            })}
        </ul>
    );
};
export default RankingsList;