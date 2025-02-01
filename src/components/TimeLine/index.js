import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default function OppositeContentTimeline() {
  return (
    <Timeline >
      <TimelineItem>
        <TimelineOppositeContent color="blueviolet"style={{fontSize:"2rem",fontFamily:"cursive",fontWeight:"800"}}>
          SDE Intern (January 2025-June 2025)
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{fontSize:"2rem",fontFamily:"cursive",fontWeight:"800"}}>
          Amazon (HYD13)
          </TimelineContent>
      </TimelineItem>
      <br/><br/><br/>
      <TimelineItem>
        <TimelineOppositeContent color="blueviolet"style={{fontSize:"2rem",fontFamily:"cursive",fontWeight:"800"}}>
          SDE Intern (May 2024-July 2024)
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{fontSize:"2rem",fontFamily:"cursive",fontWeight:"800"}}>National Informatics Centre</TimelineContent>
      </TimelineItem>
      <br/>
      <br/>
      <br/>
    
      <TimelineItem>
        <TimelineOppositeContent color="blueviolet" style={{fontSize:"2rem",fontFamily:"cursive",fontWeight:"800"}}>
          Web Developement Intern (January 2023-March 2023)
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{fontSize:"2rem",fontFamily:"cursive",fontWeight:"800"}}>Viand Research Private Limited</TimelineContent>
      </TimelineItem>
    
    </Timeline>
  );
}
