import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const Experiences = ({ exps }) => {
  const experiences = exps.map((exp) => {
    return (
      <Col key={exp.id} xs={12}>
        <h4>{exp.position}</h4>
        <a
          href={exp.link ? exp.link : undefined}
          target="_blank"
          rel="noreferrer"
        >
          <h5>{exp.company}</h5>
        </a>
        <ul>
          {exp.achievements.map((a) => (
            <li>{a}</li>
          ))}
        </ul>
      </Col>
    );
  });

  return (
    <Container>
      <h1>Experiences</h1>
      <Row>{experiences}</Row>
    </Container>
  );
};

export default Experiences;
