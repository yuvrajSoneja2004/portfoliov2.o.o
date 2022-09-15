import React from 'react'
import './cssBoiler.css'
import Skills from './Skills'
import Tech from './Tech'
import Pro1 from './assets/pro1.png'
import Pro2 from './assets/pro2.png'
import Pro3 from './assets/pro3.png'

function SkillsSection() {
  return (
   
    <>
    <Skills 
     skillName='React JS' 
     pName='Weather Application made with ReactJS' 
     desc='Weather app made with ReactJS with the help of OpenWeatherMap API. It shows the Temperature , Feel like temperature  and also the humidity. '
      imgSrc={Pro1}
      srcCode='https://github.com/yuvrajSoneja2004/LeeBakesSPA'
      liveCode='https://yuvrajsoneja2004.github.io/weatherApp/'/>
     
      <Skills 
     skillName='React JS' 
     pName='LeeBakes Single Page Website with React.JS' 
     desc='LeeBakes is my project website made with ReactJS , its an SPA(Single Page Application). It has multiple routes and pages and also an 404 Page. I have also used a bit of bootstrap 5.'
     imgSrc={Pro2}
     srcCode='https://github.com/yuvrajSoneja2004/LeeBakesSPA'
     liveCode='https://dreamy-cat-37461a.netlify.app/'
     
       /> 
     <Skills 
     skillName='Bootstrap 5' 
     pName='Lacks , a Photo gallery webapp made using Pixabay API' 
     desc='Lacks is a photo gallery webapp made with ReactJS and Bootstrap 5. It uses Pixabay API to load the data. It shows data like likes , views , downloads and also the tags related to image.'
     imgSrc={Pro3}
     srcCode='https://github.com/yuvrajSoneja2004/photo-gallery'
     liveCode='https://fascinating-swan-60b1a6.netlify.app/'/>
     <Tech />
     
    
    </>
  )
}

export default SkillsSection