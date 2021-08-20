import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import "../styles/body.scss";

const Experiences = ({ exps }) => {
  const experiences = exps.map((exp) => {
    return (
      <Col key={exp.id} xs={12}>
        <h4>{exp.position}</h4>

        <Row>
          <Col lg={9}>
            <a
              href={exp.link ? exp.link : undefined}
              target="_blank"
              rel="noreferrer"
            >
              <h5 className="subtitle">{exp.company}</h5>
            </a>
          </Col>
          <Col lg={3}>
            <p className="text-end">{exp.date}</p>
          </Col>
        </Row>
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
      <h1 className="secondary_color">Experiences</h1>
      <hr size="4" />
      <Row>{experiences}</Row>
    </Container>
  );
};

export default Experiences;
