import axios from 'axios';

import { FETCH_POSTS, FETCH_POST, CREATE_POSTS, DELETE_POST } from './types';
import { ROOT_URL, API_KEY } from '../settings';

export const fetchPosts = () => {
  return async dispatch => {
    try {
      const request = await axios.get(`${ROOT_URL}/posts${API_KEY}`);
      console.log('GET POSTS ', request);
      dispatch({ type: FETCH_POSTS, payload: request });
    } catch (error) {
      // todo dispatch error action
      dispatch({ type: FETCH_POSTS, payload: null });
    }
  };
};

export const fetchPost = id => {
  return async dispatch => {
    try {
      const request = await axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
      console.log('GET POSTS ', request);
      dispatch({ type: FETCH_POST, payload: request });
    } catch (error) {
      // todo dispatch error action
      dispatch({ type: FETCH_POST, payload: null });
    }
  };
};

export const deletePost = (id, callback) => {
  axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then(() => {
    callback();
  });

  return {
    type: DELETE_POST,
    payload: id
  };
};
