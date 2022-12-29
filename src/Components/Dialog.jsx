import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import  {addProduct} from '../Admin/API/adminProducts'
import {useDispatch,useSelector} from 'react-redux'
import { CircularProgress } from '@mui/material';


export default function DraggableDialog({handleRemove,productID,admin,handleInputs}) {
  const dispatch = useDispatch()
  const {addProduct_loading}= useSelector(state=>state.admin)
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button  onClick={handleClickOpen}>
       { admin?"Create":<DeleteIcon/>}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        // PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
        { admin?`Add Item`
          :`Remove Item`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          { admin?`Are you sure you want to add this item?`
          :`Are you sure you want to remove this item?`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          {admin ?<Button onClick={()=> addProduct(dispatch,handleInputs,setOpen)}>{ addProduct_loading === true? <CircularProgress size={30}/>:"ADD"}</Button>
            :<Button onClick={()=>handleRemove(productID,dispatch,setOpen)}>Remove</Button>}
        </DialogActions>
      </Dialog>
    </div>
  );
}
