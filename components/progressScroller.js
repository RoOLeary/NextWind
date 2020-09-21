import React, { useState, useEffect } from 'react'; 

const ProgressScroller = (props) => {

    const brandColor = props.brandcolor ? props.brandcolor : '#00FF00';
    const [ scrollTotal, setScrollTotal ] = useState(0); 

    const progressBar = () => {
        const scrollPx = document.documentElement.scrollTop; 
        const winHeightPx = 
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight; 
        const scrolled = `${scrollPx / winHeightPx * 100}%`;
        setScrollTotal(scrolled);
    };

    useEffect(() => {
        window.addEventListener("scroll", progressBar);
    },[]);

    const progressMainWrapper = {
        background: "rgba(255, 255, 255, 0.14)",
        height: "5px",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 999,
        width: "100%"
    }

    const progressMainStyle = {
        height: "5px",
        background: brandColor, 
        width: scrollTotal ? scrollTotal : 0
    };

    return(
        <div className="progressBar" style={progressMainWrapper}>
            <div style={progressMainStyle} />
        </div>
    ); 
}

export default ProgressScroller