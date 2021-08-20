import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import "../styles/body.scss";

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
          <h5 className="subtitle">{exp.company}</h5>
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
    <Container className="px-3 pb-4">
      <h1>Experiences</h1>
      <hr size="4" />
      <Row>{experiences}</Row>
    </Container>
  );
};

export default Experiences;
