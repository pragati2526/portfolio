import React from 'react';
import './Skills.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SkillsCard from "../../components/SkillsCard/SkillsCard";
// import Sep from '../../components/SectionSeperator/SectionSeperator'

function Skills()
{
    return(
        <>
        <div id="skills">
        <Container>
                <Row>
                    <Col xs={12} className="display-3">
                        <div className="skills-head">Skills</div>
                    </Col>
                </Row>
            <Row>
                <Col xs={12}>
                <SkillsCard/>
                </Col>
            </Row>
        </Container>
            </div>
        </>
    );
}

export default Skills