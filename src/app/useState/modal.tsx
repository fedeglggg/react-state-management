import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState, Key } from 'react';

export default function AlertDialog({ rows, setRows }: { rows: any[], setRows: Function }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log("Rendered Modal")

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Rows"}
        </DialogTitle>
        <DialogContent>
          {rows.map((node: any, index:Key) => {
            return <DialogContentText key={index} id="alert-dialog-description">
              <button key={index} onClick={() => setRows((currentRows:any) => 
                currentRows.filter((currentRow:any) => node.id !== currentRow.id))}> 
                Remove 
              </button>
              {" "}
              {node.id}
              {" "}
              {node.firstName ? 
                `${node.firstName} - ${node.lastName}` 
                : node.lastName}
          </DialogContentText>
          })}
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}