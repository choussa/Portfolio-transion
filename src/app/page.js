import React from 'react'

const page = () => {
  return (
    <section className='min-h-screen w-full bg-[#1A1A1A] text-[#F9F9F9] flex flex-col justify-center px-[8vw] py-20'>
      <div className="max-w-4xl">
        <h1 className='text-[8vw] md:text-[6vw] font-medium tracking-tighter leading-[0.9] mb-8'>
          Creative Developer <br /> & Interface Designer.
        </h1>
        <p className='text-lg md:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed mb-12'>
          I build digital experiences with a focus on modern aesthetic, smooth interactions, and robust engineering. Let's create something memorable.
        </p>
        <button className='group relative px-8 py-4 bg-[#F9F9F9] text-[#1A1A1A] rounded-full font-medium text-lg overflow-hidden transition-transform hover:scale-105'>
          <span className="relative z-10">View My Work</span>
        </button>
      </div>
    </section>
  )
}

export default page