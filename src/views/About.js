import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getAboutMe } from '../api/data/portfolioData';
import AboutCard from '../components/AboutCard';

const DivStyle = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: center;
  min-height: 90vh;
`;
export default function About({ user }) {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getAboutMe().then((aboutArray) => {
      if (isMounted) setAbouts(aboutArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <DivStyle>
        {abouts.map((about) => (
          <AboutCard
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
            key={about.firebaseKey}
            about={about}
            setAbouts={setAbouts}
            user={user}
          />
        ))}
      </DivStyle>
    </>
  );
}

About.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

About.defaultProps = {
  user: null,
};
