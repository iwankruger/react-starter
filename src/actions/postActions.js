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
