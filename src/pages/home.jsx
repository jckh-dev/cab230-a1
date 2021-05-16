import React, { useEffect, useState } from 'react';
import {
    Jumbotron,
} from "reactstrap";

import Search from "../components/search";

// components
import RankingsList from "../components/fetchrankings";
import WithListLoading from "../helpers/listloading";

export default function Home() {

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

