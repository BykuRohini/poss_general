import React,{useState,useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { BiSearchAlt2 } from 'react-icons/bi'
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import {AiOutlineArrowLeft} from 'react-icons/ai'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CiBarcode} from "react-icons/ci"
import {BsCircle} from "react-icons/bs"
import {PiCrownBold} from "react-icons/pi"
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import axios from 'axios'
export const Fourth = () => {
      const cardVal=useSelector((state)=>state.Reducer.values)
  return (
  
    <div style={{height:"0px",width:"1400px"}}>
        <Navbar className="justify-content-Between">
               <Link to={'/third'} style={{color:"black"}}> < AiOutlineArrowLeft style={{ width: "30px", height: "20px" }} /></Link> 
                <Container >



                    <Navbar.Collapse className="justify-content-center"  >
                        <Navbar.Brand>
                            Photon Softwares
                        </Navbar.Brand>
                    </Navbar.Collapse>

                    
              
                </Container>
                
            </Navbar>
            <Form className="d-flex"  style={{width:"1400px" ,marginLeft:"30px"}} >
                            <FormControl type="search" placeholder="Search Item ID" className="mr-2" aria-label="Search" />
                            <Button type="Submit" variant="primary"><BiSearchAlt2 style={{ height: "2rem", width: "2rem" }} /></Button>

                        </Form>
            <hr/>
            <Row>
                <Col  sm={9} style={{ height:"500px" ,marginTop:"-15px",borderRight:"solid grey 1px"}}>
                <p style={{ margin: "150px 0px 0px 500px" }}>Your Shopping Cart is Empty. Scan item to start checkout</p>
                <hr style={{width:"150px",margin:"85px 0px 0px 600px",color:"red"}}/>
                    <Link to={'/fifth'}>  < CiBarcode style={{height:"150px",width:" 150px",color:"grey",margin:"-75px 0px 0px 600px"}}/></Link> 
                </Col>
                <Col sm={3}>
                    <div style={{background:"#e07707",height:"200px",width:"350px",margin:"20px 0px 0px 30px",borderRadius:"10px"}}>
                        <Row>
                            <Col sm={9}>
                            <h6 style={{margin:"15px 0px 0px 10px"}}>Your Loyalty Balance</h6>
                            <h5 style={{margin:"10px 0px 0px 10px"}}>Balance:{cardVal}</h5>
                            <h6 style={{margin:"20px 0px 0px 10px"}}> Value INR 000</h6>
                            <h6 style={{margin:"20px 0px 0px 10px"}}> 00 Pending Loyalties</h6>
                            <h6 style={{margin:"10px 0px 0px 10px"}}> 1800 0000  5484  5511</h6>
                            </Col>
                            <Col sm={3}>
                            <BsCircle style={{height:"40px",width:"40px",margin:"25px 0px 0px 0px",color:"light"}} /> <PiCrownBold style={{ height: "30px", width: "30px", margin: "-65px 0px 0px 5px" }} />

                            </Col>
                        </Row>
                      
                    </div>
                </Col>
            </Row>
    </div>
  )
}
