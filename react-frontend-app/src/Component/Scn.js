import React from "react";
// import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { AgGridReact } from "ag-grid-react";
// /import Icon from "react-crud-icons";
import { AiFillEdit } from "@react-icons/all-files/ai/AiFillEdit";
import { MdDelete } from "@react-icons/all-files/md/MdDelete";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
function Scn() {
  const actionButton = (params) => {
    console.log(params);
  };
  let gridApi;
  const columnDefs = [
    {
      headerName: "Action",
      field: "id",

      cellRendererFramework: (params) => (
        <div>
          <button onClick={() => actionButton(params)}>
            <AiFillEdit />
          </button>
          <button>
            <div>
              <MdDelete />
            </div>
          </button>
          <div></div>
        </div>
      ),
    },

    { headerName: "Name", field: "name" },
    {
      headerName: "Age",
      field: "age",
      cellStyle:(params)=>(params.value>18?{borderLeft:"4px green solid"}:{borderLeft:"4px red solid"}),
      // cellClass: (params) => (params.value > 18 ? "moreThan18" : "lessThan18"),
    },
    { headerName: "Birth Year", field: "birthYear" },
    { headerName: "Phone Number", field: "phoneNumber" },
  ];
  const rowData = [
    { name: "Rahul", age: 19, phoneNumber: 9876543210, birthYear: 2001 },
    { name: "David", age: 17, phoneNumber: 9827654310, birthYear: 2003 },
    { name: "Dan", age: 25, phoneNumber: 9765438210, birthYear: 1995 },
    { name: "Rahul", age: 19, phoneNumber: 9876543210, birthYear: 2001 },
    { name: "David", age: 17, phoneNumber: 9827654310, birthYear: 2003 },
    { name: "Dan", age: 25, phoneNumber: 9765438210, birthYear: 1995 },
    { name: "Rahul", age: 19, phoneNumber: 9876543210, birthYear: 2001 },
    { name: "David", age: 17, phoneNumber: 9827654310, birthYear: 2003 },
    { name: "Dan", age: 25, phoneNumber: 9765438210, birthYear: 1995 },
    { name: "Rahul", age: 19, phoneNumber: 9876543210, birthYear: 2001 },
    { name: "David", age: 17, phoneNumber: 9827654310, birthYear: 2003 },
    { name: "Dan", age: 25, phoneNumber: 9765438210, birthYear: 1995 },
  ];
  const defaultColDef = {
    sortable: true,
    editable: true,
    flex: 1,
    filter: true,
    floatingFilter: true,
    pagination: true,
    enablePivot: true
  }
  
  const onGridReady = (params) => {
    gridApi = params.api;
  };
  const onExportClick = () => {
    gridApi.exportDataAsExcel();
  };

//   const onAddRow = () => {
    
//     gridApi.updateRowData({
//       add: [{ name: 'BMW', age: 'S2', phoneNumber: '63000' }]
//          });
// }
  return (
    <div className="App">
      <h1 align="center"> Home SCN</h1>
      <button className="btn btn-primary mb-3" >Add Row</button>
      <h3>Scn Details</h3>
      <div>
      <Dialog
        // open={open}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"></DialogTitle>
        </Dialog>
        </div>
      <button onClick={() => onExportClick()}>Export</button>
      <div className="ag-theme-alpine" style={{ height: "800px" }}>
        <AgGridReact
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={50}
          rowData={rowData}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
        ></AgGridReact>
      </div>
    </div>
  );
}
export default Scn;
