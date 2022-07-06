import React from "react";
import './ProjectCard.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function ProjectCard(
    {
        title,
        desc,
        tech,
        github,
        demo
    }
)
{
    return (
        <>
        <Container>
            <Row >
                <Col xs={12}className='project-col'>
                        <Card className="project-card" style={{
                            width: '60%',height:'100%', borderRadius: '20px', padding: "12px", border: '1px solid white', background: 'rgb(46, 43, 37)', color: 'white' }}>
                            <Card.Body>
                                <Card.Title className="display-6 project-title" style={{ color: 'white'}}>{title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    <Button style={{ background: '#FFF36D', borderRadius: '10px', border: 'none', fontSize: '12px', margin: '2%', color:'rgb(46, 43, 37)'}}>{tech}</Button>
                                    {/* <Button style={{ background: '#FFF36D', borderRadius: '10px', border: 'none', fontSize: '12px', margin: '2%', color: 'rgb(46, 43, 37)'}}>HTML</Button>
                                    <Button style={{ background: '#FFF36D', borderRadius: '10px', border: 'none', fontSize: '12px', margin: '2%', color: 'rgb(46, 43, 37)'}}>MongoDB</Button> */}
                                </Card.Subtitle>
                                <Card.Text className='project-desc' style={{ fontSize: '22px', color: 'white'}}>
                                    {desc}
                                </Card.Text>
                                <Row>
                                    <Col sm={6}>
                                        <Button className='project-btn' style={{ width:'100px',borderRadius: '20px', border: 'none', color:'rgb(46, 43, 37)',fontWeight:'600' }} href={github}>Github</Button>
                                    </Col>
                                    <Col sm={6}>
                                        <Button className='project-btn' style={{ backgroundImage: 'linear-gradient(to right, rgb(244, 217, 75), rgb(236, 96, 138))', borderRadius: '20px', border: 'none', color: 'rgb(46, 43, 37)', fontWeight: '600'}} href={demo}>Demo </Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default ProjectCard;