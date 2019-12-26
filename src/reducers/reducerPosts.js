import _ from 'lodash';
import {
  FETCH_POSTS,
  FETCH_POST,
  CREATE_POSTS,
  DELETE_POST
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      // transform action.payload.data =
      // [{id: 2, title: "hi"}, {id: 5, title: "there"}]
      // to {2: {"id": 2, title: "hi"}, 5: {id: 5, title: "there"}}
      // the following function from lodash doest it
      //  _.mapKeys(array, property)
      return _.mapKeys(action.payload.data, 'id');
    case FETCH_POST:
      // take existing state and add object
      // as element to sate object
      // Done with es5 code
      // const post = action.payload.data;
      // const newState = {...state};
      // newState[post.id] = post;
      // return newState;
      // with es6, same as above comments
      return { ...state, [action.payload.data.id]: action.payload.data };
    case DELETE_POST:
      // look at state object and if object has a key
      // of action.payload and return a new state
      // without that element
      return _.omit(state, action.payload);
    default:
      return state;
  }
}
