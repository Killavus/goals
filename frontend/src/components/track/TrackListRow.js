import React from 'react';
import {TrackSummaryHeader, TrackGoalsSummary, TrackColorPanel, TrackSummaryChart} from "./TrackSummaryHeader";
import {Row,Col} from 'react-bootstrap';
import TableHeightHack from '../shared/tableHeightHack';


const TrackListRow = ( {track} ) => {
  return (
    <TableHeightHack>
       <TrackSummaryHeader trackHeader={track}/>
       <TrackColorPanel trackId={track.id}/>
       <TrackSummaryChart trackChart={null}/>
       <TrackGoalsSummary trackGoalsSummary={null}/>
    </TableHeightHack>
  );
};



export default TrackListRow;