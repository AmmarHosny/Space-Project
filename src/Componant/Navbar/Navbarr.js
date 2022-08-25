import React, { Fragment, useEffect, useRef, useState } from 'react'
import "../../App.css"
import {Link} from "react-router-dom"
import logo from './logo.svg'


const Navbarr = () => {
    const [show , setShow]= useState("")

    const mylinks = useRef()
    const showMenu = ()=>{
        mylinks.current.style="left:0"
    }
    const closeMenu=()=>{
        mylinks.current.style="left:770px"
    }
    return (
        <Fragment>
            <nav className='postion-fixed'>
                <div className='container py-4'>
                    <img src={logo} alt=""></img>
                    <div className='d-flex'>
                        <div>
                            <ul ref={mylinks}>
                            <Link to ='/'><li>00 HOME</li></Link>
                            <Link to ='/Deistination'><li> 01 DEISTINATION</li></Link>
                            <Link to ='/Crew'><li>02 CREW</li></Link>
                            <Link to ='/Technology'><li> 03 TECHNOLOGY</li></Link>
                            <div className='close'  onClick={closeMenu}>x</div>
                            </ul>
                        </div>
                        
                    </div>
                    <div className='menu' onClick={showMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
    
}

export default Navbarr