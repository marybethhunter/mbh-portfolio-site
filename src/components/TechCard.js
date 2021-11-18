import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { deleteTech } from '../api/data/portfolioData';

export default function TechCard({ tech, setTechs, user }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      deleteTech(tech.firebaseKey).then((techArray) => setTechs(techArray));
    }
  };

  return (
    <div>
      <Card sx={{ maxWidth: 200, maxHeight: 230 }}>
        <CardMedia
          component="img"
          height="200"
          image={tech.logo}
          alt="logo of tech"
        />
        <CardActions>
          {user?.isAdmin && (
            <Button
              color="primary"
              type="button"
              onClick={() => handleClick('delete')}
            >
              delete
            </Button>
          )}
        </CardActions>
      </Card>
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
