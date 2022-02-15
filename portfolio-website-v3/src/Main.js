import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

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
        Hello 👋🏼
        <br />
        My name is Shayan <br />
        A Software Developer living in Ontario, Canada 🇨🇦
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
          <FontAwesomeIcon icon={faGithub} color="black" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/shayanabd/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="black" />
        </a>
        <br />
        {/* <!-- <div class="download_resume home-links">
        <a target="_blank" href="./AbediShayan_Resume.pdf" download>
          <i class="fas fa-file-download"></i> Resume
        </a>
      </div> --> */}
      </SocialLinks>
    </Container>
  );
};

export default Main;
