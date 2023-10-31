"use client"
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import HowToRegIcon from '@mui/icons-material/HowToReg';   
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
const TimeLine = () => {
  return (
    <div className='mb-[3rem] '>
    <div id='' className='flex justify-center align-center gfg-gradient text-[50px] mb-[3rem] sponsor-main-title font-black'>
        <span>Hackathon Timeline</span>
      </div>
    <Timeline position="alternate" style={{color:"white"}}>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          {/* 9:30 am */}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot style={{background:"forestgreen"}}>
            <HowToRegIcon/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Registrations Open
          </Typography>
          <Typography>23rd of October&apos;23</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          {/* 10:00 am */}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
          <EventAvailableIcon/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Grand Opening Ceremony
          </Typography>
          <Typography>4th of November &apos;23</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          Choose Domains and Implementation Phase
          </Typography>
          <Typography> 4th to 19th November &apos;23</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <EmojiEventsIcon/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          Final Day Of Competition
          </Typography>
          <Typography>23rd November &apos;23</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>

    <div className='flex justify-center text-[#14c941]  '>
      {/* custom button */}
      <a href="/assets/domains.pdf" class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
<span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100 border-6"></span>
<span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
<span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
<span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
<span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
<span class="absolute inset-0 w-full h-full border border-white border-6 rounded-md opacity-10"></span>
<span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full border-8 group-hover:w-56 group-hover:h-56 opacity-5"></span>
<span class="relative">VIEW DOMAINS</span>
</a>

    </div>
    </div>
  )
}

export default TimeLine