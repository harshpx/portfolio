import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Modal } from 'antd';
import useWindowSize from '../hooks/useWindowSize';

import {SiLeetcode, SiLinkedin, SiGithub, SiPostcss,
    SiPostgresql,SiHtml5,SiCss3,SiJavascript,SiReact,SiRedux,SiFramer,SiTailwindcss,
    SiExpress,SiSocketdotio,SiNodedotjs,SiVercel,SiPython,SiTensorflow,SiScikitlearn,
    SiStreamlit,SiFlask,SiAppwrite,SiFirebase,SiMysql,SiMongodb,SiGnubash,SiHeroku,SiAntdesign,
    SiChartdotjs,SiFastapi,SiAmazonaws,SiNetlify,SiOpencv,SiRedis} from 'react-icons/si';
import { FcLinux } from "react-icons/fc";
import { TbBrandCpp } from "react-icons/tb";


const StackGroup = ({title,stack}) => {
    const {darkMode} = useSelector(state=>state.theme)
    const [showModal,setShowModal] = useState(false)
    const {isMobile} = useWindowSize()
    return (
        <div className={`${darkMode ? 'dark' : ''}`}>
            <div onClick={()=>setShowModal(true)} className='flex flex-col gap-5 items-center rounded-xl shadow-2xl dark:shadow-dark p-6 cursor-pointer hover:scale-105 transition-all duration-200'>
                <div className='grid grid-cols-2 gap-5 xl:gap-7'>
                    {stack?.slice(0,(stack.length<4 ? stack.length : 4))?.map(tech => {
                        if(tech=='html'){
                            return (<div key={tech}><SiHtml5 className='size-24 md:size-26 lg:size-28 xl:size-28 text-orange-600'/></div>)
                        }
                        if(tech=='css'){
                            return (<div key={tech}><SiCss3 className='size-24 md:size-26 lg:size-28 xl:size-28 text-blue-400'/></div>)
                        }
                        if(tech=='js'){
                            return (<div key={tech}><SiJavascript className='size-24 md:size-26 lg:size-28 xl:size-28 text-yellow-500'/></div>)
                        }
                        if(tech=='react'){
                            return (<div key={tech}><SiReact className='size-24 md:size-26 lg:size-28 xl:size-28 text-cyan-500 dark:text-teal-300'/></div>)
                        }
                        if(tech=='redux'){
                            return (<div key={tech}><SiRedux className='size-24 md:size-26 lg:size-28 xl:size-28 text-violet-400'/></div>)
                        }
                        if(tech=='tailwind'){
                            return (<div key={tech}><SiTailwindcss className='size-24 md:size-26 lg:size-28 xl:size-28 text-cyan-400'/></div>)
                        }
                        if(tech=='antd'){
                            return (<div key={tech}><SiAntdesign className='size-24 md:size-26 lg:size-28 xl:size-28 text-[#067aff]'/></div>)
                        }
                        if(tech=='chartjs'){
                            return (<div key={tech}><SiChartdotjs className='size-24 md:size-26 lg:size-28 xl:size-28 text-[#fe8285]'/></div>)
                        }
                        if(tech=='framer'){
                            return (<div key={tech}><SiFramer className='size-24 md:size-26 lg:size-28 xl:size-28'/></div>)
                        }
                        if(tech=='node'){
                            return (<div key={tech}><SiNodedotjs className='size-24 md:size-26 lg:size-28 xl:size-28 text-green-500'/></div>)
                        }
                        if(tech=='express'){
                            return (<div key={tech}><SiExpress className='size-24 md:size-26 lg:size-28 xl:size-28 text-yellow-500'/></div>)
                        }
                        if(tech=='socket'){
                            return (<div key={tech}><SiSocketdotio className='size-24 md:size-26 lg:size-28 xl:size-28'/></div>)
                        }
                        if(tech=='mongodb'){
                            return (<div key={tech}><SiMongodb className='size-24 md:size-26 lg:size-28 xl:size-28 text-green-500'/></div>)
                        }
                        if(tech=='mysql'){
                            return (<div key={tech}><SiMysql className='size-24 md:size-26 lg:size-28 xl:size-28 text-blue-500'/></div>)
                        }
                        if(tech=='postgres'){
                            return (<div key={tech}><SiPostgresql className='size-24 md:size-26 lg:size-28 xl:size-28'/></div>)
                        }
                        if(tech=='redis'){
                            return (<div key={tech}><SiRedis className='size-24 md:size-26 lg:size-28 xl:size-28 text-[#d9362e]'/></div>)
                        }
                        if(tech=='linux'){
                            return (<div key={tech}><FcLinux className='size-24 md:size-26 lg:size-28 xl:size-28 text-yellow-400'/></div>)
                        }
                        if(tech=='bash'){
                            return (<div key={tech}><SiGnubash className='size-24 md:size-26 lg:size-28 xl:size-28 text-green-500'/></div>)
                        }
                        if(tech=='cpp'){
                            return (<div key={tech}><TbBrandCpp className='size-24 md:size-26 lg:size-28 xl:size-28 text-[#963cae]'/></div>)
                        }
                        if(tech=='python'){
                            return (<div key={tech}><SiPython className='size-24 md:size-26 lg:size-28 xl:size-28 text-[#316b99]'/></div>)
                        }
                        if(tech=='tensorflow'){
                            return (<div key={tech}><SiTensorflow className='size-24 md:size-26 lg:size-28 xl:size-28 text-[#ff8408]'/></div>)
                        }
                        if(tech=='sklearn'){
                            return (<div key={tech}><SiScikitlearn className='size-24 md:size-26 lg:size-28 xl:size-28'/></div>)
                        }
                        if(tech=='flask'){
                            return (<div key={tech}><SiFlask className='size-24 md:size-26 lg:size-28 xl:size-28'/></div>)
                        }
                        if(tech=='fastapi'){
                            return (<div key={tech}><SiFastapi className='size-24 md:size-26 lg:size-28 xl:size-28 text-[#05998b]'/></div>)
                        }
                        if(tech=='streamlit'){
                            return (<div key={tech}><SiStreamlit className='size-24 md:size-26 lg:size-28 xl:size-28 text-red-500'/></div>)
                        }
                        if(tech=='opencv'){
                            return (<div key={tech}><SiOpencv className='size-24 md:size-26 lg:size-28 xl:size-28'/></div>)
                        }
                        if(tech=='heroku'){
                            return (<div key={tech}><SiHeroku className='size-24 md:size-26 lg:size-28 xl:size-28 text-purple-500'/></div>)
                        }
                        if(tech=='aws'){
                            return (<div key={tech}><SiAmazonaws className='size-24 md:size-26 lg:size-28 xl:size-28 text-[#ff9900]'/></div>)
                        }
                        if(tech=='vercel'){
                            return (<div key={tech}><SiVercel className='size-24 md:size-26 lg:size-28 xl:size-28 text-neutral-600'/></div>)
                        }
                        if(tech=='netlify'){
                            return (<div key={tech}><SiNetlify className='size-24 md:size-26 lg:size-28 xl:size-28 text-[#4cb1bf]'/></div>)
                        }
                        if(tech=='firebase'){
                            return (<div key={tech}><SiFirebase className='size-24 md:size-26 lg:size-28 xl:size-28 text-yellow-500'/></div>)
                        }
                        if(tech=='appwrite'){
                            return (<div key={tech}><SiAppwrite className='size-24 md:size-26 lg:size-28 xl:size-28 text-pink-400'/></div>)
                        }
                    })}
                </div>
                <h1 className='text-xl md:2xl text-center'>{title}</h1>
            </div>
            <Modal
            title={null}
            footer={null}
            open={showModal}
            closeIcon={!isMobile?false:true}
            onCancel={()=>setShowModal(false)}
            onOk={()=>setShowModal(false)}
            centered
            styles={{
    			content: {color:darkMode?'white':'black', backgroundColor:darkMode?'#0f172a':'#e5e5e5', boxShadow:'0 25px 50px -12px rgb(0 0 0 / 0.25)', border:darkMode?'1px solid #a3a3a3':'', maxWidth:'90%', overflow:'scroll'},
  			}}
            className={darkMode?"custom-close-button":""}
            >
                <div className='grid grid-cols-2 md:grid-cols-3 gap-10 gap-x-32 p-12'>
                    {stack?.map(tech => {
                        if(tech=='html'){
                            return (<div key={tech} className='flex flex-col gap-2 items-center justify-center'>
                                <SiHtml5 className='size-24 md:size-26 lg:size-28 xl:size-28 text-orange-600'/>
                                <span className='text-md text-center text-nowrap'>HTML5</span>
                            </div>)
                        }
                        if(tech=='css'){
                            return (<div key={tech} className='flex flex-col gap-2 items-center justify-center'>
                                <SiCss3 className='size-24 md:size-26 lg:size-28 xl:size-28 text-blue-400'/>
                                <span className='text-md text-center text-nowrap'>CSS3</span>
                            </div>)
                        }
                        if(tech=='js'){
                            return (<div key={tech} className='flex flex-col gap-2 items-center justify-center'>
                                <SiJavascript className='size-24 md:size-26 lg:size-28 xl:size-28 text-yellow-500'/>
                                <span className='text-md text-center text-nowrap'>Javascript</span>
                            </div>)
                        }
                        if(tech=='react'){
                            return (<div key={tech} className='flex flex-col gap-2 items-center justify-center'>
                                <SiReact className='size-24 md:size-26 lg:size-28 xl:size-28 text-cyan-500 dark:text-teal-300'/>
                                <span className='text-md text-center text-nowrap'>React.js</span>
                            </div>)
                        }
                        if(tech=='redux'){
                            return (<div key={tech} className='flex flex-col gap-2 items-center justify-center'>
                                <SiRedux className='size-24 md:size-26 lg:size-28 xl:size-28 text-violet-400'/>
                                <span className='text-md text-center text-nowrap'>Redux</span>
                            </div>)
                        }
                        if(tech=='tailwind'){
                            return (<div key={tech} className='flex flex-col gap-2 items-center justify-center'>
                                <SiTailwindcss className='size-24 md:size-26 lg:size-28 xl:size-28 text-cyan-400'/>
                                <span className='text-md text-center text-nowrap'>Tailwind CSS</span>
                            </div>)
                        }
                        if(tech=='antd'){
                            return (<div key={tech} className='flex flex-col gap-2 items-center justify-center'>
                                <SiAntdesign className='size-24 md:size-26 lg:size-28 xl:size-28 text-[#067aff]'/>
                                <span className='text-md text-center text-nowrap'>Ant Design</span>
                            </div>)
                        }
                        if(tech=='chartjs'){
                            return (<div key={tech} className='flex flex-col gap-2 items-center justify-center'>
                                <SiChartdotjs className='size-24 md:size-26 lg:size-28 xl:size-28 text-[#fe8285]'/>
                                <span className='text-md text-center text-nowrap'>Chart.js</span>
                            </div>)
                        }
                        if(tech=='framer'){
                            return (<div key={tech} className='flex flex-col gap-2 items-center justify-center'>
                                <SiFramer className='size-24 md:size-26 lg:size-28 xl:size-28'/>
                                <span className='text-md text-center text-nowrap'>Framer</span>
                            </div>)
                        }
                        if(tech=='node'){
                            return (<div key={tech} className='flex flex-col gap-2 items-center justify-center'>
                                <SiNodedotjs className='size-24 md:size-26 lg:size-28 xl:size-28 text-green-500'/>
                                <span className='text-md text-center text-nowrap'>Node JS</span>
                            </div>)
                        }
                        if(tech=='express'){
                            return (<div key={tech} className='flex flex-col gap-2 items-center justify-center'>
                                <SiExpress className='size-24 md:size-26 lg:size-28 xl:size-28 text-yellow-500'/>
                                <span className='text-md text-center text-nowrap'>Express JS</span>
                            </div>)
                        }
                        if(tech=='socket'){
                            return (<div key={tech} className='flex flex-col gap-2 items-center justify-center'>
                                <SiSocketdotio className='size-24 md:size-26 lg:size-28 xl:size-28'/>
                                <span className='text-md text-center text-nowrap'>Socket.io</span>
                            </div>)
                        }
                        if(tech=='mongodb'){
                            return (<div key={tech} className='flex flex-col gap-2 items-center justify-center'>
                                <SiMongodb className='size-24 md:size-26 lg:size-28 xl:size-28 text-green-500'/>
                                <span className='text-md text-center text-nowrap'>MongoDB</span>
                            </div>)
                        }
                        if(tech=='mysql'){
                            return (<div key={tech} className='flex flex-col gap-2 items-center justify-center'>
                                <SiMysql className='size-24 md:size-26 lg:size-28 xl:size-28 text-blue-500'/>
                                <span className='text-md text-center text-nowrap'>MySQL</span>
                            </div>)
                        }
                        if(tech=='postgres'){
                            return (<div key={tech} className='flex flex-col gap-2 items-center justify-center'>
                                <SiPostgresql className='size-24 md:size-26 lg:size-28 xl:size-28'/>
                                <span className='text-md text-center text-nowrap'>PostgreSQL</span>
                            </div>)
                        }
                        if(tech=='redis'){
                            return (<div key={tech} className='flex flex-col gap-2 items-center justify-center'>
                                <SiRedis className='size-24 md:size-26 lg:size-28 xl:size-28 text-[#d9362e]'/>
                                <span className='text-md text-center text-nowrap'>Redis</span>
                            </div>)
                        }
                        if(tech=='linux'){
                            return (<div key={tech} className='flex flex-col gap-2 items-center justify-center'>
                                <FcLinux className='size-24 md:size-26 lg:size-28 xl:size-28 text-yellow-400'/>
                                <span className='text-md text-center text-nowrap'>Linux</span>
                            </div>)
                        }
                        if(tech=='bash'){
                            return (<div key={tech} className='flex flex-col gap-2 items-center justify-center'>
                                <SiGnubash className='size-24 md:size-26 lg:size-28 xl:size-28 text-green-500'/>
                                <span className='text-md text-center text-nowrap'>Bash</span>
                            </div>)
                        }
                        if(tech=='cpp'){
                            return (<div key={tech} className='flex flex-col gap-2 items-center justify-center'>
                                <TbBrandCpp className='size-24 md:size-26 lg:size-28 xl:size-28 text-[#963cae]'/>
                                <span className='text-md text-center text-nowrap'>C++</span>
                            </div>)
                        }
                        if(tech=='python'){
                            return (<div key={tech} className='flex flex-col gap-2 items-center justify-center'>
                                <SiPython className='size-24 md:size-26 lg:size-28 xl:size-28 text-[#316b99]'/>
                                <span className='text-md text-center text-nowrap'>Python</span>
                            </div>)
                        }
                        if(tech=='tensorflow'){
                            return (<div key={tech} className='flex flex-col gap-2 items-center justify-center'>
                                <SiTensorflow className='size-24 md:size-26 lg:size-28 xl:size-28 text-[#ff8408]'/>
                                <span className='text-md text-center text-nowrap'>Tensorflow</span>
                            </div>)
                        }
                        if(tech=='sklearn'){
                            return (<div key={tech} className='flex flex-col gap-2 items-center justify-center'>
                                <SiScikitlearn className='size-24 md:size-26 lg:size-28 xl:size-28'/>
                                <span className='text-md text-center text-nowrap'>Scikit-Learn</span>
                            </div>)
                        }
                        if(tech=='flask'){
                            return (<div key={tech} className='flex flex-col gap-2 items-center justify-center'>
                                <SiFlask className='size-24 md:size-26 lg:size-28 xl:size-28'/>
                                <span className='text-md text-center text-nowrap'>Flask</span>
                            </div>)
                        }
                        if(tech=='fastapi'){
                            return (<div key={tech} className='flex flex-col gap-2 items-center justify-center'>
                                <SiFastapi className='size-24 md:size-26 lg:size-28 xl:size-28 text-[#05998b]'/>
                                <span className='text-md text-center text-nowrap'>FastAPI</span>
                            </div>)
                        }
                        if(tech=='streamlit'){
                            return (<div key={tech} className='flex flex-col gap-2 items-center justify-center'>
                                <SiStreamlit className='size-24 md:size-26 lg:size-28 xl:size-28 text-red-500'/>
                                <span className='text-md text-center text-nowrap'>Streamlit</span>
                            </div>)
                        }
                        if(tech=='opencv'){
                            return (<div key={tech} className='flex flex-col gap-2 items-center justify-center'>
                                <SiOpencv className='size-24 md:size-26 lg:size-28 xl:size-28'/>
                                <span className='text-md text-center text-nowrap'>OpenCV</span>
                            </div>)
                        }
                        if(tech=='heroku'){
                            return (<div key={tech} className='flex flex-col gap-2 items-center justify-center'>
                                <SiHeroku className='size-24 md:size-26 lg:size-28 xl:size-28 text-purple-500'/>
                                <span className='text-md text-center text-nowrap'>Heroku</span>
                            </div>)
                        }
                        if(tech=='aws'){
                            return (<div key={tech} className='flex flex-col gap-2 items-center justify-center'>
                                <SiAmazonaws className='size-24 md:size-26 lg:size-28 xl:size-28 text-[#ff9900]'/>
                                <span className='text-md text-center text-nowrap'>AWS</span>
                            </div>)
                        }
                        if(tech=='vercel'){
                            return (<div key={tech} className='flex flex-col gap-2 items-center justify-center'>
                                <SiVercel className='size-24 md:size-26 lg:size-28 xl:size-28 text-neutral-600'/>
                                <span className='text-md text-center text-nowrap'>Vercel</span>
                            </div>)
                        }
                        if(tech=='netlify'){
                            return (<div key={tech} className='flex flex-col gap-2 items-center justify-center'>
                                <SiNetlify className='size-24 md:size-26 lg:size-28 xl:size-28 text-[#4cb1bf]'/>
                                <span className='text-md text-center text-nowrap'>Netlify</span>
                            </div>)
                        }
                        if(tech=='firebase'){
                            return (<div key={tech} className='flex flex-col gap-2 items-center justify-center'>
                                <SiFirebase className='size-24 md:size-26 lg:size-28 xl:size-28 text-yellow-500'/>
                                <span className='text-md text-center text-nowrap'>Firebase</span>
                            </div>)
                        }
                        if(tech=='appwrite'){
                            return (<div key={tech} className='flex flex-col gap-2 items-center justify-center'>
                                <SiAppwrite className='size-24 md:size-26 lg:size-28 xl:size-28 text-pink-400'/>
                                <span className='text-md text-center text-nowrap'>Appwrite</span>
                            </div>)
                        }
                    })}
                </div>
            </Modal>
        </div>
    )
}

export default StackGroup