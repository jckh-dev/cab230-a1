import React, { useEffect, useState } from 'react';
import {
    Jumbotron,
    Button,
    Container
} from "reactstrap";

import Search from "../components/search";

// components
import RankingsList from "../helpers/fetchrankings";
import WithListLoading from "../helpers/listloading";
import Nation from "../components/nation";
import { useRankings } from "../helpers/api"

export default function Home() {


    const { loading, nations, error } = useRankings();

    if (loading) {
        return (
            <h1>please wait.... Loading.....</h1>
        )
    }

    if (error) {
        return (
            <h4>Something's wrong:: {error.message}</h4>
        )
    }

    // const ListLoading = WithListLoading(RankingsList);
    // const [appState, setAppState] = useState({
    //     loading: false,
    //     ranklists: null,
    // });

    // useEffect(() => {
    //     setAppState({ loading: true });
    //     const url = `http://131.181.190.87:3000/rankings?country=australia`;
    //     fetch(url)
    //         .then((res) => res.json())
    //         .then((ranklists) => {
    //             setAppState({ loading: false, ranklists: ranklists });
    //         });
    // }, [setAppState]);

    return (

        // make this into a form to properly search and display??? 
        // Use agGrid to display the resulting data?
        
        <main>
            <Container>
                <Jumbotron>
                    <h1 className="display-6">Do a quick search for country rankings</h1>
                    <p className="lead">Filter your search via country, year or both</p>
                    <hr className="my-2" />
                    <p>Make your selections here:</p>
                    <Search />
                    <p>
                        <Button color="primary">Search!</Button>
                    </p>

                    <div className='ranklist-container'>
                        {/* <ListLoading isLoading={appState.loading} ranklists={appState.ranklists} /> */}
                        <h4>Results:</h4>
                        {nations.map((nation) =>(
                            <Nation
                            rank={nation.rank}
                            country={nation.country}
                            score={nation.score}
                            year={nation.year}
                            />
                        ))}
                    </div>

                </Jumbotron>
            </Container>

        </main>

    )
}

