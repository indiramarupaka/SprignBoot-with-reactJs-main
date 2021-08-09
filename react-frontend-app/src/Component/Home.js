import React, { Component } from 'react';
// import '../App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
// import { AiFillEdit } from "@react-icons/all-files/ai/AiFillEdit";
// import {MdDelete} from "@react-icons/all-files/md/MdDelete";
import { Grid, Button } from '@material-ui/core'

class Home extends Component {
 
  
  constructor(props) {
    super(props)
    this.state = {
  
      columnDefs: [
        {
          headerName: "Action",
          field: "name",

          cellRendererFramework: (params) => (
            <div>
               {/* <button>
                <AiFillEdit />
              </button> 
              <button>
                 <div>
                  <MdDelete />
                </div> 
              </button> */}
              <div></div>
            </div>
          ),
        },
        { headerName: "ID", field: "id",cellRenderer:"genderCellRenderer",
        cellEditor:"agRichSelectCellEditor", checkboxSelection: true },
        { headerName: "Name", field: "firstName",tooltipField:"email" },
        { headerName: "Name", field: "lastName",tooltipField:"email" },
        { headerName: "Email", field: "email", },
        { headerName: "Body", field: "body" },
      ],
      rowData:[],
  
      defaultColDef: {
        sortable: true,
        editable: true,
        flex: 1, filter: true,
        floatingFilter: true,
        pagination: true,
       
        // floatingFilter:true
      }
    }
  }
  // const actionButton(params){
  //   console.log(params);
  // }
  FetchData= (params) => {
    console.log("grid is ready")
    fetch("http://localhost:8080/userslists").then(resp => resp.json())
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
    this.gridApi.exportDataAsExcel()
  };
  onBtnImport = () => {
    this.gridApi.importDataAsCsv();
  };
  

  
  render() {
    return (
      <div className="App">
       
        <h1 align="center">PSD_SCN DATA FROM API</h1>
        <Grid align="right">
        <Button variant="contained" color="primary">Add user</Button>
      </Grid>
        
        <button onClick={() => this.onBtnExport()}>Export</button>
        <button onClick={() => this.onBtnImport()}>Import</button>
        <div className="ag-theme-alpine" style={{ height: '700px' }}>
          <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
             suppressExcelExport={true}
            defaultColDef={this.state.defaultColDef}
            onGridReady={this.onGridReady}
            enableBrowserTooltips={true}>
          </AgGridReact>
        </div>
      </div>
    );
  }
}
  export default Home;
