import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import AboutImage from "../../assets/laptop.png";
import './AboutCard.css';

function AboutCard() {
    return (
        <>
            <div style={{ backgroundColor: 'rgb(46, 43, 37)',paddingBottom: '100px' }}>
            <div className="display-3 abouthead">About Me</div>
            <Container>
                <Row>
                    <Col lg={4} className="about" >
                        <Image fluid src={AboutImage} className="about-image" rounded roundedCircle ></Image>
                    </Col>
                    <Col lg={8} className="about2" >
                            <Card className="about-card" style={{ width: '80%',boxShadow: '10px 10px #B5B1B2', borderRadius: '20px', backgroundImage: 'linear-gradient(to right, rgb(244, 217, 75), rgb(236, 96, 138))',  padding: "12px"}}>
                                <Card.Body>
                                    <Card.Text className="about-text" style={{ fontSize: '22px', color: 'rgb(46, 43, 37)' }}>
                                        I'm a front-end web developer and a data science enthusiast. I am passionate about leveraging latest technologies to build complex solutions and make an impact in the world. With every line of code, I strive to make the web a beautiful place.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    );
}

export default AboutCard;