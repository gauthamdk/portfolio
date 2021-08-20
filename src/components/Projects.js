import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = ({ projs }) => {
  const projects = projs.map((proj) => {
    return (
      <Col key={proj.id} xs={12}>
        <a
          href={proj.link ? proj.link : undefined}
          target="_blank"
          rel="noreferrer"
        >
          <h5 className="d-inline-block subtitle">{proj.name}</h5>
        </a>
        {proj.github ? (
          <a href={proj.github} className="d-inline-block px-2">
            <FontAwesomeIcon icon={faGithub} className="secondary_color" />
          </a>
        ) : null}
        <ul>
          {proj.description.map((a) => (
            <li>{a}</li>
          ))}
        </ul>
      </Col>
    );
  });

  return (
    <Container className="px-3 pb-4">
      <h1 className="secondary_color">Projects</h1>
      <Row>{projects}</Row>
    </Container>
  );
};

export default Projects;
