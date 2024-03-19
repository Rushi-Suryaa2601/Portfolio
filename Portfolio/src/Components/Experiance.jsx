import React from 'react'
import html from "../assets/portfolio/html.png"
import css from "../assets/portfolio/css.png"
import tailwind from "../assets/portfolio/tailwind.png"
import python from "../assets/portfolio/python.png"
import django from "../assets/portfolio/django.png"
import react from "../assets/portfolio/react.png"
import node from "../assets/portfolio/node.png"
import next from "../assets/portfolio/nextjs.png"
import javascript from "../assets/portfolio/javascript.png"
import github from "../assets/portfolio/github.png"

const Experiance = () => {
    const experiance=[
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:javascript,
            title:'JAVASCRIPT',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:python,
            title:'PYTHON',
            style:'shadow-yellow-400'
        },
        {
            id:5,
            src:django,
            title:'DJANGO',
            style:'shadow-green-500'
        },
        {
            id:6,
            src:tailwind,
            title:'TAILWIND',
            style:'shadow-sky-400'
        },
        {
            id:7,
            src:react,
            title:'REACT',
            style:'shadow-blue-600'
        },
        {
            id:8,
            src:next,
            title:'NEXT JS',
            style:'shadow-white'
        },
        {
            id:9,
            src:node,
            title:'NODE JS',
            style:'shadow-green-600'
        },
        {
            id:10,
            src:github,
            title:'GITHUB',
            style:'shadow-white'
        },
        
    ]
  return (
    <div className='bg-gradient-to-b from-gray-800 to-black w-full h-full '>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white '>
            <div name="Experiance"  className=' mt-[100vh] sm:mt-[20px] md:mt-20 '>
                <div className='mt-[90px] md:mt-20 sm:mt-[15vh]'>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are the technologies i've worked with.</p>
                </div>
                
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    experiance.map(({id,src,title,style})=>(

                <div key={id} className={`shadow-md hover:scale-105 duration-200 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className='w-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                </div>
                    )
                    )
                }
            </div>
            
        </div>

        
    </div>
  )
}

export default Experiance