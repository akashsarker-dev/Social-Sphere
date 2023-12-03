import React, { useState } from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  InputAdornment,
  Input,
  Typography,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PhotoIcon from '@mui/icons-material/Photo';

const PostOption = () => {
  const [postContent, setPostContent] = useState('');
  const [postImage, setPostImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handlePost = () => {
    setPostContent('');
    setPostImage(null);
    setImagePreview(null);
    // Close the dialog after posting
    handleCloseDialog();
  };

  const handleImageChange = (e) => {
    // Assuming a single file is selected
    const selectedFile = e.target.files[0];
    
    setPostImage(selectedFile);

    // Create a preview URL for the selected image
    const previewURL = URL.createObjectURL(selectedFile);
    setImagePreview(previewURL);
  };

  return (
    <div>
      <IconButton color="primary" onClick={handleOpenDialog}>
        <AddCircleOutlineIcon />
      </IconButton>

      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Create a Post</DialogTitle>
        <DialogContent>
          <DialogContentText>What's on your mind?</DialogContentText>
          <TextField
            fullWidth
            multiline
            rows={3}
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
          {
            !imagePreview &&
          <Input
            type="file" fullWidth margin="normal" startAdornment={
              <InputAdornment position="start">
                <PhotoIcon />
                 </InputAdornment> } onChange={handleImageChange} />
          }
          {imagePreview && (
            <div style={{ marginTop: '8px' }}>
              <Typography variant="body2" color="textSecondary">
                Selected file: {postImage.name}
              </Typography>
              <img
                src={imagePreview}
                alt="Preview"
                style={{ maxWidth: '100%', maxHeight: '200px', marginTop: '8px' }}
              />
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handlePost} color="primary" variant="contained">
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PostOption;
