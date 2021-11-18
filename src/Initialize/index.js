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
      light: '#645B78',
      main: '#6B01FD',
      dark: '#160033',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#49FDB1',
      contrastText: '#ffffff',
    },
  },
  typography: {
    allVariants: {
      color: '#ffffff',
    },
  },
  Card: {
    allVariants: {
      color: '#ffffff',
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
