import React from "react";
import './SkillsCard.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function SkillsCard () {
    return (
        <>
            <Container>
                <Row >
                    <Col xs={12} className='skills-col'>
                        <Card className="skills-card" style={{
                            width: '60%', height: '100%', borderRadius: '20px', padding: "12px", border: '1px solid white', backgroundImage: 'linear-gradient(to right, rgb(244, 217, 75), rgb(236, 96, 138))', color: 'rgb(46, 43, 37)'
                        }}>
                            <Row>
                                <Col xs={12}>
                                    <Button style={{ width: '100px', borderRadius: '20px', border: 'none', color: 'white', fontWeight: '600', background:'rgb(46, 43, 37)' }}>ReactJs</Button>
                                    <Button style={{ width: '140px', borderRadius: '20px', border: 'none', color: 'white', fontWeight: '600',background:'rgb(46,43,37',margin:' 10px'}}>StorybookJs</Button>
                                    <Button style={{ width: '100px', borderRadius: '20px', border: 'none', color: 'white', fontWeight: '600',background:'rgb(46,43,37',margin:' 10px'}}>Numpy</Button>
                                    <Button style={{ width: '100px', borderRadius: '20px', border: 'none', color: 'white', fontWeight: '600',background:'rgb(46,43,37',margin:' 10px'}}>Python</Button>
                                </Col>
                                <Col xs={12}>
                                    <Button  style={{ width: '100px', borderRadius: '20px', border: 'none', color: 'white', fontWeight: '600', background: 'rgb(46, 43, 37)' }}>Docker</Button>
                                    <Button  style={{ width: '60px', borderRadius: '20px', border: 'none', color: 'white', fontWeight: '600', background: 'rgb(46,43,37', margin: ' 10px' }}>Git</Button>
                                    <Button  style={{ width: '130px', borderRadius: '20px', border: 'none', color: 'white', fontWeight: '600', background: 'rgb(46,43,37', margin: '10px' }}>Tensorflow</Button>
                                    <Button  style={{ width: '150px', borderRadius: '20px', border: 'none', color: 'white', fontWeight: '600', background: 'rgb(46,43,37', margin: '10px' }}>Scikit Learn</Button>
                                    <Button  style={{ width: '60px', borderRadius: '20px', border: 'none', color: 'white', fontWeight: '600', background: 'rgb(46,43,37', margin: '10px' }}>R</Button>
                                    <Button  style={{ width: '120px', borderRadius: '20px', border: 'none', color: 'white', fontWeight: '600', background: 'rgb(46,43,37', margin: '10px' }}>GatsbyJs</Button>

                                </Col>
                                <Col xs={12}>
                                    <Button  style={{ width: '180px', borderRadius: '20px', border: 'none', color: 'white', fontWeight: '600', background: 'rgb(46, 43, 37)' }}>Microsoft Word</Button>
                                    <Button  style={{ width: '120px', borderRadius: '20px', border: 'none', color: 'white', fontWeight: '600', background: 'rgb(46,43,37', margin: ' 10px' }}>Javascript</Button>
                                    <Button  style={{ width: '100px', borderRadius: '20px', border: 'none', color: 'white', fontWeight: '600', background: 'rgb(46,43,37', margin: '10px' }}>Pandas</Button>
                                    <Button  style={{ width: '60px', borderRadius: '20px', border: 'none', color: 'white', fontWeight: '600', background: 'rgb(46,43,37', margin: '10px' }}>C</Button>
                                    <Button  style={{ width: '80px', borderRadius: '20px', border: 'none', color: 'white', fontWeight: '600', background: 'rgb(46,43,37', margin: '10px' }}>C ++</Button>
                                </Col>    
                                <Col xs={12}>
                                    <Button  style={{ width: '180px', borderRadius: '20px', border: 'none', color: 'white', fontWeight: '600', background: 'rgb(46, 43, 37)' }}>Microsoft Excel</Button>
                                    <Button  style={{ width: '80px', borderRadius: '20px', border: 'none', color: 'white', fontWeight: '600', background: 'rgb(46,43,37', margin: ' 10px' }}>SQL</Button>
                                    <Button  style={{ width: '100px', borderRadius: '20px', border: 'none', color: 'white', fontWeight: '600', background: 'rgb(46,43,37', margin: '10px' }}>HTML</Button>
                                    <Button  style={{ width: '80px', borderRadius: '20px', border: 'none', color: 'white', fontWeight: '600', background: 'rgb(46,43,37', margin: '10px' }}>CSS</Button>
                                    <Button  style={{ width: '80px', borderRadius: '20px', border: 'none', color: 'white', fontWeight: '600', background: 'rgb(46,43,37', margin: '10px' }}>Keras</Button>
                                    <Button  style={{ width: '80px', borderRadius: '20px', border: 'none', color: 'white', fontWeight: '600', background: 'rgb(46,43,37', margin: '10px' }}>SCSS</Button>
                                </Col>  
                                <Col xs={12}>
                                    <Button  style={{ width: '220px', borderRadius: '20px', border: 'none', color: 'white', fontWeight: '600', background: 'rgb(46, 43, 37)' }}>Azure Cloud Services</Button>
                                    <Button  style={{ width: '80px', borderRadius: '20px', border: 'none', color: 'white', fontWeight: '600', background: 'rgb(46,43,37', margin: ' 10px' }}>Flask</Button>
                                    <Button  style={{ width: '100px', borderRadius: '20px', border: 'none', color: 'white', fontWeight: '600', background: 'rgb(46,43,37', margin: '10px' }}>NodeJs</Button>
                                    <Button  style={{ width: '70px', borderRadius: '20px', border: 'none', color: 'white', fontWeight: '600', background: 'rgb(46,43,37', margin: '10px' }}>XML</Button>
                                    <Button  style={{ width: '70px', borderRadius: '20px', border: 'none', color: 'white', fontWeight: '600', background: 'rgb(46,43,37', margin: '10px' }}>Java</Button>
                                </Col>                                                                         
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default SkillsCard;
