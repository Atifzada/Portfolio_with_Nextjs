/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const RightSide = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLight'>
        <a href="mailto:atifkhatak242@gmail.com">
        <p className='text-sm rotate-90 w-72 tracking-wide text-textGreen'>Let's Get In Touch</p>
        </a>
        <span className="w-[2px] h-32 bg-textDark inline-flex"></span>
    </div>
  )
}

export default RightSide