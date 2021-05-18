import React, { useEffect, useState } from 'react';
import {
    Jumbotron,
} from "reactstrap";

import Search from "../components/search";

// components
import RankingsList from "../components/fetchrankings";
import WithListLoading from "../helpers/listloading";

export default function Home() {

    // fetch request for the countries data end point. Needs to be refactored to properly remove some of the legacy code associated with the inital async implementation. This block of code should be much simpler than it is currently
    const ListLoading = WithListLoading(RankingsList);
    const [country, setCountry] = useState(null);
    const url = `http://131.181.190.87:3000/rankings?country=${country}`
    const [appState, setAppState] = useState({
        loading: false,
        ranklists: null,
    });
    
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((ranklists) => {
                setAppState({ loading: false, ranklists: ranklists });
            });
    }, [url, country]);
   
    // if no country has been selected, display this landing page and welcome msg
    if (!country) {
        return (
            <main>
                <Jumbotron>

                    <h1 className="display-6">Welcome To The Global Happiness Rankings App!</h1>

                    <p className="lead">Start here with a quick country search:</p>
                    <hr className="my-4" />

                    <Search onChange={setCountry} />

                </Jumbotron>
            </main>
        )
    }

    // after a country has been selected, display this results page
    return (
        <main>
            <Jumbotron>

                <h1 className="display-6">Your Search Results</h1>
                <hr className="mt-4" />

                <Search onChange={setCountry} />

                <p className="display-6">Results For {country} :</p>

                <ListLoading ranklists={appState.ranklists} />

            </Jumbotron>

        </main>
    )
}

