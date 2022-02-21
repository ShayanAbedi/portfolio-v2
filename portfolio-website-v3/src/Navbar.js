import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Nav = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr;
`;

const Shayan = styled(Link)`
  padding: 0px 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  max-width: 200px;
  letter-spacing: 0.1cm;
  text-decoration: none;
  color: inherit;
`;

const Right = styled.div`
  text-align: right;
  button {
    cursor: pointer;
    background: none;
    border: none;
    padding: 20px;
  }
  a {
    padding: 0px 30px;
  }
`;

const Navbar = ({ toggle, theme }) => {
  return (
    <Nav>
      <Shayan to="/">S H A Y A N</Shayan>
      <Right>
        <button onClick={toggle}>
          {theme === "dark" ? (
            <FontAwesomeIcon icon={faSun} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faMoon} size="2x" />
          )}
        </button>
      </Right>
    </Nav>
  );
};

export default Navbar;
