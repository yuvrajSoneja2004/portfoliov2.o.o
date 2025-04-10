import React from 'react'
import './cssBoiler.css'
import './Section.css'
import SkillsSection from './SkillsSection'
import { useParallax } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import MorSkills from './MorSkills';


function Section() {

  const { ref } = useParallax({ speed: -2 });

  return (
    <div className="whole-section" id="abt-me">
      <h1 className="sec-text" ref={ref}>
        A <span>BIT</span> ABOUT ME.
      </h1>

      <Parallax translateY={[-10, 30]}>
        <div className="abt-me-txt-div" data-aos="fade-up">
          <div className="empty"></div>
          <p className="abt-me-txt">
            I'm a full-stack developer who started young and grew fast — from
            building front-end websites at 14 to architecting scalable systems
            with Docker, Kubernetes, Redis, Kafka, and microservices today. One
            of my biggest achievements is building a full-stack YouTube-like
            video platform from scratch. I implemented HLS video streaming with
            Node.js and FFmpeg, cutting video load times by 40%. I also
            integrated Server-Sent Events (SSE) for real-time upload progress
            tracking, which significantly improved user experience. To boost
            engagement, I developed an “Up Next” recommendation algorithm that
            increased average watch time by 15%, and built a custom video player
            with adaptive quality streaming based on network conditions. I focus
            on building fast, reliable, and user-centered systems — no fluff,
            just impact.
          </p>
        </div>
      </Parallax>
      <MorSkills />
      <div className="cen-mor" style={{marginTop: 60}}>
          <h1>My Projects</h1>
        </div>
      <SkillsSection />
    </div>
  );
}

export default Section