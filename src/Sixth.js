import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { PiNote } from 'react-icons/pi'
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import {AiOutlineArrowLeft} from 'react-icons/ai'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table'
import Dropdown from 'react-bootstrap/Dropdown';
import {BiSearchAlt2} from 'react-icons/bi'
import {Link} from "react-router-dom"
import { AiOutlineDollarCircle} from "react-icons/ai"
import {LuCreditCard} from "react-icons/lu"
import {PiCrownBold} from "react-icons/pi"
import {  LiaMoneyCheckAltSolid} from 'react-icons/lia'
import {MdOutlineCardGiftcard} from 'react-icons/md'
export const Sixth = () => {
  return (
    <div style={{height:"0px",width:"1400px"}}>
        <Navbar className="justify-content-Between">
                <Link to={"/fifth"} style={{color:"black"}}> < AiOutlineArrowLeft style={{ width: "30px", height: "20px",marginLeft:"50px" }} /></Link>
                <Container >



                    <Navbar.Collapse className="justify-content-center"  >
                        <Navbar.Brand>
                            Photon Softwares
                        </Navbar.Brand>
                    </Navbar.Collapse>

                    
              
                </Container>
                
            </Navbar>
            <hr/>
            <Container>
                <Row  style={{height:"250px" }}>
                    <h4 style={{margin:"50px 0px 0px 10px"}}>Pay using</h4>
                    <div style={{height:"90px",width:"200px",border:"solid grey 1px",borderRadius:"5px",marginLeft:"20px"}}>
                          <AiOutlineDollarCircle style={{height:"40px",width:"40px",color:"green",margin:"15px 0px 0px 70px"}} />
                          <h6 style={{margin:" 5px 0px 0px 70px"}}>Cash</h6>

                    </div>
                    <div style={{height:"90px",width:"200px",border:"solid grey 1px",borderRadius:"5px",marginLeft:"20px"}}>
                    <LuCreditCard style={{height:"40px",width:"40px",color:"blue",margin:"15px 0px 0px 70px"}} />
                          <h6 style={{margin:" 5px 0px 0px 20px"}}>Credit/Debit Card</h6>
                    </div>
                    <div style={{height:"90px",width:"200px",border:"solid grey 1px",borderRadius:"5px",marginLeft:"20px"}}>
                    <PiCrownBold style={{height:"40px",width:"40px",color:"maroon",margin:"15px 0px 0px 70px"}} />
                          <h6 style={{margin:" 5px 0px 0px 40px"}}>Loyalty Points</h6>
                    
                    </div>
                    <div style={{height:"90px",width:"200px",border:"solid grey 1px",borderRadius:"5px",marginLeft:"20px"}}>
                   <PiNote style={{height:"40px",width:"40px",color:"green",margin:"15px 0px 0px 70px"}} />
                          <h6 style={{margin:" 5px 0px 0px 50px"}}>Credit Notes</h6>
                    </div>
                    <div style={{height:"90px",width:"200px",border:"solid grey 1px",borderRadius:"5px",marginLeft:"20px"}}>
                    <MdOutlineCardGiftcard style={{height:"40px",width:"40px",color:"maroon",margin:"15px 0px 0px 70px"}} />
                          <h6 style={{margin:" 5px 0px 0px 50px"}}>Gift Cards</h6>
                    </div>
                    <div style={{height:"90px",width:"200px",border:"solid grey 1px",borderRadius:"5px",marginLeft:"20px"}}>
                  
                    <  LiaMoneyCheckAltSolid style={{height:"40px",width:"40px",color:"black",margin:"15px 0px 0px 70px"}} />
                          <h6 style={{margin:" 5px 0px 0px 65px"}}>Cheque</h6>
                    </div>


                </Row>
                <hr/>
                <Row>
                    <div style={{height:"180px",width:"440px" ,margin:"30px 0px 0px 900px"}}>
                        <h5>Tender Amount</h5>
                        <h6 style={{marginTop:"10px"}}>AED</h6>
                        <Form   style={{width:"400px" ,marginLeft:"0px"}} >
                            <FormControl type="search" placeholder="1500" className="mr-2" aria-label="Search" />
                  

                        </Form>
                       <Link to={'/seventh'}><Button style={{marginTop:"20px" ,width:"160px",fontSize:"13px"}} variant="primary"> PAY NOW</Button>
                       </Link>

                    </div>

                </Row>
            </Container>
            </div>
  )}
