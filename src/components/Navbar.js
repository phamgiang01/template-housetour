import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { MenuData } from "../data/MenuData";
import { Button } from "./Button";
import Bars from "../images/bar.png"

const Nav = styled.nav`
  height: 60px;
  background: #000;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  background: transparent;
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

const Logo = styled(Link)`
  ${NavLink}
  font-style:italic;
`;

const MenuBars = styled.i`
  display: none;

  @media screen and (max-width:768px){
    display:block;
    background-image:url(${Bars});
    background-size:contain;
    height:40px;
    width:40px;
    position:absolute;
    top:0;
    right:0;
    transform:translate(-50%,25%);
    
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const NavMenuLinks = styled(Link)`
  ${NavLink};
  color: #fff;
`;
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = ({toggle}) => {
  return (
    <Nav>
      <Logo to="/">ELIXR</Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {MenuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary="true">
          Contact
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
