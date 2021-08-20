import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const Projects = ({ projs }) => {
  const projects = projs.map((proj) => {
    return (
      <Col key={proj.id} xs={12}>
        <a
          href={proj.link ? proj.link : undefined}
          target="_blank"
          rel="noreferrer"
        >
          <h5>{proj.name}</h5>
        </a>
        <ul>
          {proj.description.map((a) => (
            <li>{a}</li>
          ))}
        </ul>
      </Col>
    );
  });

  return (
    <Container>
      <h1>Projects</h1>
      <Row>{projects}</Row>
    </Container>
  );
};

export default Projects;
