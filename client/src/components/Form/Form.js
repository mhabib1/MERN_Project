import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import { TextField, Typography, Button, Paper } from '@material-ui/core'
import useStyles from './styles'
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';

const Form = () => {
    const [postData, setPostData] = useState({creator: "", title: "", message: "", tags: "", selectedFile: ""  });

    //  we have a value
    //  we need a way to update that value

    const classes = useStyles();
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
        <TextField name='creator' variant='outlined' label ='Creator' fullWidth placeholder='Enter your creator here' value={postData.creator} onChange={(e) => setPostData({...postData, creator : e.target.value})}/> {/* Different than the video */}
        <TextField name='title' variant='outlined' label ='Title' fullWidth placeholder='Enter your title here' value={postData.title} onChange={(e) => setPostData({ ...postData, title : e.target.value})}/> {/* Different than the video */}
        <TextField name='message' variant='outlined' label ='Message' placeholder='Enter your message here' fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message : e.target.value})}/> {/* Different than the video */}
        <TextField name='tags' variant='outlined' label ='Tags' fullWidth placeholder='Enter your tags here' value={postData.tags}onChange={(e) => setPostData({ ...postData, tags : e.target.value})}/>
        <div className={classes.fileInput}><FileBase type = "file" multiple = {false} onDone = { ({base64}) => setPostData({ ...postData, selectedFile: base64 })}/></div>
        <Button className={classes.buttonSubmit} variant= 'container' color='primary' size='large' type='submit' fullWidth>Submit</Button>
        <Button  variant= 'contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
        </form>
        </Paper>
    );
}

export default Form;