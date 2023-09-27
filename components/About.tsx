/* eslint-disable @next/next/no-img-element */
import React from 'react';
import SectionTitle from './SectionTitle';
import { AiFillThunderbolt } from 'react-icons/ai';
import profileImage from '../public/profileImage.png'

const About = () => {
  return (
    <section id='about'
    className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'
    >
        <SectionTitle title="About Me"/>
        <div className='flex flex-col lgl:flex-row gap-16'>
            <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4'>
                <p>
                Hello! My name is Atif Zada and I enjoy creating things that live on the internet. My interest in web development started back in 2020 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                </p>
                <p>
                I have successfully completed the rigorous
                <span className='text-textGreen'> Full Stack Web Development program at Microverse.</span> 
                This transformative experience has equipped me with a deep understanding of front-end and back-end technologies, as well as the ability to build robust, dynamic web applications.,{" "},
                </p>
                <p>
                I am excited to bring my expertise in web development to the digital world, and I am eager to embark on new projects and challenges. Lets work together to create innovative and user-friendly web solutions that leave a lasting impression.
                </p>
                <div className='py-10'>
                <SectionTitle title="Skills"/>
                <p className='pt-10'>Here are the technologies I have been working with recently:</p>
                <ul className='max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6'>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt/></span>
                        JavaScript (ES6+)
                    </li>
                    
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt/></span>
                        React Redux
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt/></span>
                        Ruby
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt/></span>
                        Ruby on Rails
                    </li>
                                        
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt/></span>
                        SQL
                    </li>

                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt/></span>
                        Next.js
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt/></span>
                        TypeScript
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt/></span>
                        Tailwind
                    </li>

                </ul>
                </div>
            </div>
            <div className='w-full lgl:w-1/3 h-80 relative group ml-6'>
                <div className='absolute w-full h-80 -left-6 -top-6 rounded-lg'>
                    <div className='w-full h-full relative z-20 flex pl-6lgl:pl-0'>
                    {/* Use the src property of StaticImageData */}
              <img
                className="rounded-lg h-full object-cover"
                src={profileImage.src}
                alt="Profile"/> 
                <div className='hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300'></div>   
                </div>
                </div>
                <div className='hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md
                group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300'
                ></div>
                
            </div>
        </div>
    </section>
  )
}

export default About