import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import logo from '../img/Group 92.svg'
import logo1 from '../img/Group 91.svg'
import logo2 from '../img/Group 90.svg'
import logo3 from '../img/Group 93.svg'
import logo4 from '../img/Group 94.svg'
import logo5 from '../img/Group 95.svg'
import './index.css'


const Haider = () => {
    return (
        <div className="bg-img">
            <Container className="padding-top">
                <h2 style={{fontSize: "40px"}} className="text-white text-uppercase servis">Services</h2>
                <Row className="padding-top1 d-flex">
                    <Col className="my-5" md={6} sm={12}>
                        <div className="d-flex bg-transparent border-0">
                            <img className="mx-5" style={{height: "80px", width: "80px"}} src={logo} alt="Icon"/>
                            <div>
                                <h3 className="text-uppercase text-white">Web Development</h3>
                                <small className="text-white hover">More</small>
                            </div>
                        </div>
                    </Col>
                    <Col className="my-5" md={6} sm={12}>
                        <div className="d-flex bg-transparent border-0">
                            <img className="mx-5" style={{height: "80px", width: "80px"}} src={logo1} alt="Icon"/>
                            <div>
                                <h3 className="text-uppercase text-white">Mobile Development</h3>
                                <small className="text-white hover">More</small>
                            </div>
                        </div>
                    </Col>
                    <Col className="my-5" md={6} sm={12}>
                        <div className="d-flex bg-transparent border-0">
                            <img className="mx-5" style={{height: "80px", width: "60px"}} src={logo2} alt="Icon"/>
                            <div style={{marginLeft: "22px"}}>
                                <h3 className="text-uppercase text-white">UI/UX Design</h3>
                                <small className="text-white hover">More</small>
                            </div>
                        </div>
                    </Col>
                    <Col className="my-5" md={6} sm={12}>
                        <div className="d-flex bg-transparent border-0">
                            <img className="mx-5" style={{height: "80px", width: "80px"}} src={logo3} alt="Icon"/>
                            <div>
                                <h3 className="text-uppercase text-white">Testing</h3>
                                <small className="text-white hover">More</small>
                            </div>
                        </div>
                    </Col>
                    <Col className="my-5" md={6} sm={12}>
                        <div className="d-flex bg-transparent border-0">
                            <img className="mx-5" style={{height: "80px", width: "80px"}} src={logo4} alt="Icon"/>
                            <div>
                                <h3 className="text-uppercase text-white">Deployment</h3>
                                <small className="text-white hover">More</small>
                            </div>
                        </div>
                    </Col>
                    <Col className="my-5" md={6} sm={12}>
                        <div className="d-flex bg-transparent border-0">
                            <img className="mx-5" style={{height: "80px", width: "80px"}} src={logo5} alt="Icon"/>
                            <div>
                                <h3 className="text-uppercase text-white">Automation</h3>
                                <small className="text-white hover">More</small>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Haider;