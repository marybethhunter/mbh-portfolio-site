import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import { getAboutMe } from '../api/data/portfolioData';

const DivStyle = styled.div`
  display: flex;
  flex-wrap: flex-wrap;
  justify-content: center;
  background-color: #fffcf2;
  margin-top: 55px;
  border-radius: 5px;
`;

const CardStyle = styled(Card)`
  margin: 60px 5px;
  border-radius: 5px;
`;

const ImgStyle = styled(CardMedia)`
  border-radius: 5px;
`;

export default function AboutCard({ about, setAbouts, user }) {
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
      <DivStyle maxWidth="sm">
        {user?.isAdmin && (
          <Link to={`/editabout/${about.firebaseKey}`}>Edit About Me</Link>
        )}
        <CardStyle sx={{ maxWidth: 400 }}>
          <ImgStyle
            component="img"
            height="500"
            width="300"
            image={about.image}
            alt="Mary Beth Hunter"
          />
        </CardStyle>
        <CardStyle
          sx={{ maxWidth: 700 }}
          height="400"
          style={{ backgroundColor: '#AC92A6' }}
        >
          <CardContent>
            <Typography
              style={{ color: '#fffcf2' }}
              gutterBottom
              variant="h6"
              component="div"
            >
              About Me
            </Typography>
            <Typography
              style={{ color: '#fffcf2' }}
              gutterBottom
              variant="subtitle1"
              component="div"
            >
              {about.bio}
            </Typography>
          </CardContent>
        </CardStyle>
      </DivStyle>
    </>
  );
}

AboutCard.propTypes = {
  about: PropTypes.shape({
    bio: PropTypes.string,
    image: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  setAbouts: PropTypes.func.isRequired,
  user: PropTypes.shape(PropTypes.obj),
};

AboutCard.defaultProps = {
  user: null,
};
