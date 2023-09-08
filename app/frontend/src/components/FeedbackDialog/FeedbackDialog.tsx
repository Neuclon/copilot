import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

interface FeedbackDialogProps {
  open: boolean;
  onClose: () => void;
}

const FeedbackDialog: React.FC<FeedbackDialogProps> = ({ open, onClose }) => {
  const [feedback, setFeedback] = useState('');

  const handleClose = () => {
    onClose();
    setFeedback('');
  };

  const handleSubmit = () => {
    // Perform action with submitted feedback
    console.log('Submitted feedback:', feedback);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Provide Feedback</DialogTitle>
      <DialogContent>
        <DialogContentText>
          We value your feedback. Please let us know what you think.
        </DialogContentText>
        <TextField
          autoFocus
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          label="Feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FeedbackDialog;
