import React from "react";
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { AiFillHome } from 'react-icons/ai';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BackToHome = styled(Link)`
  position: absolute;
  right: 3%;
  top: 2%;
  font-size:40px;
  color: white;
`;

function Header() {
  return (
    <header>
      <h1><BorderColorIcon />&nbsp;&nbsp;ScribblePro</h1>
      <BackToHome to='/dashboard'>
          <AiFillHome />
      </BackToHome>
    </header>
  );
}

export default Header;
