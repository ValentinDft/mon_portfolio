import React from 'react';
import { Col, CardImg, Container, Row } from 'reactstrap';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {Animated} from "react-animated-css";
import imgCard from '../IMG_5395.jpg';
import AOS from "aos";
import "aos/dist/aos.css";
import Typical from "react-typical"

function Presentation() {
    return (
        <div>
            <Container fluid={true}>
                <Row>
                    <Col sm="12" md="12" lg="12">   
                        <CardImg src={imgCard} style={{marginTop: "3%", marginBottom: "5%", borderRadius: "5%", width: "450px", display: "block", marginLeft: "auto", marginRight: "auto"}} className="img"/>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" style={{textAlign: "center"}}>
                        <Animated animationIn="slideInUp" animationInDuration="1500" isVisible={true}>
                            <h1 style={{color: "#dff9fb"}}>Valentin Duffet</h1>
                            <h3 style={{color: "#c23616"}}>
                                <Typical
                                    loop={Infinity}
                                    wrapper="i"
                                    steps={["Développeur Web fullstack Javascript", 2000, "MongoDB, Express, React JS, Node JS", 2000]}
                                />
                            </h3>
                            <a href="https://www.linkedin.com/in/valentin-duffet/" target="_blank"><FontAwesomeIcon icon={faLinkedin} style={{fontSize: "25px", marginRight: "5px", color: "#dff9fb"}}></FontAwesomeIcon></a>
                            <a href="https://github.com/ValentinDft" target="_blank"><FontAwesomeIcon icon={faGithub} style={{fontSize: "25px", color: "#dff9fb"}}></FontAwesomeIcon></a>
                        </Animated>
                    </Col>
                </Row>
            </Container> 

            <Container style={{marginTop: "5%"}} className="container">
                <Row>
                    <Col sm="12" md="12" lg="12">
                        
                        <h2 style={{textAlign: "center", marginBottom: "1%", color: "#dff9fb"}}>PRESENTATION</h2>
                        <hr style={{borderTop: "8px solid #c23616", borderRadius: "5px", width: "18%", marginBottom: "5%"}}></hr>
                   
                        <div data-aos="fade-up" data-aos-duration="2000">
                            <h4 style={{marginBottom: "5%", textAlign: "justify", color: "#dff9fb"}}>
                                Jeune développeur, passionné par les technologies du web. 
                                J'ai appris à coder dés le lycée par simple curiosité, pour savoir comment était construit un site web. J'ai vraiment adoré ça. <br></br>
                                Par la suite j'ai effectué un <span style={{color: "#dff9fb", backgroundColor: "#c23616"}}>BTS SNIR (Systèmes Numériques informatique et Réseaux)</span> que j'ai obtenus. <br></br>
                                Et pour solidifier mes connaissances et mes compétences dans le développement web, j'ai effectué une <span style={{color: "#dff9fb", backgroundColor: "#c23616"}}> 
                                formation de développeur web fullstack Javascript à La Capsule,</span> sur la stack MERN (MongoDB, Express, React Js, Node Js)
                            </h4>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        
    );
  }
  
export default Presentation;