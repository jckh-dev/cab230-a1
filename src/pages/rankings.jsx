import React, { useEffect, useState } from 'react';
import { Jumbotron, Container } from "reactstrap";
import { AgGridReact } from "ag-grid-react";

// ag-grid CSS imports
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default function Rankings() {
    const url = "http://131.181.190.87:3000/rankings"
    const [rowData, setRowData] = useState([]);

    const columns = [
        { headerName: "Rank", field: "rank", sortable: true },
        { headerName: "Country", field: "country", sortable: true, filter: true },
        { headerName: "Score", field: "score", sortable: true },
        { headerName: "Year", field: "year", filter: "agNumberColumnFilter" }
    ]

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(nations => 
            nations.map(nation => {
                return {
                    rank: nation.rank,
                    country: nation.country,
                    score: nation.score,
                    year: nation.year
                };
            })
        )
        .then(nations => setRowData(nations));
    }, []);

        return (

            <Container>
                <Jumbotron>

                    <h1>NATION RANKINGS</h1>
                    
                    {/* grid display of nation rankings */}
                    <div
                        className="ag-theme-alpine"
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
                    </div>

                </Jumbotron>
            </Container>
        )
    }