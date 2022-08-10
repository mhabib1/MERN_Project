import {combineReducers} from 'redux';

import posts from './posts';

export function giantReducer() {
    return combineReducers({
        posts
    });
};
