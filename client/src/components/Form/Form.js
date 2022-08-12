import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import { TextField, Typography, Button, Paper } from '@material-ui/core'
import useStyles from './styles'
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';

const Form = () => {
    const classes = useStyles();
    const [postData, setPostData] = useState({creator: "", title: "", message: "", tags: "", selectedFile: ""});
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault(); 
        dispatch(createPost(postData));
    };
    
    const clear = () => {

    };

    return (
        <Paper className = {classes.paper}>
        <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant='h6'>Creating memories</Typography>
        <TextField name='creator' variant='outlined' label ='Creator' fullWidth value={postData.creator} onChange={(e) => setPostData({creator : e.target.value, ...postData})}/> {/* Different than the video */}
        <TextField name='title' variant='outlined' label ='Title' fullWidth value={postData.title} onChange={(e) => setPostData({title : e.target.value, ...postData})}/> {/* Different than the video */}
        <TextField name='message' variant='outlined' label ='Message' fullWidth value={postData.message} onChange={(e) => setPostData({message : e.target.value, ...postData})}/> {/* Different than the video */}
        <TextField name='tags' variant='outlined' label ='Tags' fullWidth value={postData.tags} onChange={(e) => setPostData({tags : e.target.value, ...postData})}/> {/* Different than the video */}
        <div className={classes.fileInput}><FileBase type = "file" multiple = {false} onDone={({base64}) => setPostData({selectedFile: base64, ...postData})}/></div>
        <Button className={classes.buttonSubmit} variant= 'container' color='primary' size='large' type='submit' fullWidth>Submit</Button>
        <Button  variant= 'contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
        </form>
        </Paper>
    );
}
// hellloo from the other side

export default Form;