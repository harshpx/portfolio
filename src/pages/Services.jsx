import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import CodeLogo from '../assets/icons/code_logo.png';
import CodeLogoLight from '../assets/icons/code_logo_light.png';
import APILogo from '../assets/icons/api_logo.png';
import AILogo from '../assets/icons/ai_logo.png';
import DesignLogo from '../assets/icons/design_logo.png';
import { useSelector } from 'react-redux';


const Services = () => {
    const {darkMode} = useSelector(state=>state.theme)
    return (
    <div className={`${darkMode ? 'dark' : ''}`}>
        <div className='bg-neutral-200 dark:bg-slate-900 px-5 sm:px-10 md:px-15 lg:px-25 xl:px-30 font-segoeUI transition-all duration-300'>
            <section id='services' className='min-h-screen mt-4 sm:mt-8 pt-12'>
                <div className='dark:text-white flex flex-col items-center justify-center '>
                    <h1 className='text-teal-600 dark:text-teal-400 text-5xl md:text-6xl mb-14'>Services</h1>
                    <div className='flex flex-col justify-center items-center gap-12 sm:gap-20 md:gap-24 lg:gap-28 px-4 sm:px-8 md:px-28 lg:px-32'>
                        
                        {/* services */}
                        <div className='flex flex-wrap sm:flex-nowrap items-center justify-center gap-5 w-full'>
                            <img src={darkMode ? CodeLogo : CodeLogoLight} alt="Code Logo" className='w-1/2 sm:w-1/3'/>
                            <div className=' flex flex-col gap-5 lg:gap-7 xl:gap-10 sm:w-1/2'>
                                <h1 className='text-4xl lg:text-5xl text-center sm:text-left'>End-to-End Website Development</h1>
                                <p className='text-center sm:text-left lg:text-xl text-gray-700 dark:text-gray-400'>As a full stack developer, I offer comprehensive website development services from start to finish. This includes both front-end and back-end development, ensuring a seamless user experience and robust functionality.</p>
                            </div>
                        </div>

                        <div className='flex flex-row-reverse flex-wrap sm:flex-nowrap items-center justify-center gap-5 lg:gap-7 xl:gap-10 w-full'>
                            <img src={DesignLogo} alt="Design Logo" className='w-1/2 sm:w-1/3'/>
                            <div className=' flex flex-col gap-5 lg:gap-7 sm:w-1/2'>
                                <h1 className='text-4xl lg:text-5xl text-center sm:text-right'>Web UI/UX Development</h1>
                                <p className='text-center sm:text-right lg:text-xl text-gray-700 dark:text-gray-400'>Whether you need a brand new website design or want to refresh the look and feel of an existing site, I leverage my design expertise to create stunning and intuitive interfaces that engage users and drive conversions.</p>
                            </div>
                        </div>

                        <div className='flex flex-wrap sm:flex-nowrap items-center justify-center gap-5 w-full'>
                            <img src={APILogo} alt="API Logo" className='w-1/2 sm:w-1/3'/>
                            <div className=' flex flex-col gap-5 lg:gap-7 xl:gap-10 sm:w-1/2'>
                                <h1 className='text-4xl lg:text-5xl text-center sm:text-left'>Production Grade API Development</h1>
                                <p className='text-center sm:text-left lg:text-xl text-gray-700 dark:text-gray-400'>I specialize in developing robust and scalable APIs to enable seamless communication between different software applications or services.<br/> Whether you need to integrate third-party services, connect disparate systems within your organization, or build a custom API for your application, I have the expertise to deliver tailored solutions.</p>
                            </div>
                        </div>

                        <div className='flex flex-row-reverse flex-wrap sm:flex-nowrap items-center justify-center gap-5 lg:gap-7 xl:gap-10 w-full'>
                            <img src={AILogo} alt="AI Logo" className='w-1/2 sm:w-1/3'/>
                            <div className=' flex flex-col gap-5 lg:gap-7 sm:w-1/2'>
                                <h1 className='text-4xl lg:text-5xl text-center sm:text-right'>AI Based Utility Solutions</h1>
                                <p className='text-center sm:text-right lg:text-xl text-gray-700 dark:text-gray-400'>Leveraging the power of artificial intelligence (AI) and machine learning (ML), I provide innovative solutions to solve complex business challenges and drive digital transformation.</p>
                            </div>
                        </div>

                            
                    </div>
                </div>
            </section>
        </div>
    </div>
    )
}

export default Services