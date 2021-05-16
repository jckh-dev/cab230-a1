import { useState } from 'react';
import { AgGridReact } from "ag-grid-react";
import { Container, Jumbotron, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import Search from "../components/search"

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default function FactorComp() {

    const token = localStorage.getItem("token");
    const [error, setError] = useState(null);
    const [rowData, setRowData] = useState([]);
    const [country, setCountry] = useState(null);
    const [year, setYear] = useInput(2015);
    const [limit, setLimit] = useInput(null);
    const [url, setUrl] = useState(null);
    const APIUrl = `http://131.181.190.87:3000/factors/${year}`;

    const columns = [
        { headerName: "Rank", field: "rank", sortable: true,  flex:1 },
        { headerName: "Country", field: "country", sortable: true,  flex:1, filter: true },
        { headerName: "Score", field: "score", sortable: true,  flex:1 },
        { headerName: "Economy", field: "economy", filter: "agNumberColumnFilter", sortable: true,  flex:1 },
        { headerName: "Family", field: "family", filter: "agNumberColumnFilter", sortable: true,  flex:1 },
        { headerName: "Health", field: "health", filter: "agNumberColumnFilter", sortable: true,  flex:1 },
        { headerName: "Freedom", field: "freedom", filter: "agNumberColumnFilter", sortable: true,  flex:1 },
        { headerName: "generosity", field: "generosity", filter: "agNumberColumnFilter", sortable: true,  flex:1 },
        { headerName: "trust", field: "trust", filter: "agNumberColumnFilter", sortable: true, flex:1 },
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
        <Jumbotron className="customJumbo">

            <h1 className="display-6">InDepth Global Rankings</h1>
            <p className="lead">Use these filters to find the full breadth of factors and indepth data that makes up the mechanics of a nations overall score.</p>
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
                <Button type="submit" color="info" className="mb-3" onClick={checkURL} block>Submit Search</Button>
            </Form>

            {/* grid display of nation rankings */}
            <Container
                className="ag-theme-alpine p-0 rounded-5"
                style={{
                    height: "100vh",
                    width: "auto"
                }}>
                <AgGridReact
                    defaultColDef={{ resizable: true }}
                    columnDefs={columns}
                    rowData={rowData}
                    pagination={true}
                    paginationPageSize={25}
                />
            </Container>
            
        </Jumbotron>
    )
};