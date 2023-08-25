import React, { useState,useEffect } from 'react'
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { AiOutlineMenu } from 'react-icons/ai';
import axios from 'axios'
import { PiCrownBold } from 'react-icons/pi'
import { FaRegUser } from 'react-icons/fa'
import { PiNotePencilLight } from 'react-icons/pi'
import { BiSearchAlt2 } from 'react-icons/bi'

import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"

import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Home = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {

        setShowModal(!showModal)
    };
  



    return (
        <div>
            <Navbar >
                <Container >


                    <Navbar.Collapse className="justify-content-center">
                        <Navbar.Brand>
                            Photon Softwares
                        </Navbar.Brand>
                    </Navbar.Collapse>

                    <Button variant="primary" onClick={toggleModal} className="text-white"><AiOutlineMenu />Daily Operations</Button>


                </Container>

            </Navbar>
            <hr />
            <Form className="d-flex" style={{ margin: "20px 0px 0px 107px", width: "818px" }} >
                <FormControl type="search" placeholder="Search" className="mr-2" aria-label="Search" />
                <Button type="Submit" variant="primary"><BiSearchAlt2 style={{ height: "2rem", width: "2rem" }} /></Button>

            </Form>
            <Button className="text-dark"  variant="none" style={{height:"45px",width:"195px",border:"solid grey 1px",margin:"-73px 0px 0px  945px"}}>Item Lookup <Button className="text-dark" style={{border:"solid grey 1px",margin:"-3px -54px 0px 0px "}}  variant="none"> F5</Button></Button>
            <Button className="text-dark"  variant="none" style={{height:"45px",width:"195px",border:"solid grey 1px",margin:"-120px 0px 0px  1150px"}}>Price Check <Button className="text-dark" style={{border:"solid grey 1px",margin:"-3px -54px 0px 0px "}}  variant="none"> F5</Button></Button>

            <Container>
                <Row>

                    <Card style={{ width: '25rem', height: '15rem', margin: "-15px 20px 0px 0px", background: "#e07707" }}>
                        <Link to={'/third'} style={{ textDecoration: 'none', color: "black" }} >
                            <Card.Body>

                                <div>
                                    <Card.Subtitle className="mb-3   " style={{ fontSize: "13px" }}>CHECKOUT</Card.Subtitle>
                                    <Card.Title style={{ fontSize: "20px" }}>Continue as a Loyalty member</Card.Title>
                                    <PiCrownBold style={{ width: '6rem', height: '6rem', color: 'white', margin: "10px 50px 0px 120px" }} />
                                    <Card.Text className="fst-italic  mb-3 " style={{ fontSize: "12px", marginTop: "20px" }} >View your privileges and start checkout</Card.Text>
                                </div>

                            </Card.Body>
                        </Link>
                    </Card>
                    <Card style={{ width: '25rem', height: '15rem', margin: "-15px 20px 0px 0px" }}>
                        <Card.Body>

                            <div>
                                <Card.Subtitle className="mb-3   " style={{ fontSize: "13px" }}>CHECKOUT</Card.Subtitle>
                                <Card.Title style={{ fontSize: "20px" }}>Continue as a Visitor </Card.Title>
                                <FaRegUser style={{ width: '4rem', height: '4rem', color: 'grey', margin: "10px 50px 0px 150px" }} />
                                <Card.Text className="fst-italic  mb-3 " style={{ fontSize: "12px", marginTop: "50px" }} > start here </Card.Text>
                            </div>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '25rem', height: '15rem', margin: "-15px 20px 0px 0px" }}>
                        <Card.Body>

                            <div>
                                <Card.Subtitle className="mb-3   " style={{ fontSize: "8px" }}>ENROLLMENT</Card.Subtitle>
                                <Card.Title style={{ fontSize: "20px" }}>Would you like to Signup</Card.Title>
                                <PiNotePencilLight style={{ width: '4rem', height: '4rem', color: 'grey', margin: "10px 50px 0px 120px" }} />
                                <Card.Text className="fst-italic  mb-3 " style={{ fontSize: "12px", marginTop: "50px" }} >Signup to receive privileges , points and more</Card.Text>
                            </div>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '25rem', height: '15rem', margin: "-15px 20px 0px 0px" }}>
                        <Card.Body>

                            <div>
                                <Card.Subtitle className="mb-3   " style={{ fontSize: "8px" }}>ENROLLMENT</Card.Subtitle>
                                <Card.Title style={{ fontSize: "20px" }}>Would you like to Signup</Card.Title>
                                <PiNotePencilLight style={{ width: '4rem', height: '4rem', color: 'grey', margin: "10px 50px 0px 120px" }} />
                                <Card.Text className="fst-italic  mb-3 " style={{ fontSize: "12px", marginTop: "50px" }} >Signup to receive privileges , points and more</Card.Text>
                            </div>

                        </Card.Body>
                    </Card>




                </Row>
            </Container>

            <Modal
                show={showModal}
                onHide={toggleModal}
                dialogClassName="modal-right"
                centered={false} // This prevents the modal from being vertically centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Daily Operation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row  >
                        <Col  >Till Date </Col>
                    </Row>

                    <hr />
                    <Row  >
                        <Col  >Till Date </Col>
                    </Row>

                    <hr />
                    <Row  >
                        <Col  >Till Date </Col>
                    </Row>

                    <hr />
                    <Row  >
                        <Col  >Till Date </Col>
                    </Row>

                    <hr />
                    <Row  >
                        <Col  >Till Date </Col>
                    </Row>

                    <hr />



                </Modal.Body>
            </Modal>
        </div>
    )
}
export default Home