import React from 'react'
import './cssBoiler.css'
import './Skills.css'
import { useParallax } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

function Skills({skillName , pName , desc , imgSrc , srcCode ,liveCode }) {

  const { ref } = useParallax({ speed: 20 });

  return (
    <>
    <div className="cen-skill" id='skills-sec'>
    <div className="flex-skills" >
      <Parallax translateX={['-10px', '30px']}>
      <div className="desc-sec">
        <h2 className='skill-name'>{skillName}</h2>
        <h1 className='skill-heading'>{pName}</h1>
        <h1 className='skill-desc'>{desc}</h1>
        <div className="btns-proj">
     <a href={srcCode} target='_blank'>   <button className='hover-b'> <i className="fa-solid fa-code icons"></i> source code</button></a>
     <a href={liveCode} target='_blank'>   <button className='hover-b'> <i className="fa-solid fa-desktop icons"></i> view live</button></a>
        </div>
    </div>
      </Parallax>
    
    <div className="right-img">
        <div className="img-div" ref={ref}>
        
          <div className="topImgA" ></div>
         
          
            <div className="topImgB" ></div>
        <div className="skill-image" style={{background: `url(${imgSrc})` , backgroundPosition: 'center' , backgroundRepeat: 'no-repeat' , backgroundSize: 'cover'}}></div>
        </div>
       
    </div>
    </div>
  
    </div>
    
    </>
  )
}

export default Skills