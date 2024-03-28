import React, { useEffect, useState } from 'react'


const useWindowSize = () => {
    const [width,setWidth] = useState(window.innerWidth);
    useEffect(()=>{
        const updateWidth = ()=>{
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize',updateWidth);
        return ()=>{
            window.removeEventListener('resize',updateWidth);
        }
    },[])

    return {
        isMobile: width <= 768,
        isTablet: width > 768 && width < 1200,
        isDesktop: width >= 1200,
        width
    }
}

export default useWindowSize;