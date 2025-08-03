import React from 'react'
import { RiContactsFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const ContactMe = () => {
  
  return (
    <section id="Contact" className="contact--section">
      <div>
        <h2>Contact Me</h2>
       
      </div>
      <div className="address">
        <div className="contact-left">
        <div className='left-head'>Get In Touch</div>
        <div className='left-para'>I'm always open to connecting with new people, discussing interesting ideas, and exploring potential collaborations. Whether you have a question, a project idea, or just want to say hello, feel free to reach out!
</div>
        <div className='details-box' >

            <RiContactsFill className='address-icon' />
            <div className="box">
              <div className='head'> Name </div>
              <div className='body'> Rimsha Fatima</div>
            </div>
        </div>

        <div className='details-box' >

        <MdOutlinePhoneIphone className='address-icon' />
            <div className="box">
              <div className='head'> Phone </div>
              <div className='body'> +91 N/A</div>
            </div>
        </div>
        
        <div className='details-box' >

        <FaLocationDot className='address-icon' />
            <div className="box">
              <div className='head'> Address </div>
              <div className='body'>N/A</div>
            </div>
        </div>
        <div className='details-box' >

        <FaInstagram className='address-icon' />
            <div className="box">
              <div className='head'> Instagram </div>
              <div className='body'> <a href="https://www.instagram.com/_light_of_imaan__?igsh=aXdsY2Q3bTM2bnkw" target='blank'>Follow @_Light_of_imaan_</a></div>
            </div>
        </div>
        <div className='details-box' >

      <FaYoutube  className='address-icon' />
      
            <div className="box" style={{marginTop:'10px'}}>
          <div className='head'> YouTube </div>
              <div className='body'> <a href="https://m.youtube.com/@piousdeenn_14?fbclid=PAQ0xDSwL7zNlleHRuA2FlbQIxMAABpzhe7tiBUXC2KOo1qxTu1nMrvB_2whoOaM43L1Rrxdh65Ffc4pmi8H8lKE-C_aem_bk8I5oJOpyhoihL4M0Svcw" target='blank'>Subscribe Now</a></div> 
            </div>
        </div>
        
           
          
           
        </div>
        <div className="contact-right">
            <div className="image-box">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28819.252275080853!2d81.8279116347656!3d25.45809729999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1721194351532!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" alt='map'></iframe>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ContactMe

