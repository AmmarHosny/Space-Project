import React, { Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import "../../App.css"
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <Fragment>
        <div className= "landing-home" >
          <div className='container'>
            <Row>
              <Col md={12} lg={6}>
                <p>SO, YOU WANT TO TRAVEL TO</p>
                <h1>SPACE</h1>
                <p>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well, sit back, and relax because we'll give you a truly out of this world experience!</p>
              </Col>
              <Col md={12} lg={6} className='d-flex justify-content-center align-items-center'>
              <Link to='/Deistination'>
                <h2>EXPLORE</h2>
              </Link>
              
              </Col>
            </Row>
          </div>
        </div>
    </Fragment>
  )
}

export default Home