import { Container, Row, Tab, Col, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import colorSharp2 from "../img/color-sharp2.png";
import projImg1 from "../img/project-img1.png";
import projImg2 from "../img/Twitter-Home.png";
import projImg3 from "../img/Twitter-Login.png";
import projImg4 from "../img/Twitter-Register.png";
import projImg5 from "../img/RestAPI-1.png";
import projImg6 from "../img/RestAPI-2.png";

export const Projects = () => {
    const projects = [
        {
            title: "Python Game Inventory",
            description: "Backend Project for python learning purposes",
            imgUrl: projImg1,
        },
        {
            title: "RestAPI",
            description: "Backend Project to learn more about RestAPI with Node, Typescript, Mongodb and Express.",
            imgUrl: projImg5,
        },
        {
            title: "RestAPI",
            description: "Backend Project to learn more about RestAPI with Node, Typescript, Mongodb and Express.",
            imgUrl: projImg6,
        },
        {
            title: "Twitter Clone",
            description: "Front and Backend Development with NextJS, Tailwind, MongoDB and Prisma",
            imgUrl: projImg2,
        },
        {
            title: "Twitter Clone",
            description: "Front and Backend Development with NextJS, Tailwind, MongoDB and Prisma",
            imgUrl: projImg3,
        },
        {
            title: "Twitter Clone",
            description: "Front and Backend Development",
            imgUrl: projImg4,
        },
    ]
    
    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Here are some of my projects! <br></br> (Most of them are on my GitHub!)</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Web / Backend</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Game Dev</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">3D Arts</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return(
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">Section development in Progress...</Tab.Pane>
                            <Tab.Pane eventKey="third">Section development in Progress...</Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}/>
        </section>
    )
}