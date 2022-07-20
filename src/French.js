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

const French= ()=>{

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
    var card6 = ['Request', '19-December-2022', '13:10', "St John's", 'Calgary', "I'd like a ride to calgary I plan to visit the calgary museum of royals.", '18rem', '+1 (471) 692-145', 'niel@shaquile.com']
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
        <h3 className='listing-header'>Planifier une annonce de covoiturage</h3>
        <div className='listing-box' id='home'>
            <InputText InputText='Départ' Type='text' />
            <InputText InputText='Destination' Type='text' />
            <InputText InputText='Date' Type='date' />
            <InputText InputText='Temps' Type='time' />
            <Button variant="ps1" onClick={()=>{setShow(true)}}>Offrir ou demander un lift</Button>{' '}


            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                className="my-modal" 
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    Programmer un voyage
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Tabs 
                        defaultActiveKey='request'
                        id='uncontrolled-tab-example'
                        className='mb-1'
                    >
                        <Tab eventKey="request" title="Demander un voyage">
                           <div className='bookcontainer'>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row className='g-3'>
                                    <Col md>
                                        <Form.Group className="mb-1" controlId="formBasicEmail">
                                            <Form.Label>Adresse e-mail</Form.Label>
                                            <InputGroup hasValidation>
                                                <Form.Control type="email" placeholder="exemple@exemple.com" required />
                                                <Form.Control.Feedback type="invalid">Veuillez entrer votre adresse e-mail avec le format approprié.</Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col md>
                                        <Form.Group className="mb-1" controlId="formPhone">
                                            <Form.Label>Numéro de téléphone</Form.Label>
                                            <Form.Control type="number" placeholder="Entrez le numéro de téléphone" required/>
                                            <Form.Control.Feedback type="invalid">Veuillez entrer votre numéro de téléphone.</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Text className="text-muted">
                                        
Nous ne partagerons jamais vos coordonnées avec qui que ce soit d'autre.
                                </Form.Text>
                                <br></br>
                                <br></br>
                                <Row className='g-3'>
                                    <Col md>
                                        <Form.Group className="mb-3" controlId="formDeparture">
                                            <Form.Label>Départ</Form.Label>
                                            <Form.Control type="text" placeholder="Entrez le lieu de départ" required/>
                                            <Form.Control.Feedback type="invalid">Veuillez renseigner le lieu de départ.</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col md>
                                        <Form.Group className="mb-1" controlId="formDestination">
                                            <Form.Label>Destination</Form.Label>
                                            <Form.Control type="text" placeholder="
Entrez l'emplacement de destination" required/>
                                            <Form.Control.Feedback type="invalid">
Veuillez indiquer le lieu de destination.</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                </Row>
                                <Row className='g-3'>
                                    <Col md>
                                        <Form.Group className="mb-3" controlId="formDate">
                                            <Form.Label>Date</Form.Label>
                                            <Form.Control type="date" placeholder="
Entrez la date de départ" required/>
                                            <Form.Control.Feedback type="invalid">Veuillez entrer la date de départ.</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col md>
                                        <Form.Group className="mb-3" controlId="formTime">
                                            <Form.Label>Temps</Form.Label>
                                            <Form.Control type="time" placeholder="
Entrez l'heure de départ" required/>
                                            <Form.Control.Feedback type="invalid">
Veuillez entrer l'heure de départ.</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col md>
                                        <Form.Group className="mb-3" controlId="formSeats">
                                            <Form.Label>Sièges requis
</Form.Label>
                                            <Form.Control type="number" placeholder="Entrez le nombre de sièges" required/>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className='g-5'>
                                    <Col md>
                                        <Form.Group className="mb-3" controlId="formVaccine">
                                            <Form.Check type="checkbox" label="Vacciné pour le COVID-19 ?" required/>
                                            <Form.Control.Feedback type="invalid">
Vous devez être vacciné contre le COVID-19 pour faire du covoiturage. Les chauffeurs ont le droit de vérifier votre statut vaccinal.</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col md>
                                        <Form.Group className="mb-3" controlId="formLuggage">
                                            <Form.Check type="checkbox" label="
Prendre des bagages ?" />

                                        </Form.Group>
                                    </Col>
                                </Row>

                                    <Form.Group
                                    className="mb-3"
                                    controlId="formDescription"
                                    >
                                        <Form.Label>La description
</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>

                                    <Button variant="ps0" type="submit">
                                    Soumettre
                                    </Button>
                                </Form>
                           </div>
                        </Tab>
                        <Tab eventKey='offer' title='
Offrir un voyage'>
                        <div className='bookcontainer'>
                            <Form noValidate validated={validated2} onSubmit={handleSubmit2}>
                                <h5>
Les détails du véhicule</h5>
                                <Row className='g-3'>
                                    <Col md>
                                        <Form.Group className='mb-1' controlId='formModel'>
                                            <Form.Label>
Modèle de véhicule</Form.Label>
                                            <Form.Control type='text' placeholder='
par exemple., Mitsubishi Mirage' required />
                                            <Form.Control.Feedback type='invalid'>Veuillez renseigner le modèle de votre véhicule.</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <br></br>
                                <Row className='g-3'>
                                    <Col md>
                                        <Form.Group className='mb-1' controlId='formType'>
                                            <Form.Label>Type</Form.Label>
                                            <Form.Control type='text' placeholder='par exemple., SUV, minivan' required />
                                            <Form.Control.Feedback type='invalid'>Veuillez renseigner votre type de véhicule.</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col md>
                                        <Form.Group className='mb-1' controlId='formColor'>
                                            <Form.Label>
Couleur</Form.Label>
                                            <Form.Control type='text' placeholder='
par exemple, Noir' required />
                                            <Form.Control.Feedback type='invalid'>
Veuillez renseigner la couleur de votre véhicule.</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <br></br>
                                <Row className='g-3'>
                                    <Col md>
                                        <Form.Group className='mb-1' controlId='formPlate'>
                                            <Form.Label>Plaque d'immatriculation</Form.Label>
                                            <Form.Control type='text' placeholder="
Entrez la plaque d'immatriculation." required />
                                            <Form.Control.Feedback type='invalid'>
Veuillez renseigner la plaque d'immatriculation de votre véhicule.</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col md>
                                        <Form.Group className='mb-1' controlId='formSeats'>
                                            <Form.Label>Places libres</Form.Label>
                                            <Form.Control type='number' placeholder='' required />
                                            <Form.Control.Feedback type='invalid'>Veuillez indiquer les places disponibles.</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col md>
                                        <Form.Group className='mb-1' controlId='formPrice'>
                                            <Form.Label>
Prix ​​par places.</Form.Label>
                                            <Form.Control type='text' placeholder='' />
                                            <Form.Control.Feedback type='invalid'>P
Veuillez indiquer votre prix prévu par siège.</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <br></br>
                                <br></br>
                                <h5>
Détails du voyage</h5>
                                <Row className='g-3'>
                                    <Col md>
                                        <Form.Group className="mb-1" controlId="formBasicEmail2">
                                            <Form.Label>
Adresse e-mail</Form.Label>
                                            <InputGroup hasValidation>
                                                <Form.Control type="email" placeholder="example@example.com" required />
                                                <Form.Control.Feedback type="invalid">
Veuillez entrer votre adresse e-mail avec le format approprié.</Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col md>
                                        <Form.Group className="mb-1" controlId="formPhone2">
                                            <Form.Label>Numéro de téléphone</Form.Label>
                                            <Form.Control type="number" placeholder="Entrez le numéro de téléphone
" required/>
                                            <Form.Control.Feedback type="invalid">Veuillez entrer votre numéro de téléphone.
</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Text className="text-muted">

                                Nous ne partagerons jamais vos coordonnées avec qui que ce soit d'autre.
                                </Form.Text>
                                <br></br>
                                <br></br>
                                <Row className='g-3'>
                                    <Col md>
                                        <Form.Group className="mb-3" controlId="formDeparture2">
                                            <Form.Label>Départ</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Departure Location" required/>
                                            <Form.Control.Feedback type="invalid">Entrez le lieu de départ</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col md>
                                        <Form.Group className="mb-1" controlId="formDestination2">
                                            <Form.Label>Destination</Form.Label>
                                            <Form.Control type="text" placeholder="Entrez l'emplacement de destination" required/>
                                            <Form.Control.Feedback type="invalid">Entrez l'emplacement de destination</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                </Row>
                                <Row className='g-3'>
                                    <Col md>
                                        <Form.Group className="mb-3" controlId="formDate2">
                                            <Form.Label>Date</Form.Label>
                                            <Form.Control type="date" placeholder="Entrez la date de départ" required/>
                                            <Form.Control.Feedback type="invalid">
veuillez entrer la date de départ.</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col md>
                                        <Form.Group className="mb-3" controlId="formTime2">
                                            <Form.Label>Temps</Form.Label>
                                            <Form.Control type="time" placeholder="Entrez l'heure de départ" required/>
                                            <Form.Control.Feedback type="invalid">Veuillez entrer l'heure de départ.</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className='g-5'>
                                    <Col md>
                                        <Form.Group className="mb-3" controlId="formVaccine2">
                                            <Form.Check type="checkbox" label="Vacciné pour le COVID-19 ?" required/>
                                            <Form.Control.Feedback type="invalid">Vous devez être vacciné contre le COVID-19 pour faire du covoiturage. Les chauffeurs ont le droit de vérifier votre statut vaccinal.</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col md>
                                        <Form.Group className="mb-3" controlId="formLuggage2">
                                            <Form.Check type="checkbox" label="Accepter les bagages ?" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                    <Form.Group
                                    className="mb-3"
                                    controlId="formDescription2"
                                    >
                                        <Form.Label>La description</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>

                                    <Button variant="ps0" type="submit">
                                    Soumettre
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
            <h3 className='popular-header'>Listes populaires</h3>
            <Button variant="ps2" onClick={()=>{
                const anchor = document.querySelector('#allListings')
                anchor.scrollIntoView({behavior:'smooth', block:'center'})
            }}>Voir toutes les annonces disponibles</Button>
        </div>
        <Space />

        <div className='popular-listings'>
            <BCard Type='Request' Date='24-Jun-2022' Time='19:00' Departure='Ottawa' Destination='Montreal' Description='Looking for a ride from Ottawa to Montrea, ideally drop off at YUL airport. I have luggage...' Width='20rem' Phone= '+1 (123) 456-789' Email= 'SEG3125@SEG.com'/>
            <BCard Type='Request' Date='24-Jun-2022' Time='19:00' Departure='Ottawa' Destination='Montreal' Description='Looking for a ride from Ottawa to Montrea, ideally drop off at YUL airport. I have luggage...' Width='20rem' Phone= '+1 (123) 456-789' Email= 'SEG3125@SEG.com'/>
            <BCard Type='Request' Date='24-Jun-2022' Time='19:00' Departure='Ottawa' Destination='Montreal' Description='Looking for a ride from Ottawa to Montrea, ideally drop off at YUL airport. I have luggage...' Width='20rem' Phone= '+1 (123) 456-789' Email= 'SEG3125@SEG.com'/>
        </div>
        <Space />

        {/*Company fluff*/}
        <h3 className='popular-header'>Nos valeurs</h3>
        <br></br>
        <br></br>

        <div className='values-box' id='about'>
            <center><Circle Path={Peer} Type="D'égal à égal" Description=
            'Les inscriptions sont créées par des Canadiens ordinaires comme vous.'/></center>
            <center><Circle Path={Map} Type="Longue distance" Description= 
            "La seule limitation est le nombre d'annonces elles-mêmes."/></center>
            <center><Circle Path={Coin} Type="Rentable" Description="Moins cher qu'un billet d'avion, de bus ou de train. Les coureurs ne paient généralement que leur juste part d'essence."/></center>
        </div>

        <br></br>
            
            <div className='all-box'>
                <h3 className='all-header'>Toutes les annonces disponibles</h3>
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
            <center><Circle Path={Contact} Type="Parlez avec un conseiller" Description="Entrez votre adresse e-mail concernant vos questions et nous vous mettrons en contact avec la bonne personne."/></center>
            <div>
                <InputText InputText='E-mail' Type='email' />
                <InputText InputText='Commentaire' Type='text' />
                <Button variant="ps1" onClick={handleClick}>Soumettre</Button>{' '}
                <br></br>
                <br></br>
                {contactAlert? <Alert variant='success'> Vos préoccupations ont été reçues.</Alert> : <></>}
            </div>
        </div>
        <Space />
    </div>
    )
}

export default French