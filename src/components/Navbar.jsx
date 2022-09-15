import React  , {useState} from 'react'
import { NavLink } from 'react-router-dom'
import './cssBoiler.css'
import './Navbar.css'
import Ham from './assets/ham.png'
import Cross from './assets/cross.png'
// LOGO 
import Logo from './assets/logo.png'
function Navbar() {

  const [mobileNav, setMobileNav] = useState({
    top:'-500px',
    icon: Ham
  })

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [icon, setIcon] = useState(Ham);
  const [navChange, setNavChange] = useState(false);

  const navToggle = () => {
    if(isNavOpen == false) {
      setMobileNav({top: '80px'})
      setIsNavOpen(true)
      setIcon(Cross)
    }
    else {
      setMobileNav({top: '-500px'})
      setIsNavOpen(false)
      setIcon(Ham)
     
    }
  }

  const navChanger = () => {
    if(window.scrollY >= 600) {
      setNavChange(true)

    }
    else {
      setNavChange(false);
    }
  }
  const mobileNavController = () => {
    setMobileNav({top: '-500px'})
      setIsNavOpen(false)
      setIcon(Ham)
  }

  window.addEventListener('scroll' , navChanger);
  return (
    <div>
        <nav className='container-fluid navB'>
          <div className={navChange ? "center-nav active" : "center-nav"}>
          <img src={Logo} alt="" className="logo"  width='200'/>
          {/* PC UL  */}
          <ul className="navItems">
            <li>
              <a href="#header-home" className='links'>Home</a>
            </li>
            <li>
              <a href="#skills-sec" className='links'>Projects</a>
            </li>
            <li>
              <a href="#skls" className='links'>Skills</a>
            </li>
            <li>
              <a href="#abt-me" className='links'>About</a>
            </li>
            <li>
              <a href="#footer-sec" className='links'>Contact</a>
            </li>
            <div className="ham">
           <img src={icon} alt="error" width='30' onClick={navToggle}/>
          </div>
          </ul>
          
            
          </div>
          {/* MOBILE UL  */}
          <div className="mobileNav" style={mobileNav} >
            <ul className='mobileNavItems'>
              <li>
                <a href="#header-home" className='links2' onClick={mobileNavController}>Home</a>
              </li>
              <li >
                <a href="#skills-sec"  className='links2' onClick={mobileNavController}>Projects</a>
              </li>
              <li>
                <a href="#skls"  className='links2' onClick={mobileNavController}>Skills</a>
              </li>
              <li>
                <a href="#abt-me"  className='links2' onClick={mobileNavController}>About</a>
              </li>
              <li>
                <a href="#footer-sec"  className='links2' onClick={mobileNavController}>Contact</a>
              </li>
            </ul>
            </div>
          
        </nav>

    </div>
  )
}

export default Navbar