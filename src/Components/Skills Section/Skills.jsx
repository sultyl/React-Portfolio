import React from 'react'
import './skill.css'
import {TbBrandReactNative} from 'react-icons/tb'
import {AiFillHtml5} from 'react-icons/ai'
import {TbBrandCss3} from 'react-icons/tb'
import {IoLogoJavascript} from 'react-icons/io'
import {IoLogoSass} from 'react-icons/io'
import {IoLogoNodejs} from 'react-icons/io'
import {SiJquery} from 'react-icons/si'
import {IoLogoWordpress} from 'react-icons/io'
import {FaGitSquare} from 'react-icons/fa'
import {AiOutlineGithub} from 'react-icons/ai'
import {FaBootstrap} from 'react-icons/fa'

const Skills = () => {
  return (
    <section id='skill' className='skill section container'>

      <div className="sectionTitle">
        <span className="titleNumber">02.</span>
        <h5 className="titleText">Skills
        <div className="underline"><span></span></div>
        </h5>
      </div>

    {/* Skills container */}
    <div className="skillsContainer grid">
    {/* single group of skills */}
    <div className="skillGroup">
      <div className="groupTitle">
        <h2 className="title">Front-end Development</h2>
        <span className="subTitle">
          2 Years Experience
        </span>
      </div>

      <div className="generalSkills">
      {/* single skill div */}
      <div className="singleSkill">
        <div className="iconBox flex">
          <TbBrandReactNative className='icon'/>
        </div>
        <span className="skillName">React</span>
      </div>
     
     <div className="singleSkill">
        <div className="iconBox flex">
          <IoLogoJavascript className='icon'/>
        </div>
        <span className="skillName">JavaScript</span>
      </div>

      <div className="singleSkill">
        <div className="iconBox flex">
          <AiFillHtml5 className='icon'/>
        </div>
        <span className="skillName"> HTML </span>
      </div>
      
             
      <div className="singleSkill">
        <div className="iconBox flex">
          <TbBrandCss3 className='icon'/>
        </div>
        <span className="skillName">CSS</span>
      </div>
    
     

      <div className="singleSkill">
        <div className="iconBox flex">
          <IoLogoSass className='icon'/>
        </div>
        <span className="skillName">Sass</span>
      </div>

      <div className="singleSkill">
        <div className="iconBox flex">
          <IoLogoNodejs className='icon'/>
        </div>
        <span className="skillName">Nodejs</span>
      </div>
      
      </div>

      </div>

      <div className="skillGroup">
      <div className="groupTitle">
        <h2 className="title">Other Skills</h2>
        <span className="subTitle">
          2 Years Experience
        </span>
      </div>

      <div className="generalSkills">
      {/* single skill div */}
      <div className="singleSkill">
        <div className="iconBox flex">
          <SiJquery className='icon'/>
        </div>
        <span className="skillName">JQuery</span>
      </div>
     
     <div className="singleSkill">
        <div className="iconBox flex">
          <IoLogoWordpress className='icon'/>
        </div>
        <span className="skillName">Wordpress</span>
      </div>

      <div className="singleSkill">
        <div className="iconBox flex">
          <FaGitSquare className='icon'/>
        </div>
        <span className="skillName">Git</span>
      </div>
      
             
      <div className="singleSkill">
        <div className="iconBox flex">
          <AiOutlineGithub className='icon'/>
        </div>
        <span className="skillName">Github</span>
      </div>

      <div className="singleSkill">
        <div className="iconBox flex">
          <FaBootstrap className='icon'/>
        </div>
        <span className="skillName">Bootstrap</span>
      </div>
    
      
      </div>

      </div>

    </div>

    

    </section>
  )
}

export default Skills