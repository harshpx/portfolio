import React, { useEffect, useRef, useState } from 'react'

const useHover = () => {
    const [isHover,setIsHover] = useState(false);
    const hoverRef = useRef(null);

    const enter = ()=>setIsHover(true);
    const leave = ()=>setIsHover(false);

    useEffect(()=>{
        const refCopy = hoverRef;
        refCopy.current.addEventListener("mouseenter", enter);
        refCopy.current.addEventListener("mouseleave", leave);

        return ()=>{
            refCopy.current.removeEventListener("mouseenter", enter);
            refCopy.current.removeEventListener("mouseleave", leave); 
        }
    },[])

    return [hoverRef,isHover];
}

export default useHover