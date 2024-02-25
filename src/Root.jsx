import { AnimatePresence, motion } from 'framer-motion';
import {Outlet, useLocation} from 'react-router-dom';

const Root = () => {
    const location = useLocation();
    return (
        <AnimatePresence initial={false} mode='sync'>
            <motion.div
            key={location.pathname}
            initial={{y:'20%'}}
            animate={{y:'0%'}}
            exit={{y:'-20%'}}
            transition={{duration:0.5}}
            className='absolute w-full min-h-screen'
            >
                <Outlet/>
            </motion.div>
            
        </AnimatePresence>
    )
}

export default Root;