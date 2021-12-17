import React, { Component } from "react";
// import '../App.css';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

// import { Grid, Button } from "@material-ui/core";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        {headerName: "ID",field: "id"},
        { headerName: "Name", field: "firstName"},
        { headerName: "Name", field: "lastName"},
        { headerName: "Email", field: "email" },
        { headerName: "Body", field: "body" },
      ],
      rowData: [],

      defaultColDef: {
        sortable: true,
        editable: true,
        flex: 1,
        filter: true,
        floatingFilter: true,
        pagination: true,

       
      },
    };
  }
  
  FetchData = (params) => {
    console.log("grid is ready");
    fetch("http://localhost:8080/userslist")
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
        this.setState({ rowData: resp });
      });
  };

  componentDidMount() {
    this.FetchData();
  }

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  };

  onBtnExport = () => {
    this.gridApi.exportDataAsExcel();
  };
  onBtnImport = () => {
    this.gridApi.importDataAsCsv();
  };

  render() {
    return (
      <div className="App">
        <h1 align="center"> DATA FROM API</h1>
        {/* <Grid align="right">
          <Button variant="contained" color="primary">
            Add user
          </Button>
        </Grid> */}

        <button onClick={() => this.onBtnExport()}>Export</button>
        <button onClick={() => this.onBtnImport()}>Import</button>
        <div className="ag-theme-alpine" style={{ height: "700px" }}>
          <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
            suppressExcelExport={true}
            defaultColDef={this.state.defaultColDef}
            onGridReady={this.onGridReady}
            enableBrowserTooltips={true}
          ></AgGridReact>
        </div>
      </div>
    );
  }
}
export default UserList;
