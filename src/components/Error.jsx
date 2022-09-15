import React from 'react'
import { NavLink } from 'react-router-dom';
import './Error.css'
import './cssBoiler.css'
function Error() {
  return (
    <div style={{
        width: '100%',
        height: '100vh',
        background: '#111111',
        color: '#FFFFFF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }}>
        <h1 className='error'>404 Page Not Found!</h1>
        <NavLink to='/'><button className='really'>Go Back</button></NavLink>
        
    </div>
  )
}

export default Error