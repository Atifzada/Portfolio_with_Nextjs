/* eslint-disable @next/next/no-img-element */
import React from 'react'
import SectionTitle from './SectionTitle';
import skill_habour from '../public/assets/images/skill_habour.png'
import pokodex from '..//public/assets/images/pokedex.png'
import landrover from '../public/assets/images/land_rover (1).png'


const Projects = () => {
  return (
    <section 
    id='project' className='max-w-container mx-auto lgl:px-20 py-24'>
        <SectionTitle title='Something that I have Built'/>
        {/* Project one */}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-20'>
            <div className='flex flex-col items-center xl:flex-row gap-6'>
              <a className='w-2/3 xl:1/2 h-auto relative gap'
              href="https://my-skill-habour.onrender.com/" target='_blank'>
              <div>
                <img src={skill_habour.src} alt="Skill_habour" className='w-full h-full object-contain'/>
                </div>
              </a>
            
            <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
              <p className='font-titleFont text-textGreen text-sm tracking-wide'>Feature Projects</p>
              <h3 className='text-2xl font-bold'>Skill_habour</h3>
              <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
              Skill Habour is <span className='text-textGreen'>an online platform</span> that offers different courses, where one can register, enroll in a course, Reserve a course, and learn a <span className='text-textGreen'> lot of skills</span>
              </p>
              <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 
              md:gap-5 justify-between text-textDark'>
                <li>React</li>
                <li>Ruby on Rails</li>
                <li>Tailwind</li>
                <li>Render Deployment</li>
              </ul>
            </div>
            </div>
        </div>
        {/* Project two */}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-40'>
            <div className='flex flex-col items-center xl:flex-row-reverse gap-6'>
              <a className='w-2/3 xl:1/2 h-auto relative gap'
              href="https://javascript-capstone.netlify.app/" target='_blank'>
              <div>
                <img src={pokodex.src} alt="Skill_habour" className='w-full h-full object-contain'/>
                </div>
              </a>
            
            <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10'>
              <p className='font-titleFont text-textGreen text-sm tracking-wide'>Feature Projects</p>
              <h3 className='text-2xl font-bold'>Pokodex</h3>
              <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md xl:-mr-16'>
              Pokedex is a <span className='text-textGreen'>JavaScript single-page Application,</span> Built using ES6 features and Webpack bundler, notably modules, and consumes the <span className='text-textGreen'> PokeAPI using JavaScript async/await.</span>
              </p>
              <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 
              md:gap-5 justify-between text-textDark'>
                <li>React</li>
                <li>JavaScript</li>
                <li>Tailwind</li>
                <li>Render Deployment</li>
              </ul>
            </div>
            </div>
        </div>
        {/* Project three */}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-40'>
            <div className='flex flex-col items-center xl:flex-row gap-6'>
              <a className='w-2/3 xl:1/2 h-auto relative gap'
              href="nd-rover-e.netlify.app" target='_blank'>
              <div>
                <img src={landrover.src} alt="landrover" className='w-full h-full object-contain'/>
                </div>
              </a>
            
            <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
              <p className='font-titleFont text-textGreen text-sm tracking-wide'>Feature Projects</p>
              <h3 className='text-2xl font-bold'>Land Rover</h3>
              <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md '>
              Land Rover:  <span className='text-textGreen'>Redefining vehicle</span> reservations with React JS & Rails. Effortless booking, mobile-friendly, <span className='text-textGreen'> real-time updates. Join us today!</span>
              </p>
              <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 
              md:gap-5 justify-between text-textDark'>
                <li>React</li>
                <li>Ruby on Rails</li>
                <li>JavaScript</li>
                <li>Tailwind</li>
                <li>Render Deployment</li>
              </ul>
            </div>
            </div>
        </div>

    </section>
  )
}

export default Projects