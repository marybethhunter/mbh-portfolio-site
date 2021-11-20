import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Masonry from 'react-smart-masonry';
import { getAllTechUsed } from '../api/data/portfolioData';
import TechCard from '../components/TechCard';

const DivStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
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
    <DivStyle style={{ backgroundColor: '#ffffff' }} className="tech-div">
      {user?.isAdmin && <Link to="/add-tech">Add New Tech</Link>}
      <Masonry columns={3} gap={35}>
        {techs.map((tech) => (
          <TechCard
            key={tech.firebaseKey}
            tech={tech}
            setTechs={setTechs}
            user={user}
          />
        ))}
      </Masonry>
    </DivStyle>
  );
}

Tech.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

Tech.defaultProps = {
  user: null,
};
