import React from 'react'
import './cssBoiler.css'
import './MorSkills.css'
import { SkillCard } from './SkillCard'
import ReactLogo from './assets/reacticon.svg'
import Tailwind from './assets/tailwind.svg'
import BootstrapIcon from './assets/boot.svg'




function MorSkills() {
  return (
    <div>
    <div className="whole-morSkills"  data-aos="fade-up">
        <div className="cen-mor">
        <h1>Some of my skills</h1>
        </div>
        
        <div className='fullCen' id='skls'>
        <div className="skill-card-div">
            <SkillCard  logo={ReactLogo} title='React JS' desc='I have strong understand of the core concepts of ReactJs such as JSX , events , hooks , form handling , context etc. Most of the time i use ReactJS for projects as i makes JavaScript a lot easier.' />
            <SkillCard  logo={BootstrapIcon} title='Bootstrap' desc='I have used bootstrap 5 on praticing various web apps. Its easy to install and it saves a lot of time. I mainly use it to use its components like navbar , cards , form etc.'/>
            <SkillCard  logo={Tailwind} title='Tailwind CSS' desc='Its my favourite CSS framework as it makes very easy for me to use CSS properties in HTML without switching to CSS file. I use it for the projects for modern look.'/>
        </div>
        </div>
        
    </div>
    </div>
  )
}

export default MorSkills