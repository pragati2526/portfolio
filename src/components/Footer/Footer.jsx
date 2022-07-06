import React from 'react';
import './Footer.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FaLinkedin, FaGithub} from 'react-icons/fa';
import { HiMail } from "react-icons/hi";
function Footer()
{
    return(
        <>
        <Container>
            <Row>
                    <Col xs={12} lg={4} className='footer-ico'>
                        <div className='ico'><a href="mailto:ps.prof.acc24@gmailcom?Subject=Clicked portfolio"><HiMail/></a></div>
                </Col>
                    <Col xs={12} lg={4}  className='footer-ico'>
                        <div className='ico'><a href="https://github.com/pragati2526"><FaGithub/></a></div>
                </Col>
                    <Col xs={12} lg={4}  className='footer-ico'>
                        <div className='ico'><a href="https://www.linkedin.com/in/pragati-singh-1a85a2208/"><FaLinkedin/></a></div>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Footer;