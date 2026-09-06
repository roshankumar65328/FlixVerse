import React from 'react'
import logo from '../../public/logo.png'
import { Link, useNavigate } from 'react-router-dom'

function Contact() {
  const Navigate =  useNavigate();
  document.title = 'FlixVerse - Contact Us'



  return (
    <div className='w-full h-screen bg-[#1F1E24]'>
      <div className='w-full px-[10vw] h-[10vh] bg-[#1A1E19] flex items-center justify-between '>
        <div className='flex gap-x-[1vw] items-center'>
          <i onClick={()=> Navigate(-1)} className="ri-arrow-left-line text-[2vw] font-bold"></i>
          <h1 className='font-black text-[2vw]'>Contact Us</h1>
        </div>
        <Link to='/' > <img src={logo} className='w-[8vw] ' alt="" /> </Link>
      </div>


      <div
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/7709189/pexels-photo-7709189.jpeg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-[90vw] h-[90vh] mx-auto "
      >

        <div className='absolute w-[90vw] h-[90vh] mx-auto t-[10vh] bg-black/60 '></div>
        
        <div className='z-100 relative w-[70vw] mx-auto px-[2vw]'>
          <h1 className='text-[1.4vw] font-semibold  pt-[3vw]'>Have questions, suggestions, or feedback about FlixVerse? We’d love to hear from you! Whether you want to report an issue, suggest a movie or series, share feedback, or simply get in touch with us, feel free to reach out. Your feedback helps us improve FlixVerse and make your entertainment discovery experience better. </h1>
          
          <div className='h-[60vh] pt-[2vw] flex flex-col text-[1.5vw]'>
            <a href="mailto:contact@flexverse.com"> ✉️ contact@flexverse.com</a>
            <a href="tel:+919876543210"> 📞 +91 9876543210 </a>
            <address className='not-italic text-grey-300'>
              📍 FlixVerse Office<br />
              &nbsp; &nbsp; &nbsp; Gurugram <br/>
              &nbsp; &nbsp; &nbsp; Haryana, India
            </address>
            <div className='w-full h-[30vh] bg-blue-400 mt-[2vw]'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d309.9963137389787!2d77.0177139948997!3d28.47327753955921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d167e82efd%3A0xc9db2d627a178f92!2sDREAMZ%20MALL!5e0!3m2!1sen!2sin!4v1788692997417!5m2!1sen!2sin" width="100%" height="100%"  loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            </div>
          </div>

        </div>


      </div>
    </div>
  )
}

export default Contact