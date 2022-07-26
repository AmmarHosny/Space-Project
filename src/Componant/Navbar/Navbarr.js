import React, { Fragment } from 'react'
import "../../App.css"
import {Link} from "react-router-dom"



const Navbarr = () => {
    return (
        <Fragment>
            <nav className='postion-fixed'>
                <div className='container py-4'>
                    <img src='logo.svg' alt=""></img>
                    <div className='d-flex'>
                        
                        <div>
                            <ul className='d-flex'>
                            <Link to ='/'><li>00 HOME</li></Link>
                            <Link to ='/Deistination'><li> 01 DEISTINATION</li></Link>
                            <Link to ='/Crew'><li>02 CREW</li></Link>
                            <Link to ='/Technology'><li> 03 TECHNOLOGY</li></Link>
                            </ul>
                        
                        </div>
                        
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbarr