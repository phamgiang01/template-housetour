import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MenuData } from "../data/MenuData";
import{FaTimes} from "react-icons/fa"
import { Button } from "./Button";
const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #cd853f;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({isOpen})=>(isOpen ?'1' : '0')};
  top:${({isOpen})=>(isOpen ? '0' :'-100%')}
`;


const Icon = styled.div`
  position:absolute;
  top:1.2rem;
  right:1.5rem;
  background:transparent;
  font-size:2rem;
  cursor:pointer;
  outline:none
`
const CloseIcon = styled(FaTimes)`
  color:#000d1a;
`
const DropdownWrapper = styled.div`

`
const DropdownMenu = styled.div`
  display:grid;
  grid-template-rows:repeat(4,80px);
  grid-template-columns:1fr;
  text-align:center;
  margin-bottom:4rem;

  @media screen and (max-width:768px){
    grid-template-rows:repeat(4,60px);
  }
`
const DropdownLink = styled(Link)`
  display:flex;
  color:#fff;
  align-items:center;
  justify-content:center;
  font-size:1.5rem;
  cursor:pointer;
  transition:.2s ease-in-out;

  &:hover{
    color:#000d1a;
  }
`
const BtnWrap = styled.div`
  display:flex;
  justify-content:center;
`

const Dropdown = ({isOpen,toggle}) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {MenuData.map((item, index) => {
            return (
              <DropdownLink to={item.link} key={index}>
                {item.title}
              </DropdownLink>
            );
          })}
        </DropdownMenu>
        <BtnWrap>
          <Button primary="true" round="true" to="/contact">
            Contact Us
          </Button>
        </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;