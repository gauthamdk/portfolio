import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/body.scss";

const Skills = () => {
  return (
    <Container className="px-3 pb-4">
      <h1 className="secondary_color">Skills</h1>
      <Row>
        <Col md={6}>
          <div class="skill">Python</div>
          <div class="progress-line Python">
            <span></span>
          </div>
        </Col>
        <Col md={6}>
          <div class="skill">JS</div>
          <div class="progress-line JS">
            <span></span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <div class="skill">SQL</div>
          <div class="progress-line SQL">
            <span></span>
          </div>
        </Col>
        <Col md={6}>
          <div class="skill">React</div>
          <div class="progress-line React">
            <span></span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <div class="skill">MongoDB</div>
          <div class="progress-line MongoDB">
            <span></span>
          </div>
        </Col>
        <Col md={6}>
          <div class="skill">NodeJS</div>
          <div class="progress-line NodeJS">
            <span></span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <div class="skill">Docker</div>
          <div class="progress-line Docker">
            <span></span>
          </div>
        </Col>
        <Col md={6}>
          <div class="skill">AWS</div>
          <div class="progress-line AWS">
            <span></span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
