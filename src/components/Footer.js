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
  bottom: 0;
`;

export default function Footer() {
  return (
    <DivStyle>
      <NavbarStyle
        sx={{
          height: 'auto',
          width: 'auto',
          maxHeight: {
            xs: 300,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
          },
          maxWidth: {
            xs: 350,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
          },
        }}
        className="footer"
        light
      >
        <NavLink className="footer-text" onClick={signInUser}>
          Copyright © Mary Beth Hunter 2021
        </NavLink>
      </NavbarStyle>
    </DivStyle>
  );
}
