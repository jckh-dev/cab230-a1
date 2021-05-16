import React, { useEffect, useState } from 'react';
import { Jumbotron } from "reactstrap";
import { AgGridReact } from "ag-grid-react";

// ag-grid CSS imports
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default function Rankings() {
    const url = "http://131.181.190.87:3000/rankings"
    const [rowData, setRowData] = useState([]);

    const columns = [
        { headerName: "Rank", field: "rank", sortable: true, flex: 0.2 },
        { headerName: "Country", field: "country", sortable: true, filter: true, flex:1},
        { headerName: "Score", field: "score", sortable: true, flex: 0.5 },
        { headerName: "Year", field: "year", filter: "agNumberColumnFilter", flex: 0.5 }
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
        <Jumbotron className="customJumbo">

            <h1 className="display-6 pb-2 pl-2">Global Rankings</h1>

            <p className="lead pl-2">Use the filtering options to drill down to the data you want.</p>

            {/* grid display of nation rankings */}
            <div
                className="ag-theme-alpine"
                style={{
                    height: "100vh",
                }}>
                <AgGridReact
                    defaultColDef={{ resizable: true }}
                    columnDefs={columns}
                    rowData={rowData}
                    pagination={true}
                    paginationPageSize={25}
                />
            </div>

        </Jumbotron>
    )
}