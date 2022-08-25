import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import moon from "../../image/destination/image-moon.png"
import mars from "../../image/destination/image-mars.png"
import europa from "../../image/destination/image-europa.png"
import titan from "../../image/destination/image-titan.png"

const Deistination = () => {
    let theplanets =
    [{Nameplanet:"MOON" , infoPlanet:"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites." , distanc: "384,400 KM" , time :"3 DAYS", imge: moon},
    {Nameplanet:"MARS" , infoPlanet:"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!" , distanc: "225 MIL. KM" , time :"9 MONTHS" , imge:mars},
    {Nameplanet:"EUROPA" , infoPlanet:"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin." , distanc: "628 MIL. KM" , time :"3 YEARS" , imge:europa },
    {Nameplanet:"TITAN" , infoPlanet:"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn." , distanc: "1.6 BIL. KM" , time :"7 YEARS" , imge:titan },]
    
    let [value , setvalue] = useState(0)

        
        
    let {imge , Nameplanet, infoPlanet, distanc, time}=theplanets[value]
    return (
    <div>
        <div className='deistination'>
            <div className='container'>
                <Row>
                    <Col lg={6} className="photo-deistination">
                        <h1 className='mb-4'>01 PICK YOUR DESTINATION</h1>
                        <img src={imge} alt="" ></img>
                        
                    </Col>
                    <Col lg={6} className="text-deistination">
                        <ul>
                            {theplanets.map((e , index)=>(
                                <li 
                                    key={index}
                                    onClick={()=>{setvalue(index)}}>
                                    {e.Nameplanet}</li>
                            ))}
                        </ul>
                        <div className='text-planet'>
                            <h3>{Nameplanet}</h3>
                            <p>{infoPlanet}</p>
                        </div>
                        <hr/>
                        <div className='text'>
                            <div className='distance'>
                                <span>AVG. DISTANCE</span>
                                <h4>{distanc}</h4>
                            </div>
                            <div className='travel-time'>
                                <span>EST. TRAVEL TIME</span>
                                <h4>{time}</h4>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
    )
}

export default Deistination