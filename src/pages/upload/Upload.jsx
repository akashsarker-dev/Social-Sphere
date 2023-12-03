import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Fab, TextareaAutosize, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="primary" p='2' onClick={handleOpen}>
      <Fab size='small' color="primary" aria-label="add">
        <AddIcon />
        </Fab>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description">
        <Box sx={{ ...style, width: 400}}>
          <Typography variant='h6' py={2} textAlign={'center'}>Create a New Post</Typography>
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Type something here..."
            minRows={3}
            maxRows={10}
            style={{
                fontSize:'15px',
                width: '100%',
                border: 'none', 
                outline: 'none', 
                resize: 'none', }} />
          <Button sx={{ mx: 'auto' , width:'100%' }} component="button" variant="contained">
            Post
        </Button>
        </Box>
      </Modal>
    </div>
  );
}