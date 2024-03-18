import React from 'react'
import Myimg from "../assets/portfolio/Myimg.jpg";
import {MdArrowForward, MdOutlineKeyboardArrowRight} from 'react-icons/md'

const Home = () => {
  return (
    <div name="home" className=' h-screen w-full bg-gradient-to-b from-black via-black to-gray-800    '>
       <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full 
        px-4 py-4 md:flex-row'>
            <div className='flex flex-col mt-[150px]'>

                <div className='flex flex-col justify-center h-4 '>
                    <div className='flex flex-col'>
                        <div>

                            <h2 className='text-4xl sm:text-7xl font-bold text-white '>I'am a Full Stack Developer. </h2>
                        </div>
                        <div>

                            <p className='text-gray-500 py-4 '>
                                I currently persuing MCA at Government College of Enginnering,Karad. I have strong knowledge of Python and Django framework  as well as frontend technologies such as HTML,CSS,JavaScript , TailWind CSS.
                                Currently i am studying about React.js a popular framework to enhance my coding skill and also improve my knowledge.
                            </p>
                        </div>
                        <div>
                            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 font-bold cursor-pointer'>
                                Portfolio
                                <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={25} className='ml-1' /></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
                <div className='mx-auto  md:mx-0'>
                    <img src={Myimg} className='w-[100px] mt-[150px]  md:w-full ml-3' alt="" />
                </div>
       </div>
    </div>
  )
}

export default Home