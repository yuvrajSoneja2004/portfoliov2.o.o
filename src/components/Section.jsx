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
    <div className='whole-section' id='abt-me'>
    
     <h1 className='sec-text' ref={ref}>A <span>BIT</span> ABOUT ME.</h1>
     
      
      
       <Parallax translateY={[-10, 30]} >
       <div className="abt-me-txt-div"  data-aos="fade-up">
            <div className="empty"></div>
            <p className="abt-me-txt">I'm a 12th pass out. I've always been fond of computers,technology and the freedom it always gives an individual to create new things. At the age of 14 ,i started taking few computer courses and decided i wanted to create a career in this field. I've worked upon HTML,CSS , JavaScript and React.js which enabled me to create front-end websites. Currently i'm working upon Node.js and Express.js.</p>
        </div>
       </Parallax>
       <MorSkills />
        <SkillsSection  />
        
        
    </div>
  )
}

export default Section