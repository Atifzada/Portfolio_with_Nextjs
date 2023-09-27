import React from 'react';
import SectionTitle from './SectionTitle';

const Contact = () => {
  return (
    <section
      id='contact'
      className='max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center'
    >
      <p className='font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide'>
        What&apos;s Next?
      </p>

      <h2 className='font-titleFont text-5xl font-semibold'>Get In Touch</h2>

      <p className='max-w-[600px] text-center text-textDark'>
        I’m currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>

      {/* Simple Form */}
      <form
        action='mailto:atifkhatak242@gmail.com'
        method='post'
        encType='text/plain'
        className="mt-6 w-1/2 sm:w-[70%] lg:w-1/2"
      >
        <div className='mb-4'>
          <label
            htmlFor='name'
            className='block text-textDark font-titleFont text-sm mb-2'
          >
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            className='w-full px-4 py-2 border border-textGreen rounded-md focus:outline-none focus:border-hoverColor'
            required
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='email'
            className='block text-textDark font-titleFont text-sm mb-2'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            className='w-full px-4 py-2 border border-textGreen rounded-md focus:outline-none focus:border-hoverColor'
            required
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='message'
            className='block text-textDark font-titleFont text-sm mb-2'
          >
            Message
          </label>
          <textarea
            id='message'
            name='message'
            // rows='4'
            className='w-full px-4 py-2 border border-textGreen rounded-md focus:outline-none focus:border-hoverColor'
            placeholder='Write your message'
            required
          />
        </div>
        <button
          type='submit'
          className='w-40 h-14 border border-textGreen font-titleFont text-sm text-textGreen tracking-wide rounded-md hover:bg-hoverColor duration-300'
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
