import React from 'react';
import './cssBoiler.css';
import Skills from './Skills';
import Tech from './Tech';
import Pro1 from './assets/pro1.png';
import Pro2 from './assets/pro2.png';
import Pro3 from './assets/pro3.png';
import Pro4 from './assets/pro4.png';
import Pro5 from './assets/Pro5.png';

function SkillsSection() {
  return (
   
    <>
     <Skills 
        skillName='MERN + Google Sheets API' 
        pName='BrewTrack – Coffee Inventory CMS' 
        desc='A role-based inventory management CMS powered by Google Sheets API. Enables real-time sync, secure access with JWT, and cost tracking with seamless UI.'
        imgSrc={Pro1}
        srcCode='https://github.com/yuvrajSoneja2004/coffee'
        liveCode='https://coffee-test-nu.vercel.app/' 
      />

      <Skills 
        skillName='Node.js + HLS + Docker' 
        pName='JagStream – Video Streaming App' 
        desc='A full-featured video platform with HLS streaming, live upload progress via SSE, and smart recommendations. Built using React , Node.js, PostgreSQL, FFmpeg, and Docker.'
        imgSrc={Pro1}
        srcCode='https://github.com/yuvrajSoneja2004/That-Video-Streaming-App'
        // liveCode='https://jagstream.netlify.app/'
      />

      <Skills 
        skillName='React + Socket.io' 
        pName='Ask Wisdom – Social Community App' 
        desc='A community-driven platform with Communities (like Reddit), media uploads, and post interactions. Built with Node.js , Socket.io, Multer, and a responsive React UI.'
        imgSrc={Pro1}
        srcCode='https://github.com/yuvrajSoneja2004/ask-wishdom'
        liveCode='https://ask-wishdom-client.netlify.app/'
      />
     <Tech />
     
    
    </>
  )
}

export default SkillsSection