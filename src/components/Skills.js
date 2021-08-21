import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/body.scss";

const Skills = () => {
  const skillsRef = useRef(null);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  };

  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsAnimated(entry.isIntersecting);
    }, options);

    if (skillsRef.current && !isAnimated) observer.observe(skillsRef.current);

    return () => {
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, [skillsRef, options]);

  return (
    <Container className="px-3 pb-4" ref={skillsRef}>
      <h1 className="secondary_color">Skills</h1>
      <Row>
        <Col md={6}>
          <div className="skill">Python</div>
          <div
            className={`progress-line Python ${
              isAnimated ? "progress-line-animation" : ""
            }`}
          >
            <span
              className={`${isAnimated ? "progress-bar-animation" : ""}`}
            ></span>
          </div>
        </Col>
        <Col md={6}>
          <div className="skill">JS</div>
          <div
            className={`progress-line JS ${
              isAnimated ? "progress-line-animation" : ""
            }`}
          >
            <span
              className={`${isAnimated ? "progress-bar-animation" : ""}`}
            ></span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <div className="skill">SQL</div>
          <div
            className={`progress-line SQL ${
              isAnimated ? "progress-line-animation" : ""
            }`}
          >
            <span
              className={`${isAnimated ? "progress-bar-animation" : ""}`}
            ></span>
          </div>
        </Col>
        <Col md={6}>
          <div className="skill">React</div>
          <div
            className={`progress-line React ${
              isAnimated ? "progress-line-animation" : ""
            }`}
          >
            <span
              className={`${isAnimated ? "progress-bar-animation" : ""}`}
            ></span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <div className="skill">MongoDB</div>
          <div
            className={`progress-line MongoDB ${
              isAnimated ? "progress-line-animation" : ""
            }`}
          >
            <span
              className={`${isAnimated ? "progress-bar-animation" : ""}`}
            ></span>
          </div>
        </Col>
        <Col md={6}>
          <div className="skill">NodeJS</div>
          <div
            className={`progress-line NodeJS ${
              isAnimated ? "progress-line-animation" : ""
            }`}
          >
            <span
              className={`${isAnimated ? "progress-bar-animation" : ""}`}
            ></span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <div className="skill">Docker</div>
          <div
            className={`progress-line Docker ${
              isAnimated ? "progress-line-animation" : ""
            }`}
          >
            <span
              className={`${isAnimated ? "progress-bar-animation" : ""}`}
            ></span>
          </div>
        </Col>
        <Col md={6}>
          <div className="skill">AWS</div>
          <div
            className={`progress-line AWS ${
              isAnimated ? "progress-line-animation" : ""
            }`}
          >
            <span
              className={`${isAnimated ? "progress-bar-animation" : ""}`}
            ></span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
