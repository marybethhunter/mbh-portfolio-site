import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

const ButtonStyle = styled(Button)`
  color: #160033;
  margin-left: 5px;
`;

const NavStyle = styled(AppBar)`
  background-color: #ffffff;
`;

// const TypographyStyle = styled(Typography)`
//   color: #160033;
// `;

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavStyle position="static">
        <Toolbar>
          {/* <TypographyStyle variant="h5">Mary Beth Hunter</TypographyStyle> */}
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
