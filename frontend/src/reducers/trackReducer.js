import * as types from '../actions/actionTypes';

function trackReducer(state = [], action){
  switch(action.type){
    case types.LOAD_TRACKS_SUCCESS:
      return action.tracks;
    case types.CREATE_TRACK_SUCCESS:
      return state;
    default:
      return state;
  }
}

export default trackReducer;