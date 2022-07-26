import React, { Fragment, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import project1 from "../../image/technology/image-launch-vehicle-landscape.jpg"
import project2 from "../../image/technology/image-launch-vehicle-portrait.jpg"
import project3 from "../../image/technology/image-space-capsule-landscape.jpg"

const Technology = () => {
    let projects = [
        {nameProjects:"LAUNCH VEHICLE", infoProject:"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!", photoProject:project1},
        {nameProjects:"SPACEPORT", infoProject:"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.", photoProject:project2},
        {nameProjects:"SPACE CAPSULE", infoProject:"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.", photoProject:project3},
    ]
    let [value ,setvalue] = useState(0)
    let {nameProjects, infoProject, photoProject}= projects[value]
    return (
        <Fragment>
            <div className='technology'>
                <div className='container'>
                    <Row>
                        <Col lg={6} className="text-technology">
                            <h2>03 SPACE LAUNCH 101</h2>
                            <span>THE TERMINOLOGY...</span>
                            <h3>{nameProjects}</h3>
                            <p>{infoProject}</p>
                            <ul>
                                {projects.map((e,index)=>(
                                    <li
                                        key={index}
                                        onClick={()=>{setvalue(index)}}
                                        className={index===value? "active": "nonActive"}
                                    >{index + 1}</li>
                                ))}
                            </ul>
                        </Col>
                        <Col lg={6}>
                            <img src={photoProject} alt=""></img>
                        </Col>
                    </Row>
                </div>
            </div>
        </Fragment>
    )
}

export default Technology