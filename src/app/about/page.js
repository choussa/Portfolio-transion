import React from 'react'

const AboutPage = () => {
  return (
    <section className='min-h-screen w-full bg-[#E3E3E3] text-[#1A1A1A] flex flex-col justify-center px-[8vw] py-32'>
      <div className="flex flex-col md:flex-row justify-between items-start gap-16">
        <h2 className='text-[5vw] font-medium tracking-tighter leading-[0.9] w-full md:w-1/2'>
          Designing <br /> with Intent
        </h2>
        <div className="w-full md:w-1/2 flex flex-col gap-8 text-xl font-light leading-relaxed">
          <p>
            I am a multi-disciplinary designer and developer passionate about creating digital experiences that bridge the gap between aesthetics and functionality.
          </p>
          <p>
            With a background in both technical engineering and visual design, I bring a unique perspective to every project, ensuring that the final product is not only beautiful but also performant and accessible.
          </p>
          <div className="pt-8 border-t border-black/20 mt-8">
            <h3 className="font-medium text-sm tracking-widest uppercase mb-4">Core Competencies</h3>
            <ul className="flex flex-col gap-2 opacity-80">
              <li>Next.js & React Ecosystem</li>
              <li>GSAP & Creative Coding</li>
              <li>UI / UX Strategy</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage