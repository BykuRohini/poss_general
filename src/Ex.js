import React, { useState, useEffect } from 'react'
import { Container, Navbar, Button, Form } from 'react-bootstrap';

import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { PiCrownBold } from 'react-icons/pi'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import InputGroup from 'react-bootstrap/InputGroup';
import { BiSearchAlt2 } from 'react-icons/bi'
import { BsCircle } from 'react-icons/bs'

import { CiBarcode } from 'react-icons/ci'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { provideData } from './Redux/Reducer';
import { useNavigate } from 'react-router';
import { Fourth } from "./Fourth."
const Ex = () => {

    const dispatch = useDispatch();
     
    const [customerData, setCustomerData] = useState('');
    const [mobileNum, setMobileNum] = useState('')
    const [inputMobileNum, setInputMobileNum] = useState({ mobnum: " " });
    const { mobnum } = inputMobileNum;
    const navigate = useNavigate()
    const fetchData = async () => {
        try {
            const response = await axios.post(
                'http://3.111.70.84:8091/test/v1/loyalty/customer-details',
                {
                    base_currency: 'INR',
                    mobile_number: inputMobileNum.mobnum,
                    client_id: 8,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log(response)
            setCustomerData(response.data.balance_amount);

        } catch (error) {
            console.error('Error fetching data:', error);
        }

    };

    console.log(customerData)
    const changeHandler = (e) => {

        setInputMobileNum({ [e.target.name]: e.target.value })
    }
    const dispatchh = () => {

        dispatch(provideData([customerData]))

    }
    const subHandler =   (e) => {
       
            e.preventDefault()
            e.stopPropagation()
            fetchData()
            dispatchh()
         
               
         }
        
    

    return (
        <div>


            <Navbar className="justify-content-Between">
                <Link to={'/'} style={{ color: "black" }}  >
                    < AiOutlineArrowLeft style={{ width: "30px", height: "20px" }} />
                </Link>
                <Container >



                    <Navbar.Collapse className="justify-content-center"  >
                        <Navbar.Brand>
                            Photon Softwares
                        </Navbar.Brand>
                    </Navbar.Collapse>

                    <Button variant="primary" className="text-white"><AiOutlineMenu />Daily Operations</Button>


                </Container>

            </Navbar>
            <hr />
            <Container>
                <BsCircle style={{ height: "70px", width: "70px", margin: "50px 0px 0px 550px", color: "#e07707" }} /> <PiCrownBold style={{ height: "55px", width: "55px", margin: "60px 0px 0px -67px" }} />
                <h5 style={{ margin: " 30px 0px 0px 500px" }}>Welcome to Loyalty</h5>
                <Row>
                    <Col sm={6} >
                        <p style={{ margin: "100px 0px 0px 300px" }}>Scan Loyalty Card</p>
                        <Link to={'/fourth'}  >
                            < CiBarcode style={{ height: "100px", width: " 100px", color: "grey", margin: "50px 0px 0px 300px" }} />
                        </Link>
                    </Col>
                    <div className="d-flex" >
                        <div className="vr" style={{ height: " 150px", width: "1px", margin: "-200px 0px 0px 590px" }}></div>
                        <p style={{ margin: "-50px 0px 0px -10px " }}>OR</p>
                        <div className="vr" style={{ height: " 150px", width: '0.8px', margin: "-30px 0px 0px -12px" }}></div>

                    </div>
                    <Col sm={6} style={{ margin: "-290px 0px 0px 700px" }}>


                        <p style={{ margin: "-5px 0px 0px 0px " }}>Search using Mobile Number</p>
                        <Form onSubmit={(e) => subHandler(e)}>
                            <InputGroup className="mb-3" style={{ width: "400px", height: "20px", marginTop: "70px " }}>
                                <DropdownButton
                                    variant="outline-secondary"
                                    title="+91"
                                    id="input-group-dropdown-1"
                                >
                                    <Dropdown.Item >+91</Dropdown.Item>
                                    <Dropdown.Item >+1</Dropdown.Item>
                                    <Dropdown.Item >+44</Dropdown.Item>
                                    <Dropdown.Divider />

                                </DropdownButton>
                                <Form.Control aria-label="Text input with dropdown button" value={mobnum} name="mobnum" onChange={(e) => changeHandler(e)} placeholder="Search Mobile No." />
                                <Button type="Submit"  variant="primary"><BiSearchAlt2 style={{ height: "2rem", width: "2rem" }} /></Button>
                                {/* {()=>dispatch(provideData([customerData]))} */}

                            </InputGroup>
                        </Form>

                    </Col>

                </Row>
            </Container>
        </div>
    )
}


export default Ex;