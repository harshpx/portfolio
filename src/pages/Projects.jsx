import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ProjectCard from '../components/ProjectCard.jsx';

import MemoizeImg from '../assets/icons/memoize3.png';
import MiniBlogImg from '../assets/icons/miniblog.png';
import TealFoxImg from '../assets/icons/tealfox.png';
import DogBreedPred from '../assets/icons/dog-breed1.png';
import VAR from '../assets/icons/var.png';
import TTT from '../assets/icons/tic-tac-toe.png'
import MLAPI from '../assets/icons/ml-api.png';
import Comments from '../assets/icons/comments.png';
import Dashboard from '../assets/icons/dashboard.png';
import Weather from '../assets/icons/weather.png';
import Deepfake from '../assets/icons/deepfake.png';



import React from 'react'
import { useSelector } from 'react-redux';
import useWindowSize from '../hooks/useWindowSize.js';

const Projects = () => {

    const {darkMode} = useSelector(state=>state.theme);
    const {isMobile} = useWindowSize();

    return (
    <div className={`${darkMode ? 'dark' : ''}`}>
        <div className='bg-neutral-200 dark:bg-slate-900 px-5 sm:px-10 md:px-15 lg:px-25 xl:px-30 font-segoeUI transition-all duration-300'>
            <section id='projects' className={`min-h-screen  py-20`}>
                <div  className='dark:text-white flex flex-col items-center justify-center '>
                    <h1 className={`transition-all text-teal-600 dark:text-teal-400 text-5xl md:text-6xl mb-10`}>{`Projects`}</h1>
                    <div className='flex flex-wrap items-end justify-center gap-3 sm:w-11/12 xl:w-10/12'>

                            <div className='columns-1 md:columns-2 gap-5'>
                                {!isMobile ? 
                                <>
                                    <ProjectCard dark={darkMode} title="Mini Tic-Tac-Toe" description="A Multiplayer Tic-Tac-Toe Game, with In-Game Chat Feature." image={TTT} stack={['react','socket','express','tailwind','fullstack','vercel','heroku']} applink='https://mini-tic-tac-toe.vercel.app/' code='https://github.com/harshpx/tic-tac-toe-socket' />
                                    <ProjectCard dark={darkMode} title="Deepfake Detection" description="A CNN Based Deep-Learning Deepfake Detection App" image={Deepfake} stack={['python','tensorflow','opencv','fastapi','react','tailwind','dl','fullstack']} code='https://github.com/harshpx/deepfake-detection' />
                                    <ProjectCard dark={darkMode} title="Weather App" description="The Most Beautiful Weather App!" image={Weather} stack={['react','tailwind','antd','frontend','vercel']} applink='https://weather-harshpx.vercel.app/' code='https://github.com/harshpx/weather'/>
                                    <ProjectCard dark={darkMode} title="Comments" description="A three-level, Reusable comment section component made using React JS and Tailwind CSS " image={Comments} stack={['react','tailwind','frontend','vercel']} applink='https://commentbox.vercel.app' code='https://github.com/harshpx/comments-project' />
                                    <ProjectCard dark={darkMode} title="TealFox" description="UserStyle CSS custom theme for Firefox" image={TealFoxImg} stack={['css','firefox','ui']} code='https://github.com/harshpx/TealFox' />
                                    <ProjectCard dark={darkMode} title="Memoize Notes" description="A Full Stack, industry standard Notes App" image={MemoizeImg} stack={['react','tailwind','redux','express','node','mongodb','fullstack','vercel']} applink='https://memoize-notes.vercel.app/' code='https://github.com/harshpx/memoize' />
                                    <ProjectCard dark={darkMode} title="Dog Breed Identifier" description="A CNN based Deep-Learning Image Classification Model for Dog Breed Identification with React frontend and FastAPI server" image={DogBreedPred} stack={['react','tailwind','css','python','fastapi','tensorflow','dl','fullstack','vercel']} applink='https://dog-breed-identifier-client.vercel.app/' code='https://github.com/harshpx/Dog-Breed-Identifier-client' />
                                    <ProjectCard dark={darkMode} title="ml-api" description="Master API for all my Machine Learning/Deep Learning models" image={MLAPI} stack={['python','fastapi','tensorflow','opencv','ml','api','aws']} applink="https://mlapi.online" code='https://github.com/harshpx/ml-api' />
                                    <ProjectCard dark={darkMode} title="Dashboard" description="An Interactive Information Dashboard Component that fetches data from an API and Displays Results in a Beautiful Dashboard" image={Dashboard} stack={['react','tailwind','chartjs','antd','frontend','vercel']} applink='https://dashboard-harshpx.vercel.app' code='https://github.com/harshpx/dashboard'/>
                                    <ProjectCard dark={darkMode} title="MiniBlog" description="Micro-Blogging App" image={MiniBlogImg} stack={['react','redux','tailwind','appwrite']} applink='https://miniblogger.vercel.app/' code='https://github.com/harshpx/miniBlog' />
                                    <ProjectCard dark={darkMode} title="Virtual Assistant Referee" description="A CNN Based Deep-Learning Video Analysis Model for Player Contact Detection in Football" image={VAR} stack={['python','opencv','tensorflow','streamlit','dl']} applink='https://virtual-assistant-referee.streamlit.app/' code='https://github.com/harshpx/Virtual-Assistant-Referee' />
                                </> : 
                                <>
                                    <ProjectCard dark={darkMode} title="Mini Tic-Tac-Toe" description="A Multiplayer Tic-Tac-Toe Game, with In-Game Chat Feature." image={TTT} stack={['react','socket','express','tailwind','fullstack','vercel','heroku']} applink='https://mini-tic-tac-toe.vercel.app/' code='https://github.com/harshpx/tic-tac-toe-socket' />
                                    <ProjectCard dark={darkMode} title="Memoize Notes" description="A Full Stack, industry standard Notes App" image={MemoizeImg} stack={['react','tailwind','redux','express','node','mongodb','fullstack','vercel']} applink='https://memoize-notes.vercel.app/' code='https://github.com/harshpx/memoize' />
                                    <ProjectCard dark={darkMode} title="Deepfake Detection" description="A CNN Based Deep-Learning Deepfake Detection App" image={Deepfake} stack={['python','tensorflow','opencv','fastapi','react','tailwind','dl','fullstack']} code='https://github.com/harshpx/deepfake-detection' />
                                    <ProjectCard dark={darkMode} title="Weather App" description="The Most Beautiful Weather App!" image={Weather} stack={['react','tailwind','antd','frontend','vercel']} applink='https://weather-harshpx.vercel.app/' code='https://github.com/harshpx/weather'/>
                                    <ProjectCard dark={darkMode} title="Dog Breed Identifier" description="A CNN based Deep-Learning Image Classification Model for Dog Breed Identification with React frontend and FastAPI server" image={DogBreedPred} stack={['react','tailwind','css','python','fastapi','tensorflow','ml','fullstack','vercel']} applink='https://dog-breed-identifier-client.vercel.app/' code='https://github.com/harshpx/Dog-Breed-Identifier-client' />
                                    <ProjectCard dark={darkMode} title="ml-api" description="Master API for all my Machine Learning/Deep Learning models" image={MLAPI} stack={['python','fastapi','tensorflow','opencv','ml','api','aws']} applink="https://mlapi.online" code='https://github.com/harshpx/ml-api' />
                                    <ProjectCard dark={darkMode} title="Dashboard" description="An Interactive Information Dashboard Component that fetches data from an API and Displays Results in a Beautiful Dashboard" image={Dashboard} stack={['react','tailwind','chartjs','antd','frontend','vercel']} applink='https://dashboard-harshpx.vercel.app' code='https://github.com/harshpx/dashboard'/>
                                    <ProjectCard dark={darkMode} title="Comments" description="A three-level, Reusable comment section component made using React JS and Tailwind CSS " image={Comments} stack={['react','tailwind','frontend','vercel']} applink='https://commentbox.vercel.app' code='https://github.com/harshpx/comments-project' />
                                    <ProjectCard dark={darkMode} title="MiniBlog" description="Micro-Blogging App" image={MiniBlogImg} stack={['react','redux','tailwind','appwrite']} applink='https://miniblogger.vercel.app/' code='https://github.com/harshpx/miniBlog' />
                                    <ProjectCard dark={darkMode} title="Virtual Assistant Referee" description="A CNN Based Deep-Learning Video Analysis Model for Player Contact Detection in Football" image={VAR} stack={['python','opencv','tensorflow','streamlit','ml']} applink='https://virtual-assistant-referee.streamlit.app/' code='https://github.com/harshpx/Virtual-Assistant-Referee' />
                                    <ProjectCard dark={darkMode} title="TealFox" description="UserStyle CSS custom theme for Firefox" image={TealFoxImg} stack={['css','firefox','ui']} code='https://github.com/harshpx/TealFox' />
                                </>}
                            </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    )
}

export default Projects