import React, { useState } from "react";

import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

function Supplier() {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);

  const [rowData, setRowData] = useState([
    { id: 1, name: "Neeraj", email: "neeraj2020@gmail.com", dob: "23/01/1996" },
    { id: 2, name: "Raj", email: "raj@gmail.com", dob: "08/07/1996" },
    { id: 3, name: "Mayank", email: "mayank@gmail.com", dob: "09/09/1964" },
    { id: 5, name: "Vishal", email: "vk462@gmail.com", dob: "15/01/2020" },
    { id: 6, name: "Neeraj", email: "neeraj2020@gmail.com", dob: "23/01/1996" },
    { id: 7, name: "Raj", email: "raj@gmail.com", dob: "08/07/1996" },
    { id: 8, name: "Mayank", email: "mayank@gmail.com", dob: "09/09/1964" },
    { id: 9, name: "Vishal", email: "vk462@gmail.com", dob: "15/01/2020" },
    {
      id: 10,
      name: "Neeraj",
      email: "neeraj2020@gmail.com",
      dob: "23/01/1996",
    },
    
    { id: 16, name: "Mayank", email: "mayank@gmail.com", dob: "09/09/1964" },
    { id: 17, name: "Vishal", email: "vk462@gmail.com", dob: "15/01/2020" },
  ]);
  const columnDefs = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name" },
    { field: "email", headerName: "Email" },
    { field: "dob", headerName: "Date of Birth" },
  ];
  const searchDivStyle = { backgroundColor: "#dedede", padding: 1 };
  const searchStyle = {
    width: "10%",
    padding: "1px 2px",
    borderRadius: 20,
    outline: 0,
    border: "2px #68bf40 solid",
    fontSize: "100%",
  };
  function onGridReady(params) {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  }
  const onFilterTextChange = (e) => {
    gridApi.setQuickFilter(e.target.value);
  };

  const handleChange = () => {
    fetch("http://localhost:8080/userslist", {
      method: "POST",
    })
      .then((resp) => resp.json())
      .then((resp) => console.log(resp));
  };

  return (
    <div>
      <div style={searchDivStyle}>
        <input
          type="search"
          style={searchStyle}
          onChange={onFilterTextChange}
          placeholder="search"
        />
      </div>
      <div className="ag-theme-alpine" style={{ height: 800 }}>
        <AgGridReact
          onGridReady={onGridReady}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={{ flex: 1 }}
        />
      </div>
    </div>
  );
}

export default Supplier;
