import React from 'react';;
import {SiLeetcode, SiLinkedin, SiGithub, SiPostcss,
SiPostgresql,SiHtml5,SiCss3,SiJavascript,SiReact,SiRedux,SiFramer,SiTailwindcss,
SiExpress,SiSocketdotio,SiNodedotjs,SiVercel,SiPython,SiTensorflow,SiScikitlearn,
SiStreamlit,SiFlask,SiAppwrite,SiFirebase,SiMysql,SiMongodb,SiHeroku,SiAntdesign,
SiChartdotjs,SiFastapi,SiAmazonaws,SiNetlify,SiOpencv,SiRedis,SiAzuredevops,SiFirefoxbrowser} from 'react-icons/si';
import { HiSquare3Stack3D } from "react-icons/hi2";
import { BsWindowFullscreen } from "react-icons/bs";
import { FaServer } from "react-icons/fa6";
import { AiOutlineApi } from "react-icons/ai";
import { GiArtificialIntelligence } from "react-icons/gi";





function ProjectCard({dark,title,description,stack=[],applink,code,image}) {
    return (
        <div className={`${dark ? "dark" : ""} inline-block mx-auto mb-5`}>
            <div className='flex flex-col p-4 items-center justify-evenly rounded-lg shadow-2xl dark:shadow-dark dark:text-white  gap-y-5'>
                {/* image */}
                <div className=' w-full rounded-lg overflow-hidden'>
                    <img src={image} alt="thumbnail" />
                </div>
                {/* description and tech stack */}
                <div className=' flex flex-col w-full gap-y-2 items-center'>
                    {/* description */}
                    <div className='flex flex-col items-center text-center gap-y-2 mb-2'>
                        {/* title */}
                        <div className='text-4xl'>{title}</div>
                        {/* description */}
                        <div className='text-gray-600 dark:text-gray-400 w-10/12'>{description}</div>
                    </div>
                    {/* tech stack */}
                    <div className=' gap-x-4 flex flex-wrap items-center justify-center text-center'>
                        {stack.map(tech => {
                            if(tech=='react'){
                                return (<div key={tech} className='flex  items-center gap-x-1'><SiReact /><span className='text-sm'>React JS</span></div>)
                            }
                            if(tech=='redux'){
                                return (<div key={tech} className='flex  items-center gap-x-1'><SiRedux /><span className='text-sm'>Redux-Toolkit</span></div>)
                            }
                            if(tech=='express'){
                                return (<div key={tech} className='flex  items-center gap-x-1'><SiExpress /><span className='text-sm'>Express JS</span></div>)
                            }
                            if(tech=='tailwind'){
                                return (<div key={tech} className='flex  items-center gap-x-1'><SiTailwindcss /><span className='text-sm'>Tailwind CSS</span></div>)
                            }
                            if(tech=='css'){
                                return (<div key={tech} className='flex  items-center gap-x-1'><SiCss3 /><span className='text-sm'>Vanilla CSS</span></div>)
                            }
                            if(tech=='node'){
                                return (<div key={tech} className='flex  items-center gap-x-1'><SiNodedotjs /><span className='text-sm'>Node JS</span></div>)
                            }
                            if(tech=='mongodb'){
                                return (<div key={tech} className='flex  items-center gap-x-1'><SiMongodb /><span className='text-sm'>Mongo DB</span></div>)
                            }
                            if(tech=='appwrite'){
                                return (<div key={tech} className='flex  items-center gap-x-1'><SiAppwrite /><span className='text-sm'>Appwrite</span></div>)
                            }
                            if(tech=='python'){
                                return (<div key={tech} className='flex  items-center gap-x-1'><SiPython /><span className='text-sm'>Python</span></div>)
                            }
                            if(tech=='tensorflow'){
                                return (<div key={tech} className='flex  items-center gap-x-1'><SiTensorflow /><span className='text-sm'>TensorFlow</span></div>)
                            }
                            if(tech=='sklearn'){
                                return (<div key={tech} className='flex  items-center gap-x-1'><SiScikitlearn /><span className='text-sm'>Scikit-Learn</span></div>)
                            }
                            if(tech=='flask'){
                                return (<div key={tech} className='flex  items-center gap-x-1'><SiFlask /><span className='text-sm'>Flask</span></div>)
                            }
                            if(tech=='streamlit'){
                                return (<div key={tech} className='flex  items-center gap-x-1'><SiStreamlit /><span className='text-sm'>Streamlit</span></div>)
                            }
                            if(tech=='opencv'){
                                return (<div key={tech} className='flex  items-center gap-x-1'><SiOpencv /><span className='text-sm'>OpenCV</span></div>)
                            }
                            if(tech=='socket'){
                                return (<div key={tech} className='flex  items-center gap-x-1'><SiSocketdotio /><span className='text-sm'>Socket.io</span></div>)
                            }
                            if(tech=='fastapi'){
                                return (<div key={tech} className='flex  items-center gap-x-1'><SiFastapi /><span className='text-sm'>FastAPI</span></div>)
                            }
                            if(tech=='aws'){
                                return (<div key={tech} className='flex  items-center gap-x-1'><SiAmazonaws/><span className='text-sm'>AWS</span></div>)
                            }
                            if(tech=='antd'){
                                return (<div key={tech} className='flex  items-center gap-x-1'><SiAntdesign/><span className='text-sm'>Ant Design</span></div>)
                            }
                            if(tech=='chartjs'){
                                return (<div key={tech} className='flex  items-center gap-x-1'><SiChartdotjs/><span className='text-sm'>Chart.js</span></div>)
                            }
                            if(tech=='vercel'){
                                return (<div key={tech} className='flex  items-center gap-x-1'><SiVercel/><span className='text-sm'>Vercel</span></div>)
                            }
                            if(tech=='heroku'){
                                return (<div key={tech} className='flex  items-center gap-x-1'><SiHeroku/><span className='text-sm'>Heroku</span></div>)
                            }
                            if(tech=='devops'){
                                return (<div key={tech} className='flex  items-center gap-x-1'><SiAzuredevops/><span className='text-sm'>DevOps</span></div>)
                            }
                            if(tech=='mlops'){
                                return (<div key={tech} className='flex  items-center gap-x-1'><SiAzuredevops/><span className='text-sm'>MLOps</span></div>)
                            }
                            if(tech=='fullstack'){
                                return (<div key={tech} className='flex  items-center gap-x-1'><HiSquare3Stack3D/><span className='text-sm'>Full Stack</span></div>)
                            }
                            if(tech=='frontend'){
                                return (<div key={tech} className='flex  items-center gap-x-1'><BsWindowFullscreen/><span className='text-sm'>Frontend</span></div>)
                            }
                            if(tech=='ui'){
                                return (<div key={tech} className='flex  items-center gap-x-1'><BsWindowFullscreen/><span className='text-sm'>UI</span></div>)
                            }
                            if(tech=='backend'){
                                return (<div key={tech} className='flex  items-center gap-x-1'><FaServer/><span className='text-sm'>Backend</span></div>)
                            }
                            if(tech=='api'){
                                return (<div key={tech} className='flex  items-center gap-x-1'><AiOutlineApi/><span className='text-sm'>API</span></div>)
                            }
                            if(tech=='firefox'){
                                return (<div key={tech} className='flex  items-center gap-x-1'><SiFirefoxbrowser/><span className='text-sm'>Backend</span></div>)
                            }
                            if(tech=='ml'){
                                return (<div key={tech} className='flex  items-center gap-x-1'><GiArtificialIntelligence/><span className='text-sm'>Machine Learning</span></div>)
                            }
                            if(tech=='dl'){
                                return (<div key={tech} className='flex  items-center gap-x-1'><GiArtificialIntelligence/><span className='text-sm'>Deep Learning</span></div>)
                            }
                        })}
                    </div>
                    {/* links */}
                    <div className='flex items-center justify-between gap-x-1 mt-3 underline'>
                        {applink ? (<><SiFirefoxbrowser /> <a href={applink} target='_blank' className='mr-4'>App Link</a></>) : <></>}
                        <SiGithub/> <a href={code} target='_blank' className=''>Source Code</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;