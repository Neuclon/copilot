import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import FormDialog from '../FormDialog/FormDialog';

export default function FABFeedBack() {
  return (
    <Box    style={{
      position: "fixed",
      bottom: "5px",
      right: "5px",
      width: "120px",
      marginTop: "20px",
      height: "40px",
      backgroundColor: "cornflowerblue",
      borderRadius: "25px",
      cursor: "pointer"
  }}>
      <Fab variant="extended" style={{
     
      backgroundColor: "cornflowerblue",
      
  }}>
         <FormDialog></FormDialog>
      </Fab>
    </Box>
  );
}