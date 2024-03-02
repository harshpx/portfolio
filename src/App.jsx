import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Header from './components/Header.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Services from './pages/Services.jsx';
import Stack from './pages/Stack.jsx';
import Contact from './pages/Contact.jsx';


function App() {

    const {darkMode} = useSelector(state=>state.theme);


    return (
        <>
            <Header/>
            <About/>
            <Projects/>
            <Services/>
            <Stack/>
            <Contact/>
            <ToastContainer autoClose={5000} theme={`${darkMode ? 'dark' : 'light'}`}/>
        </>
    )
}

export default App;
