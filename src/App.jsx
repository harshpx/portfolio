import { useSelector } from 'react-redux';
import {NavLink, useNavigate, BrowserRouter, Routes, Route} from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Header from './components/Header.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Services from './pages/Services.jsx';
import Stack from './pages/Stack.jsx';
import Contact from './pages/Contact.jsx';
import Root from './Root.jsx';


function App() {

    const {darkMode} = useSelector(state=>state.theme);


    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={<Root/>}>
                        <Route path='/' element={<About/>}/>
                        <Route path='/projects' element={<Projects/>}/>
                        <Route path='/services' element={<Services/>}/>
                        <Route path='/stack' element={<Stack/>}/>
                        <Route path='/contact' element={<Contact/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>

            <ToastContainer autoClose={5000} theme={`${darkMode ? 'dark' : 'light'}`}/>
        </>
    )
}

export default App;
