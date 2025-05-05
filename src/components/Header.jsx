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
              <div className="header-text btns-proj" data-aos="fade-left">
  <h1>
    <span className="header-span">HI</span>, IT'S YUVRAJ!
  </h1>
  <button
    className="hover-b"
    onClick={() =>
      window.location.href = "mailto:yuvrajdev20004@gmail.com"
    }
  >
    <i className="fa-solid fa-paper-plane icons"></i> Contact Me!
  </button>
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