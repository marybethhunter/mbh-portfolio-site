import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getAllTechUsed } from '../api/data/portfolioData';
import TechCard from '../components/TechCard';

const TechViewStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default function Tech({ user }) {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getAllTechUsed().then((techArray) => {
      if (isMounted) setTechs(techArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      {user?.isAdmin && <Link to="/add-tech">Add New Tech</Link>}
      <TechViewStyle>
        {techs.map((tech) => (
          <TechCard
            key={tech.firebaseKey}
            tech={tech}
            setTechs={setTechs}
            user={user}
          />
        ))}
      </TechViewStyle>
    </>
  );
}

Tech.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

Tech.defaultProps = {
  user: null,
};
