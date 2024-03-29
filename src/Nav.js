import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100){
            handleShow(true);
        } else {
            handleShow(false)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll", transitionNavBar);
        return ()=> window.removeEventListener("scroll", transitionNavBar);
    }, []);
    
    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <div className = "nav_content">
                <img className="nav_logo"
                src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                 alt=""
                />
                <img className="nav_avatar"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIxIo0i7f40LMinBi7faUWmfu76GX_VQcYEg&usqp=CAU" 
                alt=""
                />
            </div>
          
          
        </div>
    )
}

export default Nav
