import React from 'react'
import { useState } from 'react'
import './MorSkills.css'

export const SkillCard = ({logo , title , desc}) => {

 const [stylesCard, setStylesCard] = useState({
  color: '#FFFFFF'
 })

  return (
    <div>
        
        <div className="card-skl"  onMouseEnter={() => {
          setStylesCard({color: '#111111'})
        }} onMouseLeave={() => {
          setStylesCard({color: '#FFFFFF'})
        }}>
            <div className="cen-skl-card">
                <img src={logo} alt="Logo here" className='logos' width='200'/>
                <h1 style={stylesCard}>{title}</h1>
                <p style={stylesCard} >{desc}</p>
            </div>
        </div>
    </div>
  )
}
