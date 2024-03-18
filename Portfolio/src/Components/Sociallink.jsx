import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Sociallink = () => {
    const links=
    [
        {
            id:1,
            child:(
                <>
                    LinkedIn <FaLinkedin Size={40} />
                </>
            ),
            href:'https://Linkedin.com',
            style:'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>
                    GitHub <FaGithub Size={40} />
                </>
            ),
            href:'https://github.com',
           
        },
        {
            id:3,
            child:(
                <>
                    Mail <HiOutlineMail Size={40} />
                </>
            ),
            href:'mailto:suryagandhrushi4455@gmail.com',
           
        },{
            id:4,
            child:(
                <>
                    Resume <BsFillPersonLinesFill Size={40} />
                </>
            ),
            href:'/MY RESUME.pdf',
            style:'rounded-br-md',
            download:true,
        }
    ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed  '>
        <ul>
            {links.map(({id,child,href,style,download}) => (
                <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 bg-gray-600 ml-[-110px] hover:ml-[-10px] hover:rounded-md duration-300"+" " + style}>
                <a href={href}  download={download} target='_blank' className="flex justify-between items-center w-full text-white" rel=" noreferrer">{child}</a>
            </li>
             ))}
        </ul>
    </div>
  )
}

export default Sociallink