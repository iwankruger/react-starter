import { combineReducers } from 'redux';
import PostsReducer from './reducerPosts';

export default combineReducers({ posts: PostsReducer });
