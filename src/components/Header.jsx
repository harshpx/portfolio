import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { changeTheme } from '../state/themeSlice';
import { Link } from 'react-scroll';

import {BsFillMoonStarsFill} from 'react-icons/bs';
import { IoSunny } from "react-icons/io5";

const Header = () => {
    const {darkMode} = useSelector(state=>state.theme);
    const dispatch = useDispatch();

    return (
        <div className={`${darkMode ? 'dark' : ''}`}>
            <div className='w-full fixed top-0 left-0 bg-neutral-200 dark:bg-slate-900 px-5 sm:px-10 md:px-15 lg:px-25 xl:px-30 font-segoeUI transition-all duration-300 z-10'>
                <nav className="py-2 flex justify-between items-center text-center text-sm sm:text-base">
                    {/* links */}
                    <div className='flex flex-wrap gap-x-5 text-l text-black dark:text-white'>

                        <Link to='about' spy={true} smooth={true} offset={0} duration={500} activeClass='active' className='hover:underline cursor-pointer'>About Me</Link>
                        <Link to='projects' spy={true} smooth={true} offset={10} duration={500} activeClass='active' className='hover:underline cursor-pointer'>Projects</Link>
                        <Link to='services' spy={true} smooth={true} offset={10} duration={500} activeClass='active' className='hover:underline cursor-pointer'>Services</Link>
                        <Link to='stack' spy={true} smooth={true} offset={-5} duration={500} activeClass='active' className='hover:underline cursor-pointer'>Tech Stack</Link>
                        <Link to='contact' spy={true} smooth={true} offset={-10} duration={500} activeClass='active' className='hover:underline cursor-pointer'>Connect</Link>

                    </div>
                    {/* theme switch button */}
                    <div className='cursor-pointer text-2xl rounded-full p-1.5 text-teal-600 dark:text-teal-400 hover:text-teal-400 dark:hover:text-teal-600 hover:bg-black dark:hover:bg-neutral-200' onClick={()=>dispatch(changeTheme())}>
                        {darkMode ? <IoSunny /> : <BsFillMoonStarsFill/>}
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header