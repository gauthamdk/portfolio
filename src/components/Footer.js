import { React } from "react";
import {
  faTwitter,
  faLinkedin,
  faGithub,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "../styles/body.scss";

const Footer = () => {
  return (
    <footer>
      <section className="d-flex justify-content-center p-4">
        <div>
          <a href="https://twitter.com/_gauthamdk" className="me-4 text-reset">
            <FontAwesomeIcon
              icon={faTwitter}
              className="links_color"
              size="lg"
            ></FontAwesomeIcon>
          </a>
          <a
            href="https://www.linkedin.com/in/gautham-dinesh-kumar-lali-9b81a1193/"
            className="me-4 text-reset"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="links_color"
              size="lg"
            ></FontAwesomeIcon>
          </a>
          <a href="https://gauthamdk.medium.com/" className="me-4 text-reset">
            <FontAwesomeIcon
              icon={faMedium}
              className="links_color"
              size="lg"
            ></FontAwesomeIcon>
          </a>
          <a href="https://github.com/gauthamdk" className="me-4 text-reset">
            <FontAwesomeIcon
              icon={faGithub}
              className="links_color"
              size="lg"
            ></FontAwesomeIcon>
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
