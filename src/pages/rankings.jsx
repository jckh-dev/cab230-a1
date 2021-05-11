import React, { useEffect, useState } from 'react';
import { Jumbotron, Container } from "reactstrap";
import RankingsList from "../helpers/fetchrankings";
import WithListLoading from "../helpers/listloading";

function Rankings() {

    const ListLoading = WithListLoading(RankingsList);
    const [appState, setAppState] = useState({
        loading: false,
        repos: null,
    });

    useEffect(() => {
        setAppState({ loading: true });
        const url = `http://131.181.190.87:3000/rankings?country=australia`;
        fetch(url)
            .then((res) => res.json())
            .then((ranklists) => {
                setAppState({ loading: false, ranklists: ranklists });
            });
    }, [setAppState]);

    return (
        <Container>
            <Jumbotron>
                <h1>NATION RANKINGS</h1>
                <div className='ranklist-container'>
                    <ListLoading isLoading={appState.loading} ranklists={appState.ranklists} />
                </div>
            </Jumbotron>
        </Container>
    )
}
export default Rankings

































// function fetchCountry() {
//     const url = `http://131.181.190.87:3000/rankings?country=australia`;
//     return fetch(url)
//         .then((res) => res.json())
//         .then(data => console.log(data)); 
// }

// function Country(props) {
//     return (
//         <div className="Country">
//             <ul>
//                 <li>Country: {props.country}</li>
//                 <li>Rank: {props.rank}</li>
//                 <li>Score: {props.score}</li>
//                 <li>Year: {props.year}</li>
//             </ul>
//         </div>)
// }

// export default function Rankings() {

//     const [nation, setCountry] = useState([]);
//     return (
//         <Container>
//             <Jumbotron>
//                 <h1>Country Rankings</h1>
//                 <button onClick={() => {
//                     fetchCountry()
//                         .then((nation) => {
//                             setCountry(nation);
//                         })
//                 }}>Get Country List</button>
//                 <Country {...nation} />
//             </Jumbotron>
//         </Container>
//     )
// }
