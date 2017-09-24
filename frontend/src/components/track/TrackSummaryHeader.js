import React from 'react'
import {Panel, Button} from 'react-bootstrap';

export const TrackSummaryHeader = ({trackHeader, style}) => {
    return(
        <Panel footer='MARCIN PEDAł' style={style}>
         <h1>CHUJ</h1>
        </Panel>
    )
};

export const TrackColorPanel = ({trackId, style}) => {
    var colors = '#'+(Math.random()*0xFFFFFF<<0).toString(16);

    return(
        <Panel style={Object.assign({}, style, {backgroundColor: colors})}>
          <br />
        </Panel>
    )
};

export const TrackSummaryChart = ({trackChart, style}) => {
    return(
        <Panel style={style}>
          Tu Kurwa jakis chart powinien byc
        </Panel>
    )
};

export const TrackGoalsSummary = ({trackGoalsSummary, style}) => {
    return(
        <Panel style={style}>
          GOALS
        </Panel>
    )
};

