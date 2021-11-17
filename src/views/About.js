import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getAboutMe } from '../api/data/portfolioData';
import AboutCard from '../components/AboutCard';

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
      <div>
        {abouts.map((about) => (
          <AboutCard
            key={about.firebaseKey}
            about={about}
            setAbouts={setAbouts}
            user={user}
          />
        ))}
      </div>
    </>
  );
}

About.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

About.defaultProps = {
  user: null,
};
