import React from 'react'
import './home.css'
import {AiFillGithub} from 'react-icons/ai'
import {FaTelegram} from 'react-icons/fa'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {TbArrowBigRightLines} from 'react-icons/tb'
import {FiChevronsDown} from 'react-icons/fi'


const Home = () => {
  return (
    <section id='home' className='home section'>
      {/* this div will only be available at a wider screen*/}
      <div className="leftIcons">
        <div className="socials grid">
          <a href="https://sultyl.github.io/" target='_blank'>
            <AiFillGithub className='icon'/>
          </a>
          <a href="https://t.me/TheLaw10" target='_blank'>
            <FaTelegram className='icon'/>
          </a>
          <a href="https://wa.link/hh936k" target='_blank'>
            <AiOutlineWhatsApp className='icon'/>
          </a>
          <div className="line"></div>
        </div>
      </div>

      {/* home content */}
      <div className="container homeContainer">
        <span className="introText">
          Hi my name is,
        </span>
        
        <h1 className="title">
          Adeleke Sultan
        </h1>
        
        <span className="subTitle">
          I am a Front-end Developer
        </span>
        
        <p className="homeParagraph">
          I code within required coding standards and styles to serve the exact need.
        </p>

        <div className="lowerHomeSection">
          <button className="contactBtn">
            <a href="#contact" className="flex">
              Contact Me <TbArrowBigRightLines className='icon'/>
            </a>
          </button>

          <div className="scrollDiv">
            <a href="#about" className="flex">
             <h6 className="scroll"> Scroll Down </h6><FiChevronsDown className='icon'/>
            </a>
          </div>
        </div>
      </div>

      
      {/* the right mail will only show on wider screen */}

      <div className="rightEmail">
        <div>
          <div className="emailAddress">
          <a href="https://mailto:sultanadeleke6@gmail.com" target='_blank'>
            sultanadeleke6@gmail.com
            </a>
          </div>

          <div className="line"></div>
        </div>
      </div>
    </section>
  )
}

export default Home
