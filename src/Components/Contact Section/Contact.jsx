import React, { useRef } from 'react';
import './contact.css'


// import icons*****************>>
import {FaTelegram} from 
'react-icons/fa'
import {AiOutlineWhatsApp } from 'react-icons/ai'
// import {  } from 'react-icons/'
import {TbArrowBigRightLines} from 'react-icons/tb'
import {AiOutlineInstagram} from 'react-icons/ai'

//import emailJs******************>>

import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7cjvi6q', 'template_cvfi22c', form.current, 'Yk9B5OFaz5OfwZakT')
      e.target.reset() //the form will reset after submit
  };





  return (
    <section id='contact' className='contactSection container'>

    <div className="sectionTitle">
        <span className="titleNumber">04.</span>
        <h5 className="titleText">Contacts
        <div className="underline"><span></span></div>
        </h5>
      </div>
      
      <div className="contactContainer grid">
        <div className="socialContacts grid">
          <h3>Talk to me</h3>

          <div className="cards grid">
            <div className="card">
              <div>
              <FaTelegram className='icon'/>
              </div>
              <h4>Telegram</h4>
              <span className="userName">
                @TheLaw10
              </span>

              <div>
                <a href="https://t.me/TheLaw10" className="flex">
                  Send Message
                  <TbArrowBigRightLines className='icon'/>
                </a>
              </div>
            </div>

            <div className="card">
              <div>
              <AiOutlineWhatsApp className='icon'/>
              </div>
              <h4>Whatsapp</h4>
              <span className="userName">
                +2348147855981
              </span>

              <div>
                <a href="https://wa.link/hh936k" className="flex">
                  Send Message
                  <TbArrowBigRightLines className='icon'/>
                </a>
              </div>
            </div>

            <div className="card">
              <div>
              <AiOutlineInstagram className='icon'/>
              </div>
              <h4>Instagram</h4>
              <span className="userName">
                @thawne001
              </span>

              <div>
                <a href="https://www.instagram.com/thawne001/" className="flex">
                  Send Message
                  <TbArrowBigRightLines className='icon'/>
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="form grid">
          <h3>Send me an email</h3>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder='Enter your Fullname' required={true} name='name'/>
            <input type="email" placeholder='Enter your Email' required={true} name='email'/>
            <textarea name="message" placeholder='Enter your Message' required={true}></textarea>
            <button className="formBtn" type='submit' name='submit'>
              Send Email
            </button>
          </form>


        </div>
      </div>

    </section>
  )
}

export default Contact