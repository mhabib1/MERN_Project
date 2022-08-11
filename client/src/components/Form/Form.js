import React, { useState } from 'react';
import { TextField, Typography, Button, Paper } from '@material-ui/core'
import useStyles from './styles'

const Form = () => {
    const classes = useStyles();
    const [postData, setPostData] = useState({
        creator: "", title: "", message: "", tags: "", selectedFile: ""
    })
    const handleSubmit = () => {

    };

    return (
        <Paper className = {classes.paper}>
        <form autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit}>
        <Typography variant='h6'>Creating memories</Typography>
        <TextField 
        name='creator' 
        variant='outlined' 
        label ='Creator' 
        fullWidth value={postData.creator} 
        onChange={null}/>
        </form>
        </Paper>
    );
}
// hellloo from the other side

export default Form;