import React from 'react'
import Myimg from "../assets/portfolio/Myimg.jpg";
import {MdArrowForward} from 'react-icons/md'

const Home = () => {
  return (
    <div name="home" className=' h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '>
       <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full
        px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-4'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'am a Full Stack Developer. </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    I currently persuing MCA at Government College of Enginnering,Karad. I have strong knowledge of Python and Django framework  as well as frontend technologies such as HTML,CSS,JavaScript , TailWind CSS.
                    Currently i am studying about React.js a popular framework to enhance my coding skill and also improve my knowledge.
                </p>
                <div>
                    <button>
                        <span></span><MdArrowForward/>
                        Portfolio
                    </button>
                </div>
            </div>
            <div>
                <img src={Myimg} alt="My Profile" className='rounded-2xl mx-auto w-1/3 md:w-[65%] '  />
            </div>
       </div>
    </div>
  )
}

export default Home