import { useState, useEffect } from 'react';

export function useRankings() {

    const [loading, setLoading] = useState(true);
    const [nations, setNations] = useState([]);
    const [error, setError] = useState([null]);

    useEffect(() => {
        getRankings()
            .then((nations) => {
                setNations(nations);
                setLoading(false);
            })
            .catch((e) => {
                setError(e);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return {
        loading,
        nations,
        error: null,
    };

}

export function getRankings() {

    const url = `http://131.181.190.87:3000/rankings?country=australia`;

    return fetch(url)
        .then(res => res.json())
        .then((res) => res.rankings)
        .then(rankings =>
            rankings.map((ranklist) => {
                return {
                    rank: ranklist.rank,
                    country: ranklist.country,
                    score: ranklist.score,
                    year: ranklist.year
                };
            })
        )
}