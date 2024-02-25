import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { changeTheme } from '../state/themeSlice';

import {BsFillMoonStarsFill} from 'react-icons/bs';
import { IoSunny, IoMail, IoCall } from "react-icons/io5";

const Header = () => {
    const {darkMode} = useSelector(state=>state.theme);
    const dispatch = useDispatch();

    return (
        <div className={`${darkMode ? 'dark' : ''}`}>
            <div className='w-full fixed top-0 left-0 bg-neutral-200 dark:bg-slate-900 px-5 sm:px-10 md:px-15 lg:px-25 xl:px-30 font-segoeUI transition-all duration-300 z-10'>
                <nav className="py-2 flex justify-between items-center text-center text-sm sm:text-base">
                    {/* links */}
                    <div className='flex flex-wrap gap-x-5 text-l text-black dark:text-white'>

                        <NavLink to='/'>About Me</NavLink>
                        <NavLink to='/projects'>Projects</NavLink>
                        <NavLink to='/services'>Services</NavLink>
                        <NavLink to='/stack'>Tech Stack</NavLink>
                        <NavLink to='/contact'>Contact Me</NavLink>

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