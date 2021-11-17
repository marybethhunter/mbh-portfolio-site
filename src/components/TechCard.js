import React from 'react';
import PropTypes from 'prop-types';
import { CardBody } from 'reactstrap';
import styled from 'styled-components';
import { deleteTech } from '../api/data/portfolioData';

const CardStyle = styled.div`
  width: 300px;
  height: 400px;
  margin: 10px;
`;

export default function TechCard({ tech, setTechs, user }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      deleteTech(tech.firebaseKey).then((techArray) => setTechs(techArray));
    }
  };

  return (
    <div>
      <CardStyle>
        <img alt="logo of tech" src={tech.logo} width="100%" />
        <CardBody>
          {user?.isAdmin && (
            <button type="button" onClick={() => handleClick('delete')}>
              delete
            </button>
          )}
        </CardBody>
      </CardStyle>
    </div>
  );
}

TechCard.propTypes = {
  tech: PropTypes.shape({
    logo: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  setTechs: PropTypes.func.isRequired,
  user: PropTypes.shape(PropTypes.obj),
};

TechCard.defaultProps = {
  user: null,
};
