import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { PiNote } from 'react-icons/pi'
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export const Seventh = () => {
  return (
    <div style={{height:"0px",width:"1400px"}}>
        <Navbar className="justify-content-Between">
                <Link to={"/sixth"} style={{color:"black"}}> < AiOutlineArrowLeft style={{ width: "30px", height: "20px",marginLeft:"50px" }} /></Link>
                <Container >



                    <Navbar.Collapse className="justify-content-center"  >
                        <Navbar.Brand>
                            Photon Softwares
                        </Navbar.Brand>
                    </Navbar.Collapse>

                    
              
                </Container>
                
            </Navbar>
            <hr/>
            <div style={{height:"230px",width:"650px",border:"solid grey 1px",marginLeft:"400px",borderRadius:"10px"}}>
          
                <h6 style={{marginTop:"20px",marginLeft:"30px"}}>Tender Amount</h6>
                <p style={{margin:"-33px 0px 0px 500px"}}> AED 1500</p>
               
               
                <hr style={{ width:"550px",marginLeft:"30px"}}/>
                <p style={{marginTop:"20px",marginLeft:"30px"}}>Payment has been received from: </p>
                <p style={{marginTop:"20px",marginLeft:"30px"}}> Card Number :**** **** **** 1545</p>
                <p style={{margin:"-33px 0px 0px 500px"}}> AED 1500</p>
                <hr  style={{ width:"550px",marginLeft:"30px"}}/>
                <h6 style={{marginTop:"20px",marginLeft:"30px"}}>Tender Amount</h6>
                <p style={{margin:"-33px 0px 0px 500px"}}> AED 1500</p>

            </div>
           < AiOutlineCheckCircle style={{color:"green",height:"60px",width:"60px",margin:"30px 0px 0px 680px"}}/>
           <h4 style={{margin:"20px 0px 0px 540px"}}>Your Payment is done Successfully ! </h4>
                  <p style={{margin:"30px 0px 0px 600px"}}> How would you like your receipt?</p>
                  <Button style={{margin:"20px 0px 0px 400px",width:"200px"}}>PRINT</Button>
                  <Button style={{margin:"20px 0px 0px 30px",width:"200px"}}>EMAIL</Button>
                  <Button style={{margin:"20px 0px 0px 30px",width:"200px"}}>PRINT & EMAIL</Button>
            </div>
  )
}