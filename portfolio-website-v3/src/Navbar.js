import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Nav = styled.div`
  text-align: right;
`;

const Links = styled.div`
  button {
    background: none;
    border: none;
    padding: 20px;
  }
`;

const Navbar = ({ toggle, theme }) => {
  return (
    <Nav>
      <Links>
        <button onClick={toggle}>
          {theme === "light" ? (
            <FontAwesomeIcon icon={faSun} size="3x" />
          ) : (
            <FontAwesomeIcon icon={faMoon} size="3x" />
          )}
        </button>
      </Links>
    </Nav>
  );
};

export default Navbar;
