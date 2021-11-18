import React from 'react';
import styled from 'styled-components';
import { Navbar, NavLink } from 'reactstrap';
import { signInUser } from '../api/auth';

const DivStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NavbarStyle = styled(Navbar)`
  display: flex;
  background-color: #ac92a6;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  height: 24px;
`;

export default function Footer() {
  return (
    <DivStyle>
      <NavbarStyle className="footer" expand="md" fixed="bottom" light>
        <NavLink className="footer-text" onClick={signInUser}>
          Copyright © Mary Beth Hunter 2021
        </NavLink>
      </NavbarStyle>
    </DivStyle>
  );
}
