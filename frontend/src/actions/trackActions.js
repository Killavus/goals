import * as types from './actionTypes';



export function loadTracksSuccess(tracks){
  return {
    type: types.LOAD_TRACKS_SUCCESS, tracks
  };
}



export function loadTracks() {
  return function (dispatch) {
    return fetch('http://localhost:3000/tracking', {method: 'GET', mode: 'cors'}).then(function (response) {
      return response.json()
    })
        .then(tracks => {
        dispatch(loadTracksSuccess(tracks));
      }).catch(error => {
        throw(error);
      });
  };
}


