import * as types from './actionTypes';



export function loadTracksSuccess(tracks){
  return {
    type: types.LOAD_TRACKS_SUCCESS, tracks
  };
}


export function createTrackSuccess(tracks){
  return {
    type: types.CREATE_TRACK_SUCCESS, tracks
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

export function createTrack(track){
    return function (dispatch, getState) {
      return fetch("http://localhost:3000/tracking/tracks", {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify({'track': track})
      })
          .then( (response) => {
            dispatch(createTrackSuccess());
          }).catch(error => {
        throw(error);
      });
    }
}




