import React from 'react';
import TrackListRow from './TrackListRow';

const TrackList = ( {tracks}) => {
  return (
      <table className="table">
        <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Calories</th>
          <th>Last Measurement</th>
        </tr>
        </thead>
        <tbody>
        {tracks.map(track =>
            <TrackListRow key={track.id} track={track}/>
        )}
        </tbody>
      </table>
  );
};


export default TrackList;