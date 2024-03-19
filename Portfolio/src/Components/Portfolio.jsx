import React from 'react'
import Myimg from "../assets/portfolio/todo.jpg";
import spotify from "../assets/portfolio/spot3.jpg";
import twitter from "../assets/portfolio/twitter.jpg";
import Netflix from "../assets/portfolio/Netflix.jpg";
import contact from "../assets/portfolio/contact.jpg";
import Bootsstrap from "../assets/portfolio/Bootsstrap.jpg";



const Portfolio = () => {
    const portfolios=[
        {
            id:1,
            src:Myimg,
            href:'https://github.com/Rushi-Suryaa2601/TO_DO_List_APP-',
        },
        {
            id:2,
            src:spotify,
            href:'https://github.com/Rushi-Suryaa2601/Spotify_Clone',
        },
        {
            id:3,
            src:twitter,
            href:'https://github.com/Rushi-Suryaa2601/Twitter_Clone',
        },
        {
            id:4,
            src:Netflix,
            href:'https://github.com/Rushi-Suryaa2601/Netflix_Clone',
        },
        {
            id:5,
            src:contact,
            href:'https://github.com/Rushi-Suryaa2601/Contact_List_WebApp',
        },
        {
            id:6,
            src:Bootsstrap,
            href:'https://github.com/Rushi-Suryaa2601/Sample_Bootstrap_Template',
        },
        
        
        
        
    ]
  return (
    <div name="PortFolio" className='bg-gradient-to-b from-black to-gray-800 w-full  text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-ce
         w-full h-[110vh]   '>
            <div className='mt-[60px] sm:mt-[90px]  md:mt-[5px'>
                <p className=' text-4xl
                 font-bold inline border-b-4 border-gray-500 '>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>

            </div>

            

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 '>
                {
                    portfolios.map(({id,src,href})=>(
                        
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg h-'>
                   
                        <img src={src}  alt="" className='rounded-md hover:scale-105 duration-200  ' />
                   
                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200 font-bold cursor-pointer'><a href={href}>Demo</a></button>
                        <button className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200 font-bold cursor-pointer'><a href={href}>Code</a></button>
                    </div>
                </div>
                    ))
                }
            </div>

        </div>
    </div>
  )
}

export default Portfolio