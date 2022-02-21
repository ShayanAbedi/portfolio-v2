import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faChevronRight,
  faEnvelope,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  font-size: 36px;
  font-weight: 300;
  text-align: center;
  margin: 15rem auto;
`;

const SocialLinks = styled.div`
  margin: 100px;
  a {
    margin: 0px 20px;
  }
`;

const Work = styled(Link)`
  margin: 0 auto;
  background: none;
  border: 2px solid #708090;
  border-radius: 1rem;
  font-size: 20px;
  font-weight: 600;
  max-width: 400px;
  padding: 20px 60px;
  text-decoration: none;
  color: inherit;

  svg {
    margin-left: 5px;
    font-size: 15px;
  }
  :hover {
    svg {
      margin-left: 30px;
      color: #0a192f;
    }
    background-color: #708090;
    color: #0a192f;
  }
`;

const App = () => {
  return (
    <Container>
      <div>
        Hi 👋🏼
        <br />
        My name is Shayan <br />
        A Software Developer based in Ontario, Canada 🇨🇦
        <br />
        <br />
        Welcome to my Portfolio Website
      </div>
      <SocialLinks>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/ShayanAbedi"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/shayanabd/"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:shayanabedi.dev@gmail.com"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="./public/AbediShayan_Resume.pdf"
          download
        >
          <FontAwesomeIcon icon={faFileArrowDown} />
        </a>
      </SocialLinks>

      <Work to="/work">
        Checkout my Work <FontAwesomeIcon icon={faChevronRight} size="sm" />{" "}
      </Work>
    </Container>
  );
};

export default App;
