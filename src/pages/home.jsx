import React, { useEffect, useState, setState } from 'react';
import {
    Jumbotron,
    Button,
    Container,
    Row,
    Form
} from "reactstrap";

import Search from "../components/search";

// components
import RankingsList from "../helpers/fetchrankings";
import WithListLoading from "../helpers/listloading";
// import Nation from "../components/nation";
// import { useRankings } from "../helpers/api"

export default function Home() {

    const ListLoading = WithListLoading(RankingsList);
    const [country, setCountry] = useState(null);

    const [appState, setAppState] = useState({
        loading: false,
        ranklists: null,
        });    
    
    const url = `http://131.181.190.87:3000/rankings?country=${country}`

        useEffect(() => {
                // setAppState({ loading: true });
                // const url = `http://131.181.190.87:3000/rankings?country=australia`;
                fetch(url)
                    .then((res) => res.json())
                    .then((ranklists) => {
                        setAppState({ loading: false, ranklists: ranklists });
                    });
            }, [country]);
            
    return (

        // make this into a form to properly search and display??? 
        // Use agGrid to display the resulting data?
        
        <main>
            <Container fluid="true">
                <Row className="justify-content-center">
                    
                    <Jumbotron>
                    <h1 className="display-6">Do a quick search for country rankings</h1>
                    <p className="lead">Filter your search via country, year or both</p>
                    <hr className="my-2" />
                    <p>Make your selections here:</p>

                    {/* search bar with async typing filter */}
                    {/* need to pass 'selectedValue' of Search to setCountry */}
                    <Form>

                        <Search onChange={setCountry}/>
                            
                        <Button color="primary">Search!</Button>
                                            
                    </Form>
                   

                    <div className='ranklist-container'>
                        
                        {/* extend to take the search parameters from the search bar (country and date) */}
                        <h4>Results:</h4>
                        
                        {/* first way of rendering a dummy list for the home page and it works... unsure if I could extend the code to take any parameters from the search bar results. extend to take the search parameters from the search bar (country and date) */}
                        <ListLoading isLoading={appState.loading} ranklists={appState.ranklists} />
                    
                        
                        {/* process from the prac worksheet incorporating api.js and nation.js. does not produce any output */}

                        {/* {nations.map((nation) =>(
                            <Nation
                            rank={nation.rank}
                            country={nation.country}
                            score={nation.score}
                            year={nation.year}
                            />
                        ))} */}

                    </div>

                </Jumbotron>
                </Row>
                
                
            </Container>

        </main>

    )
}

