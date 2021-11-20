import React from 'react';
import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const ButtonStyle = styled(Button)`
  color: #160033;
  margin-left: 5px;
  font-size: 20px;
`;

const NavStyle = styled(AppBar)`
  background-color: #ffffff;
  margin-bottom: 3px;
  align-items: center;
`;

export default function NavBar() {
  return (
    <Box>
      <NavStyle position="static">
        <Toolbar>
          <div>
            <ButtonStyle href="/">Home</ButtonStyle>
            <ButtonStyle href="/about">About</ButtonStyle>
            <ButtonStyle href="/contact">Contact</ButtonStyle>
            <ButtonStyle href="/tech">Technologies</ButtonStyle>
            <ButtonStyle href="/projects">Projects</ButtonStyle>
          </div>
        </Toolbar>
      </NavStyle>
    </Box>
  );
}
