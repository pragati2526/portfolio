import React from "react";
import './Projects.css';
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProjectData from '../../assets/data/projectData.json'
import Sep from '../../components/SectionSeperator/SectionSeperator'

function Projects() {
    return (
        <>
        <div id="projects">
        <Container>
            <Row>
                <Col xs={12} className="display-3">
                   <Sep/>
                   <div className="projecthead">Projects</div>
                </Col>
            </Row>
            <Row>
                    {ProjectData.map((project) => (
                        <Col xs={12} style={{margin:"4% 0"}}>
                            <ProjectCard
                                title={project.title}
                                desc={project.desc}
                                tech = {project.tech}
                                github={project.github}
                                demo={project.demo}
                            />
                        </Col>
                    ))}
            </Row>
        </Container>
            </div>
        </>
    );
}

export default Projects;