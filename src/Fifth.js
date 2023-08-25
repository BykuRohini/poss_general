import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { BiSearchAlt2 } from 'react-icons/bi'
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import {AiOutlineArrowLeft} from 'react-icons/ai'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table'
import Dropdown from 'react-bootstrap/Dropdown';

import {Link} from "react-router-dom"
import { CiBarcode} from "react-icons/ci"
import {BsCircle} from "react-icons/bs"
import {PiCrownBold} from "react-icons/pi"
export const Fifth = () => {
  return (
    <div style={{height:"0px",width:"1400px"}}>
        <Navbar className="justify-content-Between">
        <Link to={"/fourth"} style={{color:"black"}}> < AiOutlineArrowLeft style={{ width: "30px", height: "20px" }} /></Link>
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
            <Container>
                <Row>
                    <Col sm={9} style={{borderRight:"solid grey 1px"}}>
                        <Table>
                            <tr>
                                <th>Item</th>
                                <th> Price</th>
                                <th> Quantity</th>
                                <th> Total</th>

                            </tr>
                            <hr/>

                            <tr>
                                <th> Chequered Shirt With Long sleeves</th>
                                <th> INR 200</th>
                                <th> 1</th>
                                <th>200.00</th>
                            </tr>
                            <tr>
                                <td>  159814114 <br />
                                    <Button variant="danger" className="text-danger"> Remove Item</Button>
                                    <Button  variant ="primary" className="bg-primary text-white"style={{marginLeft:"20px"}}> Price Override</Button>
                                    
                                </td>
                                <td>
                                    <br/>
                                <Button className="text-primary" > Discounted amount - 2.6</Button>
                                </td>

                               
                            </tr>
                            <hr/>
                            

                               
                            <tr>
                                <th>Floral print Knot  detail dress </th>
                                <th> INR 200</th>
                                <th> 1</th>
                                <th>200.00</th>
                            </tr>
                            <tr>
                                <td>  159814114 <br />
                                    <Button variant="danger" className="text-danger"> Remove Item</Button>
                                    <Button  variant ="primary" className="bg-primary text-white"style={{marginLeft:"20px"}}> Price Override</Button>
                                    
                                </td>
                                <td>
                                    <br/>
                                <Button className="text-primary" > Discounted amount - 2.6</Button>
                                </td>

                               
                            </tr>
                            <hr/>
                            <tr>
                                <th>Pocket Detail Joggers </th>
                                <th> INR 200</th>
                                <th> 1</th>
                                <th>200.00</th>
                            </tr>
                            <tr>
                                <td>  198764567<br />
                                    <Button variant="danger" className="text-danger"> Remove Item</Button>
                                    <Button  variant ="primary" className="bg-primary text-white"style={{marginLeft:"20px"}}> Price Override</Button>
                                    
                                </td>
                                <td>
                                    <br/>
                                <Button className="text-primary" > Discounted amount - 2.6</Button>
                                </td>

                               
                            </tr>
                            <hr/>
                            <tr>
                                <th> Floral detail Shorts </th>
                                <th> INR 200</th>
                                <th> 1</th>
                                <th>200.00</th>
                            </tr>
                            <tr>
                                <td>  159814114 <br />
                                    <Button variant="danger" className="text-danger"> Remove Item</Button>
                                    <Button  variant ="primary" className="bg-primary text-white"style={{marginLeft:"20px"}}> Price Override</Button>
                                    
                                </td>
                                <td>
                                    <br/>
                                <Button className="text-primary" > Discounted amount - 2.6</Button>
                                </td>

                               
                            </tr>

                        </Table>
                        <hr />
                    </Col>
                    
                    <Col sm={3}>
                        <div>
                    <div style={{background:"#e07707",height:"200px",width:"350px",margin:"20px 0px 0px 30px",borderRadius:"10px"}}>
                        <Row>
                        <BsCircle style={{height:"70px",width:"70px",margin:"10px 0px 0px 30px",color:"light"}} /> <PiCrownBold style={{ height: "60px", width: "60px", margin: "15px 0px 0px -65px" }} />

                            
                            <h3 style={{margin:"-50px 0px 0px 100px"}}> Loyalty </h3>
                      
                           
                            <h5 style={{margin:"50px 0px 0px 30px"}}> Enroll as Loyalty Member</h5>
                            
                            <p style={{margin:"0px 0px 0px 30px"}}> Signup to receive privileges ,poits and more</p>
                           
                       
                            
                        </Row>
                      
                    </div>
                            <div style={{height:"70px",width:"400px",borderRadius:"10px"}}>
                                 <h6 style={{margin:"100px 0px 0px 40px "}}> subtotal (4 Items)</h6>
                                 <h4 className="text-primary "   style={{marginLeft:"40px"}}> INR 200</h4>
                                 <p style={{marginLeft:"40px"}}> You have saved INR 50.00 today!</p>
                                </div>
                                <div style={{height:"100px",width:"340px",border:"solid grey 1px",background:"green",borderRadius:"10px",margin:"20px 0px 0px 40px"}}>
                                  <Link to={'/sixth'} style={{textDecoration:"none"}}> <h4 className="text-white"  style={{margin:"40px 0px 0px 50px"}}> CHECKOUT NOW</h4></Link>
                                </div>
                                <p style={{marginLeft:"40px"}}>
                                    Your order could earn you 100 points
                                </p>

                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
  )}