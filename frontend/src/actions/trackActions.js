import * as types from './actionTypes';

export function loadTracksSuccess(tracks){
  return {
    type: types.LOAD_TRACKS_SUCCESS, tracks
  };
}

const tracks = [{
    id:1,
    calories:1250,
    lastMeas:'11.09.2017'
  },
    {
      id:2,
      calories:2000,
      lastMeas:'27.09.2017'
    },
    {
      id:3,
      calories:1000,
      lastMeas:'30.09.2017'
    }
  ]


export function loadTracks(){
  return function(dispatch){
    dispatch(loadTracksSuccess(tracks));
  };
}