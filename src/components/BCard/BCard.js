import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import DisplayText from './DisplayText'
import InputText from '../InputText/InputText';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import './BCard.css'
import Car from './car.png'
import User from './user.png'

const BCard = (props)=>{

    const[show, setShow] = useState(false);
    const handleClose = ()=>setShow(false);
    const handleShow = ()=>setShow(true);

    const[show2, setShow2] = useState(false);
    const handleClose2 = ()=>setShow2(false);
    const handleShow2 = ()=>setShow2(true);

    const[seen, setSeen] = useState(false);
    const handleSeen = ()=> setSeen(true);
    

    var isOffer = props.Type === 'Offer'

    return(
        <div>
            <Card style={{ width: props.Width }} className='custom'>
                <Card.Body>
                    <Card.Title className='title'>Ride {props.Type}</Card.Title> 
                    {isOffer ? <img src={Car} className='icon'></img> : <img src={User} className='icon'></img>}
                    <Card.Subtitle className="mb-2 text-muted">{props.Date} at {props.Time}</Card.Subtitle>
                    {seen? <Badge bg="success">Messaged</Badge> : <Badge bg="secondary">New</Badge>}
                </Card.Body>

                <Card.Body>
                    <Card.Title>{props.Departure} to {props.Destination}</Card.Title>
                    <Card.Text>
                    {props.Description}
                    </Card.Text>
                    <Button variant="ps0" className='inline-button' onClick={handleShow2}>Reply</Button>
                    <Modal show={show2} onHide={handleClose2} 
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                        className="my-modal"
                    >
                        <Modal.Header closeButton>
                        <Modal.Title>Reply to listing</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label >Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                            </Form.Group>
                            <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                            >
                            <Form.Label>Reply message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                            <br></br>
                            <br></br>
                            <p>We'll send the poster an E-mail notifying them of your message. Check your E-mail for updates!</p>
                            </Form.Group>
                        </Form>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose2}>
                            Cancel
                        </Button>
                        <Button variant="ps0" onClick={(e)=>{handleSeen(); handleClose2()}}>
                            Send Message
                        </Button>
                        </Modal.Footer>
                    </Modal>
                    <Button variant="outline-primary" onClick={handleShow}>More</Button>{' '}
                    <Modal show={show} onHide={handleClose} 
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title2"
                        className="my-modal"                        
                    >
                        <Modal.Header closeButton>
                            <Modal.Title><h3 >Ride {isOffer? "Offer":"Request"}</h3></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {isOffer?<h5>Vehicle details</h5>:<></>}
                            {isOffer?                             
                            <Row className='g3'>
                                <Col md>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                        <Form.Label >Vehicle Model</Form.Label>
                                        <Form.Control type="text" value={props.Car} disabled />
                                    </Form.Group> 
                                </Col>
                                <Col md>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                        <Form.Label >License Plate</Form.Label>
                                        <Form.Control type="text" value={props.Plate} disabled />
                                    </Form.Group>
                                </Col>
                                <Col md> 
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                        <Form.Label >Available seats</Form.Label>
                                        <Form.Control type="text" value={props.Seats} disabled />
                                    </Form.Group>
                                </Col>
                                <Col md>          
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                        <Form.Label >Price per Seat</Form.Label>
                                        <Form.Control type="text" value={'$'+props.Price} disabled />
                                    </Form.Group>                                                                                                          
                                </Col>
                            </Row>

                            :<></>}
                            <br>
                            </br>

                            <h5>Trip details</h5>
                            <Row className='g-3'>
                                <Col md>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label >Departure</Form.Label>
                                        <Form.Control type="text" value={props.Departure} disabled />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                        <Form.Label >Destination</Form.Label>
                                        <Form.Control type="text" value={props.Destination} disabled />
                                    </Form.Group>                                
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput=5">
                                        <Form.Label >Date</Form.Label>
                                        <Form.Control type="text" value={props.Date} disabled />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput16">
                                        <Form.Label >Time</Form.Label>
                                        <Form.Control type="time" value={props.Time} disabled />
                                    </Form.Group>                                    
                                </Col>
            
                                <Col md>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                                        <Form.Label >Phone Number</Form.Label>
                                        <Form.Control type="text" value={props.Phone} disabled />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                        <Form.Label >E-mail address</Form.Label>
                                        <Form.Control type="email" value={props.Email} disabled />
                                    </Form.Group>                                    
                                    <Form.Group
                                    className="mb-3"
                                    controlId="formDescription"
                                    >
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control as="textarea" rows={5} disabled value={props.Description} />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant='outline-primary' onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </Card.Body>
            </Card>
        </div>
    )
} 

export default BCard