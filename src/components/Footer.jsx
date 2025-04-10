
import React, { useState } from 'react'
import './cssBoiler.css'
import './Footer.css'
import emailjs from 'emailjs-com'
import Loader from './Loader'


const Footer = () => {

  const [nameV, setNameV] = useState("")
  const [emailV, setEmailV] = useState("")
  const [writingA, setWritingA] = useState("")
  const [succMsg, setSuccMsg] = useState("")
  const [isLoading, setisLoading] = useState(false);
  
  return (
    <>
    <div className="whole-footer" id='footer-sec' >
        <div className="footer-content"  data-aos="fade-up">
            <h1>Get in touch</h1>
            <p>Feel free to reach out by filling out the form below — I’ll get back to you as soon as possible.</p>
           <form onSubmit={(e) => {
            e.preventDefault();
            emailjs.sendForm('service_dei964e' , 'template_y0a6m1f', e.target , "cPij2C2-bTK8TzR8S").then((res) => {
              console.log(res);
              setNameV("")
              setEmailV("")
              setWritingA("")
              setSuccMsg("Email Sent Successfully.");
              setisLoading(false)
              setTimeout(() => {
                setSuccMsg("")
              }, 3000);
            }).catch((err) => {
              console.log(err)
              setSuccMsg("An Error occured , Please try again later.");
              setisLoading(false)
              setTimeout(() => {
                setSuccMsg("")
              }, 2000);
            });
           }}>
            <label htmlFor="name" className='form-label'>Name</label>
            <input type="text" className='form-control submitForm' id='name' name="name" placeholder='e.g Rahul Kumar' value={nameV} onChange={(e) => setNameV(e.target.value)}/>
            <label htmlFor="email" className='form-label'>Email</label>
            <input type="email" className='form-control submitForm' id='email' name='user_email' placeholder='e.g rahul@gmail.com'  value={emailV} onChange={(e) => setEmailV(e.target.value)}/>
            <label htmlFor="writingA" className='form-label'>Writing Area</label>
            <textarea className='form-control' id="writingA" cols="30" rows="10" placeholder='e.g Your website looks cool!' name='messageBox'  value={writingA} onChange={(e) => setWritingA(e.target.value)}></textarea>
            <button type='submit' className='my-4 submitBtn' value='Send' onClick={() => {
              setisLoading(true)
            }}>Send</button>
           </form>
           
            <div className="sm">
            <a href="https://www.linkedin.com/in/yuvrajsoneja/" target='_blank'><i className="fab fa-linkedin smIcons" ></i></a>
            <a href="https://github.com/yuvrajSoneja2004" target='_blank'><i className="fab fa-github smIcons" ></i></a>
            <a href="https://www.instagram.com/yuvraj_soneja/" target='_blank'><i className="fab fa-instagram smIcons" ></i></a>
            
         
             </div>
             {isLoading === false ? "" : <Loader />}
                 <h1 style={{margin: '20px 0'}}>{succMsg}</h1>
        </div>
      
    </div>
    
    </>
  )
}

export default Footer