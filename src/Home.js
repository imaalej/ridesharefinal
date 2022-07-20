import React, {useState, useEffect} from 'react'
import BNavBar from './components/BNavBar/BNavBar'
import InputText from './components/InputText/InputText'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import BCard from './components/BCard/BCard'
import Space from './components/Space'
import Circle from './components/ValueCircle/Circle'
import Coin from './components/ValueCircle/coin.png'
import Peer from './components/ValueCircle/peer.png'
import Map from './components/ValueCircle/map.png'
import Contact from './components/ValueCircle/contact.png'
import Alert from 'react-bootstrap/Alert';
import Pagination from 'react-bootstrap/Pagination'
import CloseButton from 'react-bootstrap/CloseButton';
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Feedback from 'react-bootstrap/Feedback'

//Nav
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/Navbar'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import menu from'./menu.jpg'
import './components/BNavBar/BNavBar.css'

const Home = ()=>{

    //Generating some offers to populate site.
    var offers = []
    var card1 = ['Offer', '24-Jun-2022', '15:00', 'Toronto', 'Montreal', 'Planning to go see the new Ghost concern, and Ive got up to 4 seats available. First come first serve.', '18rem', '+1 (752) 458-462', 'peter@peterson.com', 'Honda Civic' , 'FBF951', 6, 20]
    var card2 = ['Offer', '15-July-2022', '12:15', 'Winnipeg', 'Vancouver', 'Will be visiting my grandparents and ive got some seats available if anyones interested.', '18rem', '+1 (654) 513-357', 'ahmed@ahmedson.com', 'Mitsubishi Mirage' ,'CF346E', 4, 15]
    var card3 = ['Offer', '6-August-2023', '22:45', 'Edmenton', 'Victoria', "I'll be attending a conference for particle generators in Victoria, I'll have space for some", '18rem', '+1 (438) 719-855', 'hamza@mohammed.com', 'Toyota Corolla' , 'SCP353', 4, 35]
    var card4 = ['Offer', '24-September-2022', '9:30', 'Halifax', 'Quebec City', 'Going to Toilet Paper Con, let me know if any of you are interested. Ill bring drinks', '18rem', '+1 (669) 392-164', 'ali@ahmedson.com', 'Subaru Outback' ,'LTU782', 6, 15]
    
    offers.push(card1)
    offers.push(card2)
    offers.push(card3)
    offers.push(card4)

    //Generating some requests to populate site

    var requests = []
    var card5 = ['Request', '10-Jan-2023', '7:45', 'Ottawa', 'Montreal', 'Looking for a ride from Ottawa to Montreal, ideally drop off at YUL airport. I have luggage.', '18rem', '+1 (493) 257-716', 'howard@howarson.com']
    var card6 = ['Request', '19-December-2022', '13:10', "St John's", 'Calgary', "I'd like a ride to calgary I plan to visit the calgary museum of royals. I will eat up their remains.", '18rem', '+1 (471) 692-145', 'niel@shaquile.com']
    var card7 = ['Request', '13-August-2022', '18:30', 'Mississauga', 'London', 'Planning to escape my home, I need a get away ride. Un-suspicious looking cars preferred.', '18rem', '+1 (696) 364-953', 'lalala@water.com']
    var card8 = ['Request', '6-November-2022', '11:00', 'Hamilton', 'Kingston', 'I like cats and Im having a hard time making up descriptions so this is the last.', '18rem', '+1 (746) 458-114', 'jeffbezos@google.com']

    requests.push(card5)
    requests.push(card6)
    requests.push(card7)
    requests.push(card8)

    const[contactAlert, setClicked] = useState(false);
    const handleClick = ()=> setClicked(true);

    let active = 1;
    let items = [];
    for (let number = 1; number <= 3; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active} disabled={number !== active}>
        {number}
        </Pagination.Item>,
    );
    }

    const [searchValue, setSearchValue] = useState()


    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    const onClickClear = () =>{
        setSearchValue("")
    }

    const searchBar = ()=>{

        return(
            <div>
                <p className='label'>Search</p>
                <div className='input-box'>
                    <input type='text' value={searchValue} placeholder='Search' onChange={handleInputChange}/>
                    {true && <CloseButton variant="white" onClick={onClickClear}/>}
                </div>
            </div>
        )
    }



    const [show, setShow] = useState(false);


    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
      if(form.checkValidity()===true){
      }
    };

    
    const [validated2, setValidated2] = useState(false);

    const handleSubmit2 = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated2(true);
      if(form.checkValidity()===true){
      }
    };

    return(
    <div>
        <br></br>
        {/*Schedule Listing box, first thing you see on the page*/}
        <h3 className='listing-header'>Schedule a rideshare listing</h3>
        <div className='listing-box' id='home'>
            <InputText InputText='Departure' Type='text' />
            <InputText InputText='Destination' Type='text' />
            <InputText InputText='Date' Type='date' />
            <InputText InputText='Time' Type='time' />
            <Button variant="ps1" onClick={()=>{setShow(true)}}>Offer or Request a lift</Button>{' '}


            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                className="my-modal" 
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    Schedule a trip
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Tabs 
                        defaultActiveKey='request'
                        id='uncontrolled-tab-example'
                        className='mb-1'
                    >
                        <Tab eventKey="request" title="Request a trip">
                           <div className='bookcontainer'>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row className='g-3'>
                                    <Col md>
                                        <Form.Group className="mb-1" controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <InputGroup hasValidation>
                                                <Form.Control type="email" placeholder="example@example.com" required />
                                                <Form.Control.Feedback type="invalid">Please enter your E-mail address with the appropriate format.</Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col md>
                                        <Form.Group className="mb-1" controlId="formPhone">
                                            <Form.Label>Phone number</Form.Label>
                                            <Form.Control type="number" placeholder="Enter Phone Number" required/>
                                            <Form.Control.Feedback type="invalid">Please enter your Phone Number.</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Text className="text-muted">
                                        We'll never share your contact details with anyone else.
                                </Form.Text>
                                <br></br>
                                <br></br>
                                <Row className='g-3'>
                                    <Col md>
                                        <Form.Group className="mb-3" controlId="formDeparture">
                                            <Form.Label>Departure</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Departure Location" required/>
                                            <Form.Control.Feedback type="invalid">Please fill in departure location.</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col md>
                                        <Form.Group className="mb-1" controlId="formDestination">
                                            <Form.Label>Destination</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Destination Location" required/>
                                            <Form.Control.Feedback type="invalid">Please fill in destination location.</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                </Row>
                                <Row className='g-3'>
                                    <Col md>
                                        <Form.Group className="mb-3" controlId="formDate">
                                            <Form.Label>Date</Form.Label>
                                            <Form.Control type="date" placeholder="Enter Departure Date" required/>
                                            <Form.Control.Feedback type="invalid">Please enter departure date.</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col md>
                                        <Form.Group className="mb-3" controlId="formTime">
                                            <Form.Label>Time</Form.Label>
                                            <Form.Control type="time" placeholder="Enter Departure Time" required/>
                                            <Form.Control.Feedback type="invalid">Please enter departure time.</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col md>
                                        <Form.Group className="mb-3" controlId="formSeats">
                                            <Form.Label>Seats Required</Form.Label>
                                            <Form.Control type="number" placeholder="Enter Number of Seats" required/>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className='g-5'>
                                    <Col md>
                                        <Form.Group className="mb-3" controlId="formVaccine">
                                            <Form.Check type="checkbox" label="Vaccinated for COVID-19?" required/>
                                            <Form.Control.Feedback type="invalid">You must be vaccinated against COVID-19 to rideshare. Drivers are entitled to check your vaccination status.</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col md>
                                        <Form.Group className="mb-3" controlId="formLuggage">
                                            <Form.Check type="checkbox" label="Taking luggage?" />

                                        </Form.Group>
                                    </Col>
                                </Row>

                                    <Form.Group
                                    className="mb-3"
                                    controlId="formDescription"
                                    >
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>

                                    <Button variant="ps0" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                           </div>
                        </Tab>
                        <Tab eventKey='offer' title='Offer a trip'>
                        <div className='bookcontainer'>
                            <Form noValidate validated={validated2} onSubmit={handleSubmit2}>
                                <h5>Vehicle details</h5>
                                <Row className='g-3'>
                                    <Col md>
                                        <Form.Group className='mb-1' controlId='formModel'>
                                            <Form.Label>Model</Form.Label>
                                            <Form.Control type='text' placeholder='e.g., Mitsubishi Mirage' required />
                                            <Form.Control.Feedback type='invalid'>Please fill in your vehicle model.</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <br></br>
                                <Row className='g-3'>
                                    <Col md>
                                        <Form.Group className='mb-1' controlId='formType'>
                                            <Form.Label>Type</Form.Label>
                                            <Form.Control type='text' placeholder='e.g., SUV, minivan' required />
                                            <Form.Control.Feedback type='invalid'>Please fill in your vehicle type.</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col md>
                                        <Form.Group className='mb-1' controlId='formColor'>
                                            <Form.Label>Color</Form.Label>
                                            <Form.Control type='text' placeholder='e.g., Black' required />
                                            <Form.Control.Feedback type='invalid'>Please fill in your vehicle's color.</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <br></br>
                                <Row className='g-3'>
                                    <Col md>
                                        <Form.Group className='mb-1' controlId='formPlate'>
                                            <Form.Label>License Plate</Form.Label>
                                            <Form.Control type='text' placeholder='Enter license plate.' required />
                                            <Form.Control.Feedback type='invalid'>Please fill in your vehicle's license plate.</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col md>
                                        <Form.Group className='mb-1' controlId='formSeats'>
                                            <Form.Label>Available Seats</Form.Label>
                                            <Form.Control type='number' placeholder='' required />
                                            <Form.Control.Feedback type='invalid'>Please indicate available seats.</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col md>
                                        <Form.Group className='mb-1' controlId='formPrice'>
                                            <Form.Label>Price per Seat</Form.Label>
                                            <Form.Control type='text' placeholder='' />
                                            <Form.Control.Feedback type='invalid'>Please fill in your expected price per seat.</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <br></br>
                                <br></br>
                                <h5>Trip details</h5>
                                <Row className='g-3'>
                                    <Col md>
                                        <Form.Group className="mb-1" controlId="formBasicEmail2">
                                            <Form.Label>Email address</Form.Label>
                                            <InputGroup hasValidation>
                                                <Form.Control type="email" placeholder="example@example.com" required />
                                                <Form.Control.Feedback type="invalid">Please enter your E-mail address with the appropriate format.</Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col md>
                                        <Form.Group className="mb-1" controlId="formPhone2">
                                            <Form.Label>Phone number</Form.Label>
                                            <Form.Control type="number" placeholder="Enter Phone Number" required/>
                                            <Form.Control.Feedback type="invalid">Please enter your Phone Number.</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Text className="text-muted">
                                        We'll never share your contact details with anyone else.
                                </Form.Text>
                                <br></br>
                                <br></br>
                                <Row className='g-3'>
                                    <Col md>
                                        <Form.Group className="mb-3" controlId="formDeparture2">
                                            <Form.Label>Departure</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Departure Location" required/>
                                            <Form.Control.Feedback type="invalid">Please fill in departure location.</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col md>
                                        <Form.Group className="mb-1" controlId="formDestination2">
                                            <Form.Label>Destination</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Destination Location" required/>
                                            <Form.Control.Feedback type="invalid">Please fill in destination location.</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                </Row>
                                <Row className='g-3'>
                                    <Col md>
                                        <Form.Group className="mb-3" controlId="formDate2">
                                            <Form.Label>Date</Form.Label>
                                            <Form.Control type="date" placeholder="Enter Departure Date" required/>
                                            <Form.Control.Feedback type="invalid">Please enter departure date.</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col md>
                                        <Form.Group className="mb-3" controlId="formTime2">
                                            <Form.Label>Time</Form.Label>
                                            <Form.Control type="time" placeholder="Enter Departure Time" required/>
                                            <Form.Control.Feedback type="invalid">Please enter departure time.</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className='g-5'>
                                    <Col md>
                                        <Form.Group className="mb-3" controlId="formVaccine2">
                                            <Form.Check type="checkbox" label="Vaccinated for COVID-19?" required/>
                                            <Form.Control.Feedback type="invalid">You must be vaccinated against COVID-19 to rideshare. Drivers are entitled to check your vaccination status.</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col md>
                                        <Form.Group className="mb-3" controlId="formLuggage2">
                                            <Form.Check type="checkbox" label="Accepting luggage?" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                    <Form.Group
                                    className="mb-3"
                                    controlId="formDescription2"
                                    >
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>

                                    <Button variant="ps0" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                           </div>
                        </Tab>
                    </Tabs>
                </Modal.Body>
            </Modal>




            
        </div>

        <Space />
        {/*Popular listings, with a display of some cards*/}
        <div className='popular-listings-header'>
            <h3 className='popular-header'>Popular Listings</h3>
            <Button variant="ps2" onClick={()=>{
                const anchor = document.querySelector('#allListings')
                anchor.scrollIntoView({behavior:'smooth', block:'center'})
            }}>See all available listings</Button>
        </div>
        <Space />

        <div className='popular-listings'>
            <BCard Type='Request' Date='24-Jun-2022' Time='19:00' Departure='Ottawa' Destination='Montreal' Description='Looking for a ride from Ottawa to Montrea, ideally drop off at YUL airport. I have luggage...' Width='20rem' Phone= '+1 (123) 456-789' Email= 'SEG3125@SEG.com'/>
            <BCard Type='Request' Date='24-Jun-2022' Time='19:00' Departure='Ottawa' Destination='Montreal' Description='Looking for a ride from Ottawa to Montrea, ideally drop off at YUL airport. I have luggage...' Width='20rem' Phone= '+1 (123) 456-789' Email= 'SEG3125@SEG.com'/>
            <BCard Type='Request' Date='24-Jun-2022' Time='19:00' Departure='Ottawa' Destination='Montreal' Description='Looking for a ride from Ottawa to Montrea, ideally drop off at YUL airport. I have luggage...' Width='20rem' Phone= '+1 (123) 456-789' Email= 'SEG3125@SEG.com'/>
        </div>
        <Space />

        {/*Company fluff*/}
        <h3 className='popular-header'>Our Values</h3>
        <br></br>
        <br></br>

        <div className='values-box' id='about'>
            <center><Circle Path={Peer} Type="Peer-to-Peer" Description=
            'Listings are created by ordinary Canadians such as yourself. '/></center>
            <center><Circle Path={Map} Type="Long Distance" Description= 
            "The only limitation is the number of listings themselves."/></center>
            <center><Circle Path={Coin} Type="Cost Effective" Description='Cheaper than a plane, bus, or train tickets. Riders usually only pay their fair share of gas.'/></center>
        </div>

        <br></br>
            
            <div className='all-box'>
                <h3 className='all-header'>All available listings</h3>
                {searchBar()}
                {/*<InputText InputText='Search' Type='text' />*/}
            </div>

        <Row>
            <Col>
                <div className='listing-container'  id='allListings'>
                    {requests.map((request) => {
                        return <BCard key={request} Type={request[0]} Date={request[1]} Time={request[2]} Departure={request[3]} Destination={request[4]} Description={request[5]} Width={request[6]} Phone={request[7]} Email={request[8]} />
                    })}

                </div>
            </Col>
            <Col>
                <div className='listing-container'>
                    {offers.map((offer) => {
                        return <BCard key={offer} Type={offer[0]} Date={offer[1]} Time={offer[2]} Departure={offer[3]} Destination={offer[4]} Description={offer[5]} Width={offer[6]} Phone={offer[7]} Email={offer[8]} Car={offer[9]} Plate={offer[10]} Seats={offer[11]} Price={offer[12]} />
                    })}
                </div>
            </Col>
        </Row>

        <br></br>
        

        <div className='contact-box' id='contact'>
            <center><Circle Path={Contact} Type="Talk with an advisor" Description="Enter your email address regarding your questions and we'll connect you to the right person."/></center>
            <div>
                <InputText InputText='Email' Type='email' />
                <InputText InputText='Comment' Type='text' />
                <Button variant="ps1" onClick={handleClick}>Submit</Button>{' '}
                <br></br>
                <br></br>
                {contactAlert? <Alert variant='success'> Your concerns have been received.</Alert> : <></>}
            </div>
        </div>
        <Space />
    </div>
    )}

export default Home