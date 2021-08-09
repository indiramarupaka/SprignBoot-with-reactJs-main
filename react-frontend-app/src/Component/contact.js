import React, { Component } from 'react';
import '../App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
  
      columnDefs: [
        { headerName: "ID", field: "id" },
        { headerName: "Name", field: "name", },
        { headerName: "Email", field: "email", },
        { headerName: "Body", field: "body" },
      ],
      rowData:[],
  
      defaultColDef: {
        sortable: true,
        editable: true,
        flex: 1, filter: true,
        floatingFilter: true,
        pagination: true
      }
    }
  }
  FetchData= (params) => {
    console.log("grid is ready")
    fetch("https://jsonplaceholder.typicode.com/comments").then(resp => resp.json())
      .then(resp => {
        console.log(resp)
        this.setState({ rowData: resp })
      })
  }

 componentDidMount() {
   this.FetchData()
 }
 
  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  };

  onBtnExport = () => {
    this.gridApi.exportDataAsExcel();
  };

  
  render() {
    return (
      <div className="App">
        <h1 align="center">contact</h1>
        <h3>PSD Details</h3>
        <button onClick={() => this.onBtnExport()}>Export</button>
        <div className="ag-theme-alpine" style={{ height: '700px' }}>
          <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
             suppressExcelExport={true}
            defaultColDef={this.state.defaultColDef}
            onGridReady={this.onGridReady}>
          </AgGridReact>
        </div>
      </div>
    );
  }
}
  export default contact;