import React from 'react';;
import { SiCss3, SiTailwindcss, SiExpress, SiMongodb, SiNodedotjs, SiReact, SiRedux, SiGithub, SiFirefoxbrowser, SiTensorflow, SiScikitlearn, SiPython, SiStreamlit, SiFlask, SiAppwrite, SiOpencv} from "react-icons/si";


function ProjectCard({dark,title,description,stack=[],applink,code,image}) {
    return (
        <div className={`${dark ? "dark" : ""} inline-block mx-auto mb-5`}>
            <div className='flex flex-col p-4 items-center justify-evenly rounded-lg dark:text-white border-2 border-gray-600 dark:border-neutral-400 gap-y-5'>
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
                                return (<div className='flex  items-center gap-x-1'><SiReact /><span className='text-sm'>React JS</span></div>)
                            }
                            if(tech=='redux'){
                                return (<div className='flex  items-center gap-x-1'><SiRedux /><span className='text-sm'>Redux-Toolkit</span></div>)
                            }
                            if(tech=='express'){
                                return (<div className='flex  items-center gap-x-1'><SiExpress /><span className='text-sm'>Express JS</span></div>)
                            }
                            if(tech=='tailwind'){
                                return (<div className='flex  items-center gap-x-1'><SiTailwindcss /><span className='text-sm'>Tailwind CSS</span></div>)
                            }
                            if(tech=='css'){
                                return (<div className='flex  items-center gap-x-1'><SiCss3 /><span className='text-sm'>Vanilla CSS</span></div>)
                            }
                            if(tech=='node'){
                                return (<div className='flex  items-center gap-x-1'><SiNodedotjs /><span className='text-sm'>Node JS</span></div>)
                            }
                            if(tech=='mongodb'){
                                return (<div className='flex  items-center gap-x-1'><SiMongodb /><span className='text-sm'>Mongo DB</span></div>)
                            }
                            if(tech=='appwrite'){
                                return (<div className='flex  items-center gap-x-1'><SiAppwrite /><span className='text-sm'>Appwrite</span></div>)
                            }
                            if(tech=='python'){
                                return (<div className='flex  items-center gap-x-1'><SiPython /><span className='text-sm'>Python</span></div>)
                            }
                            if(tech=='tensorflow'){
                                return (<div className='flex  items-center gap-x-1'><SiTensorflow /><span className='text-sm'>TensorFlow</span></div>)
                            }
                            if(tech=='sklearn'){
                                return (<div className='flex  items-center gap-x-1'><SiScikitlearn /><span className='text-sm'>Scikit-Learn</span></div>)
                            }
                            if(tech=='flask'){
                                return (<div className='flex  items-center gap-x-1'><SiFlask /><span className='text-sm'>Flask</span></div>)
                            }
                            if(tech=='streamlit'){
                                return (<div className='flex  items-center gap-x-1'><SiStreamlit /><span className='text-sm'>Streamlit</span></div>)
                            }
                            if(tech=='opencv'){
                                return (<div className='flex  items-center gap-x-1'><SiOpencv /><span className='text-sm'>OpenCV</span></div>)
                            }

                        })}
                        {/* <div className='flex  items-center gap-x-1'><SiTailwindcss /><span className='text-sm'>Tailwind CSS</span></div>
                        <div className='flex  items-center gap-x-1'><SiExpress /><span className='text-sm'>Express JS</span></div>
                        <div className='flex  items-center gap-x-1'><SiExpress /><span className='text-sm'>Express JS</span></div>
                        <div className='flex  items-center gap-x-1'><SiExpress /><span className='text-sm'>Express JS</span></div> */}
                    </div>
                    {/* links */}
                    <div className='flex items-center justify-between gap-x-1 mt-3'>
                        {applink ? (<><SiFirefoxbrowser /> <a href={applink} className='mr-4'>App Link</a></>) : <></>}
                        <SiGithub/> <a href={code} className=''>Source Code</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;