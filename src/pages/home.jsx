import React from 'react';
import {
    Jumbotron,
    Button,
    Container
} from "reactstrap";

 export default function Home() {
    return (

    <main>
        <Container>
            <Jumbotron>
                <h1 className="display-6">Do a quick search for country rankings</h1>
                <p className="lead">Filter your search via country, year or both</p>
                <hr className="my-2" />
                <p>Make your selections here:</p>
                <p className="lead">
                    <Button color="primary">Learn More</Button>
                </p>
            </Jumbotron>
        </Container>
            
    </main>
    
    )
}

