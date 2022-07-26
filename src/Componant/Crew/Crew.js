import React, { Fragment, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import photo1 from "../../image/crew/image-douglas-hurley.png"
import photo2 from "../../image/crew/image-mark-shuttleworth.png"
import photo3 from "../../image/crew/image-victor-glover.png"
import photo4 from "../../image/crew/image-anousheh-ansari.png"


const Crew = () => {
    let photos = [
        {word:"COMMANDER", thename:"DOUGLAS HURLEY", theinfo:"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.", photo:photo1},
        {word:"MISSION SPECIALIST", thename:"MARK SHUTTLEWORTH", theinfo:"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.", photo:photo2},
        {word:"PILOT", thename:"VICTOR GLOVER", theinfo:"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.", photo:photo3},
        {word:"FLIGHT ENGINEER", thename:"ANOUSHEH ANSARI", theinfo:"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.", photo:photo4}
    ]
    let [value , setvalue] = useState(0)
    let  {word, thename, theinfo, photo }= photos[value]
    
    return (
        <Fragment>
            <div className='crew'>
                <div className='container'>
                    <Row>
                        <Col lg={6} className="text-crew">
                            <h2>02 MEET YOUR CREW</h2>
                            <span >{word}</span>
                            <h1>{thename}</h1>
                            <p>{theinfo}</p>
                            <ul>
                                {photos.map((e,index)=>(
                                    <li
                                        key={index}
                                        onClick={()=>{setvalue(index)}}  
                                        className={index === value ? "active" : "noactive"}>
                                    </li>
                                ))}
                            </ul>
                        </Col>
                        <Col lg={6}>
                                <img src={photo} alt="" ></img>
                        </Col>
                    </Row>
                </div>
            </div>
        </Fragment>
    )
}

export default Crew