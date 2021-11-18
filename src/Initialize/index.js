import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { createTheme, ThemeProvider } from '@mui/material';
import Routes from '../routes/index';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      light: '#dec2d7',
      main: '#AC92A6',
      dark: '#7d6477',
      contrastText: '#403D39',
    },
    secondary: {
      light: '#ffffff',
      main: '#fffcf2',
      dark: '#ccc9bf',
      contrastText: '#252422',
    },
  },
  typography: {
    allVariants: {
      color: '#ffffff',
    },
  },
  Card: {
    allVariants: {
      color: '#ccc9bf',
    },
  },
});

function Initialize() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userObj = {
          fullName: authed.displayName,
          uid: authed.uid,
          isAdmin: process.env.REACT_APP_ADMIN_UID === authed.uid,
        };
        setUser(userObj);
      }
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Routes user={user} />
      <Footer />
    </ThemeProvider>
  );
}

export default Initialize;
