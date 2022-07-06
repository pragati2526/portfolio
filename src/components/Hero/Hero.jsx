import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import HomeImage from '../../assets/intro.png'
import './Hero.css'

function Hero() {
    return (
        <>
            <div className="bag">
                <Container>
                    <Row>
                        <Col xs={12} className="hero-sec-2">
                            <Image fluid src={HomeImage} className="home-image" rounded roundedCircle></Image>
                        </Col>
                        <Col xs={12} className="hero-sec">
                            <div className="t1">
                            <p className="display-4 typed">Hello!</p>
                            </div>
                            <br/>
                            <div className="t2">
                            <h1 className="display-2 typed-2"> I'm Pragati Singh</h1>
                            </div>
                            <br/>
                            {/* <div className="t3">
                            <p className="lead typed-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nobis error quis nam sequi exercitationem, sed fugit sunt aliquam vitae aut dignissimos quibusdam minima voluptas, temporibus provident similique ut maiores.</p>
                            </div> */}
                        </Col>
                    </Row>
                </Container>
                </div>
        </>
    );
}

export default Hero;