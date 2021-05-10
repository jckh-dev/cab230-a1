import { useState, useEffect } from "react";

const API_KEY = "";
const QUERY = ""

export function useRankings() {

    const [loading, setLoading] = useState(true);
    const [rankings, setRankings] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getRankingsByQuery(QUERY)
            .then((rankings) => {
                setRankings(rankings);
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
        rankings,
        error: null,
    };

}

export function getRankingsByQuery(q){

    // const url = "http://131.181.190.87:3000/rankings.json?q={q}";
    const url = "testdata/full_rankings.json?q={q}"

    return fetch(url)
    .then((res) => res.json())
    .then((rankings) =>
            rankings.map((ranking) => ({
                rank: ranking.rank,
                country: ranking.country,
                score: ranking.score,
                year: ranking.year
            })))

}