import React from 'react'

const About = () => {
  return (
    <div name="About" className='w-full   bg-gradient-to-b h-[93vh] from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center md:justify-start w-full h-full'>
            <div className='pb-8 mt-20 '>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-10'>I am a dedicated and skilled <span className='font-signature'>'Software Developer'</span> with a profound expertise in Python and the Django framework. My journey in the world of programming has equipped me with a deep understanding of these technologies, allowing me to create robust and efficient web applications.

Python, as my primary programming language, has been my foundation for building dynamic and versatile web solutions. With Python, I've developed complex backend logic and integrated various data sources to create seamless user experiences.



            </p>
            <br />
            <p className='text-xl'>In addition to my Python and Django proficiency, I am well-versed in front-end technologies such as Bootstrap, HTML, CSS,JavaScript,Tailwind . This combination of skills enables me to craft visually appealing and responsive user interfaces that complement the powerful functionality of my web applications.

My passion for programming drives me to stay up-to-date with the latest trends and best practices in web development, ensuring that I deliver high-quality, maintainable code. With a strong foundation in Python and Django, and a knack for creating engaging user interfaces with Bootstrap, HTML, and CSS, I am well-equipped to tackle a wide range of web development projects.</p>
        </div>
    </div>
  )
}

export default About