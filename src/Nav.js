import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";

function Nav() {
    const navBg='bg-[#111]'
    const[show,setShow]=useState(false)
    const history =useHistory()

    const transitionNavBar= () =>{
        if(window.scrollY>100){
            setShow(true)
        }
        else{
            setShow(false)
        }
    }

    useEffect(() =>{
        window.addEventListener("scroll",transitionNavBar)
        return() => window.removeEventListener("scroll",transitionNavBar)
    },[])

    return (
        <div className={`p-[10px] w-full h-14 z-100 fixed top-0 ${show && navBg} ease-in transition-all delay-500`}>
            <div className="flex justify-between">
                <span onClick={() => window.location.reload()}>
                <img
                    onClick={() => history.push("/")}
                    className="fixed top-[10px]  w-[80px] cursor-pointer" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netflix logo"/>
                </span>
                    <span onClick={() => window.location.reload()}>
                <img
                    onClick={() => history.push("/profile")}
                    className="fixed right-[20px] w-[30px] cursor-pointer" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="netflix avatar"/>

            </span>
                </div>
        </div>
    );
}

export default Nav;