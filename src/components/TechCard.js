import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import { deleteTech } from '../api/data/portfolioData';

const CardStyle = styled(Card)`
  margin-top: 10px;
  box-shadow: 12px 12px 2px 1px #49fdb1;
`;

export default function TechCard({ tech, setTechs, user }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      deleteTech(tech.firebaseKey).then((techArray) => setTechs(techArray));
    }
  };

  return (
    <div>
      <CardStyle sx={{ maxWidth: 400, maxHeight: 500 }}>
        <CardMedia
          component="img"
          // height="200"
          image={tech.logo}
          alt="logo of tech"
        />
        <CardActions>
          {user?.isAdmin && (
            <button
              color="#160033"
              type="button"
              onClick={() => handleClick('delete')}
            >
              delete
            </button>
          )}
        </CardActions>
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
