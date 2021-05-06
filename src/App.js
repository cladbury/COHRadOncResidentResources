import React, { useMemo, useState, useEffect } from "react";

import Table from "./Table";

function App() {

  /* 
    - Columns is a simple array right now, but it will contain some logic later on. It is recommended by react-table to memoize the columns data
    - Here in this example, we have grouped our columns into two headers. react-table is flexible enough to create grouped table headers
  */
  const columns = useMemo(
    () => [
      {
        // first group - TV Show
        Header: "Disease Sites",
        // First group columns
        columns: [
          {
            Header: "Disease Site",
            accessor: "score"
          },
          {
            Header: "Article Link",
            accessor: "show.name"
          },
          {
            Header: "PDF",
            accessor: "show.type"
          }
        ]
      },
    ],
    []
  );

  const data = [
    {
      "score": 17.592657,
      "show": {
        "id": 44813,
        "url": "http://www.tvmaze.com/shows/44813/the-snow-spider",
        "name": "The Snow Spider",
        "type": "Scripted",
        "language": "English",
        "genres": [
          "Drama",
          "Fantasy"
        ],
        "status": "In Development",
        "runtime": 30,
        "premiered": null,
        "officialSite": null,
        "schedule": {
          "time": "",
          "days": [
  
          ]
        },
      }
    }
  ]

  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;