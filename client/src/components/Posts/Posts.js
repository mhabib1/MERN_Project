import React from 'react';
import Post from './Post/Post'
import useStyles from './styles'

const Posts = () => {
    const classes = useStyles();
    return (
        <React.Fragment className={classes.something}>
        <Post/>
        <Post/>
        </React.Fragment>
    );
}

export default Posts;