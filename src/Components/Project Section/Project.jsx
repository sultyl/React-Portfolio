import React from 'react'
import './projects.css'
import {TbLivePhoto} from 'react-icons/tb'
import {AiOutlineGithub} from 'react-icons/ai'

// import images
import img from '../../Assets/Bus.jpg'
import img1 from '../../Assets/fit.jpg'
import img2 from '../../Assets/Por.jpg'
import img3 from '../../Assets/Res.jpg'
import img4 from '../../Assets/Job.jpg'


const data = [
  {
    id: 1,
    image: img,
    demo: 'https://sultyl.github.io/business/',
    Livelink: 'https://sultyl.github.io/business/',
    github: 'https://sultyl.github.io/business/',
    title: 'Business Website',
    desc: 'This is a responsive business website that shows the services rendered and the team behind it',
    tech1: 'Html',
    tech2: 'CSS',
    tech3: 'Javascript', 
  },

  {
    id: 2,
    image: img1,
    demo: 'https://sultyl.github.io/Fitness/',
    Livelink: 'https://sultyl.github.io/Fitness/',
    github: 'https://sultyl.github.io/Fitness/',
    title: 'Fitness Website',
    desc: 'This is a responsive for a fitness company that helps to promote the the organization',
    tech1: 'Html',
    tech2: 'CSS',
    tech3: 'Javascript', 
  },

  {
    id: 3,
    image: img2,
    demo: 'https://sultyl.github.io/Portfolio/main.html',
    Livelink: 'https://sultyl.github.io/Portfolio/main.html',
    github: 'https://sultyl.github.io/Portfolio/main.html',
    title: 'Portfolio Website',
    desc: 'This is a responsive Portfolio website showing your skills, works and comment from clients reagrding your previous jobs',
    tech1: 'Html',
    tech2: 'CSS',
    tech3: 'Javascript', 
  },

  {
    id: 4,
    image: img3,
    demo: 'https://sultyl.github.io/Resume/',
    Livelink: 'https://sultyl.github.io/Resume/',
    github: 'https://sultyl.github.io/Resume/',
    title: 'Resume Website',
    desc: 'This is a responsive Resume website showing your Experiences, Education, services and whatever it is needed by your employer including your social links',
    tech1: 'Html',
    tech2: 'CSS',
    tech3: 'Javascript',
  },

  {
    id: 5,
    image: img4,
    demo: 'https://sultyl.github.io/job/',
    Livelink: 'https://sultyl.github.io/job/',
    github: 'https://sultyl.github.io/job/',
    title: 'Job Website',
    desc: 'This is a dummy job search website being updated regularly to show jobs available to match the credibility of the user',
    tech1: 'Html',
    tech2: 'CSS',
    tech3: 'Javascript',
  },
]

const Project = () => {
  return (
    <section id='projects' className='projects container section'>
      
      <div className="sectionTitle">
        <span className="titleNumber">03.</span>
        <h5 className="titleText">Projects
        <div className="underline"><span></span></div>
        </h5>
      </div>

      <div className="projectContainer grid">
        {
          data.map(({id, github, image, Livelink, desc, demo, title, tech1, tech2, tech3}) =>{
            return(
              <div key={id} className="singleProject">
                
                <div className="externalLinks flex">
                  <div className="youtubeIcon">
                    <a href={demo} target= "_balnk">
                      <TbLivePhoto className='icon'/>
                    </a>
                  </div>
                  <div className="githubIcon">
                    <a href={github} target="_blank">
                      <AiOutlineGithub className='icon'/>
                    </a>
                  </div>
                </div>

                <div className="imgDiv">
                  <a href={Livelink} target="_blank">
                    <img src={image} alt={title}/>
                  </a>
                </div>

                <div className="projectTitle">
                  <h3>{title}</h3>
                </div>

                <div className="desc">
                  {desc}
                </div>

                <div className="technologies flex">
                  <small>{tech1}</small>
                  &nbsp;
                  <small>{tech2}</small>
                  &nbsp;
                  <small>{tech3}</small>
                  &nbsp;
                </div>
              </div>
            )
          })

        }
      </div>
    
    
    
    </section>
  )
}

export default Project