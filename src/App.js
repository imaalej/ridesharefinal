import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import './components/BNavBar/BNavBar.css'
import Home from './Home';
import French from './French'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

const App = ()=>{

    var switched = false;
    return(
        <Router>
            <div>
                {/*Navigation Bar*/}
                <Navbar bg="dark" variant="dark" sticky='top'>
                    <Container>
                            <Navbar.Brand href="#home" className='logo2'>Catch a Ride</Navbar.Brand>

                            <div class="btn-group" role="group" aria-label="Basic example">
                                <Button variant="ps3" onClick={()=>{
                                    const anchor = document.querySelector('#home')
                                    anchor.scrollIntoView({behavior:'smooth', block:'center'})
                                }}>Home</Button>
                                <Button variant="ps3" onClick={()=>{
                                    const anchor = document.querySelector('#allListings')
                                    anchor.scrollIntoView({behavior:'smooth', block:'center'})
                                }}>View Listings</Button>
                                <Button variant="ps3" onClick={()=>{
                                    const anchor = document.querySelector('#contact')
                                    anchor.scrollIntoView({behavior:'smooth', block:'center'})
                                }}>Contact Us</Button>
                                <Button variant="ps3" onClick={()=>{
                                    const anchor = document.querySelector('#about')
                                    anchor.scrollIntoView({behavior:'smooth', block:'center'})
                                }}>About Us</Button>
                            </div>

                            <div class="btn-group" role="group" aria-label="Basic example">
                                <Link to='/'>English</Link>
                                <Link to='/French'>Française</Link>
                            </div>
                    </Container>
                </Navbar>

                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/French'>
                        <French />
                    </Route>
                </Switch>
            </div>
        </Router>
    )}

export default App