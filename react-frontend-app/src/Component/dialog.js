import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';

export default function FormDialog({open,handleClose,data,onChange,handleChange}) {
    const{id,name,email}=data

    
  
  return (
    <div>
     
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Add User"}</DialogTitle>
        <DialogContent>
          <form>
              <TextField id="id" placeholder="enter id" value={id} onChange={e=>onChange(e)} label="Id" variant="outlined" margin="dense" fullWidth />
              <TextField id="name" placeholder="enter name" value={name} onChange={e=>onChange(e)} label="Name" variant="outlined" margin="dense" fullWidth />
             
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="secondary">
            Cancel
          </Button>
          <Button variant="outlined" onClick={()=>handleChange()}  autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
