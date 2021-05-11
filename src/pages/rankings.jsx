import React, { useEffect, useState } from 'react';
import { Jumbotron, Container } from "reactstrap";
import { AgGridReact } from "ag-grid-react";

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


// components
// import { getRankings } from "../helpers/getRankings";






export default function Rankings() {

    const [rowData, setRowData] = useState([]);

    const columns = [
        { headerName: "Rank", field: "rank", sortable: true },
        { headerName: "Country", field: "country", sortable: true, filter: true },
        { headerName: "Score", field: "score", sortable: true },
        { headerName: "Year", field: "year", filter: "agNumberColumnFilter" }
    ]

        return (

            <Container>
                <Jumbotron>

                    <h1>NATION RANKINGS</h1>
                    
                    <div
                        className="ag-theme-alpine"
                        style={{
                            height: "auto",
                            width: "auto"
                        }}>
                        <AgGridReact
                            columnDefs={columns}
                            rowData={rowData}
                            pagination={true}
                            paginationPageSize={10}
                        />
                    </div>

                </Jumbotron>
            </Container>
        )
    }