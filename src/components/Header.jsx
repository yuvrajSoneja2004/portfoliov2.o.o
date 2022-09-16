import React , {useEffect} from 'react';
import './Header.css';
import './cssBoiler.css';
import Navbar from './Navbar';
import Section from './Section';

function Header() {

useEffect(() => {
  document.title = "Yuvraj's Portfolio";
} , []);

  return (
    <div>
        <div className="whole" id='header-home'>
            <Navbar />
            <div className="inside-h">
              <div className="space"></div>
              <div className="space"></div>
              <div className="space"></div>
              <div className="space"></div>
              <div className="space"></div>
              <div className="space"></div>
              <div className="space"></div>
              <div className="space"></div>
              <div className="space"></div>
            <div className="header-text"  data-aos="fade-left">
            
              <h1><span className='header-span'>HI</span>,ITS YUVRAJ!</h1>
            </div>
            </div>
           
        </div>

         <section>
          <Section />
        </section>

    </div>
  );
}

export default Header;