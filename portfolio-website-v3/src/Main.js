import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faAngleDown,
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

const Main = () => {
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
    </Container>
  );
};

export default Main;
