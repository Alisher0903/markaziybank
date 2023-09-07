import React, { useState, useEffect } from 'react';
import "./style.css";

function ScrollToTopButton() {

    const [scrollX, setScrollX] = useState(window.screenX);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        window.addEventListener("mousemove", e => {
            setScrollX(e.screenX);
            setScrollY(e.screenY);
        });
    });

    return (
        <div>
            <div className="scroll" style={{ top: scrollY - 90, left: scrollX - 15 }}></div>
            <video autoPlay muted loop>
                <source style={{width: "100%"}} src='https://globaltourntravel.com/wp-content/uploads/2023/07/tour-online-video-cutter.com_.mp4#t=10' />
            </video>
        </div>
    );
}

export default ScrollToTopButton;