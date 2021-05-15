import { useState, useEffect } from 'react';
import { AgGridReact } from "ag-grid-react";
import { Container, Jumbotron, Col, Row, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import Search from "../components/search"

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default function FactorComp() {

    const token = localStorage.getItem("token");
    const [error, setError] = useState([null]);
    const [rowData, setRowData] = useState([]);
    const [country, setCountry] = useState(null);
    const [year, setYear] = useInput(2015);
    const [limit, setLimit] = useInput(null);
    const [url, setUrl] = useState(null);
    const APIUrl = `http://131.181.190.87:3000/factors/${year}`;

    const columns = [
        { headerName: "Rank", field: "rank", sortable: true },
        { headerName: "Country", field: "country", sortable: true, filter: true },
        { headerName: "Score", field: "score", sortable: true },
        { headerName: "Economy", field: "economy", filter: "", sortable: true },
        { headerName: "Family", field: "family", filter: "", sortable: true },
        { headerName: "Health", field: "health", filter: "", sortable: true },
        { headerName: "Freedom", field: "freedom", filter: "", sortable: true },
        { headerName: "generosity", field: "generosity", filter: "", sortable: true },
        { headerName: "trust", field: "trust", filter: "", sortable: true },
    ]

    function useInput(initialValue) {
        const [value, setValue] = useState(initialValue);

        function handleChange(e) {
            setValue(e.target.value);
        }
        return [value, handleChange];
    }

    function checkURL() {

        if (limit === country) {
            setUrl(`${APIUrl}`);
            console.log("if: " + url);
        }
        else if (limit === null && country != null) {
            setUrl(`${APIUrl}?country=${country}`);
            console.log("2st if: " + url);
        }
        else if (limit != null && country === null) {
            setUrl(`${APIUrl}?limit=${limit}`);
            console.log("3nd if: " + url);
        }
        else {
                setUrl(`${APIUrl}?limit=${limit}&country=${country}`);
                console.log("else: " + url);
        }
        
    }

    function handleSubmit(e) {

        e.preventDefault()

        // console.log("url: " + url);
        // console.log("apiurl: " + APIUrl);
        
        fetch(url, {
            headers: {
                accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(nations =>
                nations.map(nation => {
                    return {
                        key: nation.rank,
                        rank: nation.rank,
                        country: nation.country,
                        score: nation.score,
                        economy: nation.economy,
                        family: nation.family,
                        health: nation.health,
                        freedom: nation.freedom,
                        generosity: nation.freedom,
                        trust: nation.trust
                    };
                })
            )
            .then(nations => setRowData(nations))
            .catch((e) => {
                setError(e);
                console.log(e);
            });
            
    }

    return (
        <Jumbotron>

            <h1>NATION RANKINGS BY FACTOR</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="year">Select Year</Label>
                    <Input type="select" name="select" id="year" value={year} onChange={setYear}>
                        <option>2015</option>
                        <option>2016</option>
                        <option>2017</option>
                        <option>2018</option>
                        <option>2019</option>
                        <option>2020</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="searchLimit">How many records would you like to return?</Label>
                    <Input type="text" name="searchLimit" id="searchLimit" placeholder="......" value={limit} onChange={setLimit} />
                </FormGroup>

                <Search onChange={setCountry} />
                <Button type="submit" color="info" className="mb-3" onClick={checkURL}>SUBMIT SEARCH</Button>
            </Form>
            {/* grid display of nation rankings */}
            <Container
                className="ag-theme-alpine p-0 rounded-5"
                style={{
                    height: "100vh",
                    width: "auto"
                }}>
                <AgGridReact
                    columnDefs={columns}
                    rowData={rowData}
                    pagination={true}
                    paginationPageSize={25}
                />
            </Container>

            {console.log(year, country, limit)}

        </Jumbotron>
    )
};