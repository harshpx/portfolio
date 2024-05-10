import React, { useEffect, useRef, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { changeTheme } from '../state/themeSlice';
import { Link } from 'react-scroll';

import {BsFillMoonStarsFill} from 'react-icons/bs';
import { IoSunny, IoChevronBackOutline, IoChevronForward, IoChevronDown, IoChevronUp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaUser, FaReact, FaUserCircle } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { PiHeartStraightFill,PiHeartStraightLight } from "react-icons/pi";
import useWindowSize from '../hooks/useWindowSize';
import useHover from '../hooks/useHover';



const Header = () => {
    const {darkMode} = useSelector(state=>state.theme);
    const dispatch = useDispatch();
    const [expand,setExpand] = useState(false);
    const {width,isMobile} = useWindowSize();

    // const [hoverRef,isHovered] = useHover();
    // useEffect(()=>{
    //     if(isHovered) setExpand(true);
    // },[isHovered])

    useEffect(()=>{
        if(!isMobile) setExpand(true);
        else setExpand(false);
    },[isMobile])


    const ref = useRef(null);

    useEffect(()=>{
        const outsideClickHandler = (event)=>{
            if(ref.current && !ref.current.contains(event.target) && isMobile){
                setExpand(false);
            }
        }
        document.addEventListener('click',outsideClickHandler,true);
        return ()=>{
            document.removeEventListener('click',outsideClickHandler,true);
        }
    },[])

    return (
        <div className={`${darkMode ? 'dark' : ''}`}>
            <div className='w-full fixed top-0 left-0 bg-neutral-200 dark:bg-slate-900 px-2 sm:px-10 md:px-15 lg:px-25 xl:px-30 font-segoeUI transition-all duration-300 z-10' ref={ref}>
                <nav className={`${expand && width<640 ? "h-28" : ""} ${!expand && width<640 ? "h-10" : ""} transition-all duration-150 py-2 flex flex-row-reverse gap-4 justify-between items-center text-center text-sm sm:text-base`}>
                    
                    {/* theme switch and resume button */}
                    <div className='flex gap-2 items-center justify-evenly'>
                        {/* resume button */}
                        <a href="https://drive.google.com/file/d/1fr2JMHolR1VbAC4Mv7v2Pp3l__GoWiPl/view?usp=sharing" className='cursor-pointer text-white dark:text-white px-2 py-1 rounded-lg bg-teal-600 hover:scale-110 duration-150'>Resume</a>
                        {/* theme switch button */}
                        <div className='cursor-pointer text-2xl rounded-full p-1.5 text-teal-600 dark:text-teal-400 hover:text-teal-400 dark:hover:text-teal-600 hover:bg-black dark:hover:bg-neutral-200' onClick={()=>dispatch(changeTheme())}>
                            {darkMode ? <IoSunny /> : <BsFillMoonStarsFill/>}
                        </div>
                    </div>

                    {/* links */}
                    <>
                        <div className={`flex flex-wrap items-center justify-start gap-1 md:gap-2 text-black dark:text-white`}>

                            <Link to='about' spy={true} smooth={true} offset={0} duration={500} activeClass='act' className={`rounded-lg flex items-center ${!expand ? "justify-center w-8 h-8" : "justify-start h-8 px-1"} cursor-pointer gap-2 md:px-2 md:py-5`}>
                                <FaUserCircle size={20}/>
                                <h1 className={`${!expand ? "hidden" : ""}`}>About Me</h1>
                            </Link>
                            <Link to='projects' spy={true} smooth={true} offset={10} duration={500} activeClass='act' className={`rounded-lg  flex items-center ${!expand ? "justify-center w-8 h-8" : "justify-start h-8 px-1"} cursor-pointer gap-2 md:px-2 md:py-5`}>
                                <FaCode size={20}/>
                                <h1 className={`${!expand ? "hidden" : ""}`}>Projects</h1>
                            </Link>
                            <Link to='services' spy={true} smooth={true} offset={10} duration={500} activeClass='act' className={`rounded-lg  flex items-center ${!expand ? "justify-center w-8 h-8" : "justify-start h-8 px-1"} cursor-pointer gap-2 md:px-2 md:py-5`}>
                                <MdDesignServices size={20}/>
                                <h1 className={`${!expand ? "hidden" : ""}`}>Services</h1>
                            </Link>
                            <Link to='stack' spy={true} smooth={true} offset={0} duration={500} activeClass='act' className={`rounded-lg  flex items-center ${!expand ? "justify-center w-8 h-8" : "justify-start h-8 px-1"} cursor-pointer gap-2 md:px-2 md:py-5`}>
                                <FaReact size={20}/>
                                <h1 className={`${!expand ? "hidden" : ""}`}>Tech Stack</h1>
                            </Link>
                            <Link to='contact' spy={true} smooth={true} offset={0} duration={500} activeClass='act' className={`rounded-lg  flex items-center ${!expand ? "justify-center w-8 h-8" : "justify-start h-8 px-1"} cursor-pointer gap-2 md:px-2 md:py-5`}>
                                <IoIosMail size={20}/>
                                <h1 className={`${!expand ? "hidden" : ""}`}>Contact</h1>
                            </Link>

                            {/* <button className={`rounded-lg  flex items-center ${!expand ? "w-16 h-8" : "w-16 h-8"} justify-center cursor-pointer gap-2`}>
                                <PiHeartStraightLight size={20}/>
                                <h1>125</h1>
                            </button> */}

                            {isMobile ? <button className={`rounded-lg  flex items-center ${!expand ? "w-8 h-8" : "w-8 h-8"} justify-center cursor-pointer gap-2`} onClick={()=>setExpand(prev=>!prev)}>
                                {expand ? <IoChevronUp/> : <IoChevronDown/>}
                            </button> : null}

                        </div>
                    </>
                </nav>
                {/* sidebar */}
                {/* {width>640 ? <>
                    <div className={`${!expand ? "w-14" : "w-40"} duration-150 h-dvh absolute left-0 top-0 py-4 px-1 bg-neutral-400/20 dark:bg-neutral-700/20 rounded-r-xl flex flex-col gap-5 items-center justify-between dark:text-white`}>

                        <button ref={hoverRef} className={`rounded-lg ${!expand ? "w-2/3" : "w-1/4"} h-8 bg-neutral-200/20 flex items-center justify-center`} onClick={()=>setExpand(prev=>!prev)}>
                            {expand ? <IoChevronBackOutline/> : <IoChevronForward/>}
                        </button>

                        <div className={`w-full mx-auto flex flex-col gap-2 justify-center items-center`}>
                            <Link to='about' spy={true} smooth={true} offset={0} duration={500} activeClass='act' className={`rounded-lg w-11/12 h-9 px-3 flex items-center ${!expand ? "justify-center" : "justify-start"} cursor-pointer gap-2`}>
                                <FaUser size={20}/>
                                <h1 className={`${!expand ? "hidden" : ""}`}>About Me</h1>
                            </Link>
                            <Link to='projects' spy={true} smooth={true} offset={10} duration={500} activeClass='act' className={`rounded-lg w-11/12 h-9  px-3 flex items-center ${!expand ? "justify-center" : "justify-start"} cursor-pointer gap-2`}>
                                <FaCode size={20}/>
                                <h1 className={`${!expand ? "hidden" : ""}`}>Projects</h1>
                            </Link>
                            <Link to='services' spy={true} smooth={true} offset={10} duration={500} activeClass='act' className={`rounded-lg w-11/12 h-9  px-3 flex items-center ${!expand ? "justify-center" : "justify-start"} cursor-pointer gap-2`}>
                                <MdDesignServices size={20}/>
                                <h1 className={`${!expand ? "hidden" : ""}`}>Services</h1>
                            </Link>
                            <Link to='stack' spy={true} smooth={true} offset={0} duration={500} activeClass='act' className={`rounded-lg w-11/12 h-9  px-3 flex items-center ${!expand ? "justify-center" : "justify-start"} cursor-pointer gap-2`}>
                                <FaReact size={20}/>
                                <h1 className={`${!expand ? "hidden" : ""}`}>Tech Stack</h1>
                            </Link>
                            <Link to='contact' spy={true} smooth={true} offset={0} duration={500} activeClass='act' className={`rounded-lg w-11/12 h-9  px-3 flex items-center ${!expand ? "justify-center" : "justify-start"} cursor-pointer gap-2`}>
                                <IoIosMail size={20}/>
                                <h1 className={`${!expand ? "hidden" : ""}`}>Contact</h1>
                            </Link>
                        </div>

                        <button className={`rounded-lg w-11/12 h-9 flex gap-1 items-center justify-center`}>
                            
                            {expand ? <h1 className='text-sm'>Made with &hearts; by Harsh Priye</h1> : <PiHeartStraightFill size={20}/>}

                        </button>

                    </div>
                </> : null} */}
            </div>
        </div>
    )
}

export default Header