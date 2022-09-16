import React from 'react'
import './cssBoiler.css'
import './MorSkills.css'
import { SkillCard } from './SkillCard'
import ReactLogo from './assets/reacticon.svg'
import Tailwind from './assets/tailwind.svg'
import BootstrapIcon from './assets/boot.svg'
import NodeJS from './assets/node.svg'
import ExpressJS from './assets/express.png'
import MongoDB from './assets/mongodb.svg'




function MorSkills() {
  return (
    <div>
    <div className="whole-morSkills"  data-aos="fade-up">
        <div className="cen-mor">
        <h1>Some of my skills</h1>
        </div>
        
        <div className='fullCen' id='skls'>
        <div className="skill-card-div">
            <SkillCard  logo={ReactLogo} title='React JS' desc='I have strong understand of the core concepts of ReactJs such as JSX , events , hooks , form handling , context etc. Most of the time i use ReactJS for projects as it makes JavaScript a lot easier.' />
            <SkillCard  logo={BootstrapIcon} title='Bootstrap' desc='I have used bootstrap 5 on praticing various web apps. Its easy to install and it saves a lot of time. I mainly use it to use its components like navbar , cards , form etc.'/>
            <SkillCard  logo={Tailwind} title='Tailwind CSS' desc='Its my favourite CSS framework as it makes very easy for me to use CSS properties in HTML without switching to CSS file. I use it for the projects for modern look.'/>
            <SkillCard  logo={NodeJS} title='Node JS' desc='After getting intermediate knowledge of front-end technologies , i started learning node.js to also get better at backend level. I have made several small projects with it.'/>
            <SkillCard  logo={ExpressJS} title='Express JS' desc='i learned express.js right after learning node.js as it makes node.js way easier and powerful. I used express.js to make a restful api called favouriteMoviesAPI.'/>
            <SkillCard  logo={MongoDB} title='MongoDB' desc='I am focusing on MERN stack where MongoDB is just part of it. It was simple for me to learn it as its syntex is similar to javascript. I use Mongo Compass and Mongo Sheel at the time of development.'/>
        </div>
        </div>
        
    </div>
    </div>
  )
}

export default MorSkills