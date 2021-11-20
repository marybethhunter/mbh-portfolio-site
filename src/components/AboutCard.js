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
  min-height: 80vh;
  border-radius: 5px;
`;

const CardStyle = styled(Card)`
  margin: 60px 20px;
  border-radius: 5px;
  box-shadow: 12px 12px 2px 1px #49fdb1;
`;

const ImgStyle = styled(CardMedia)`
  border-radius: 5px;
`;

const TypographyStyle = styled(Typography)`
  margin-top: 30px;
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
      <DivStyle maxWidth="sm" className="about-div">
        {user?.isAdmin && (
          <Link to={`/editabout/${about.firebaseKey}`}>Edit About Me</Link>
        )}
        <CardStyle
          className="about-card-div"
          sx={{ maxWidth: 700 }}
          height="400"
          style={{ backgroundColor: '#6B01FD' }}
        >
          <CardContent>
            <Typography
              style={{ color: '#fffcf2' }}
              gutterBottom
              variant="h4"
              component="div"
            >
              About Me!
            </Typography>
            <TypographyStyle
              style={{ color: '#fffcf2' }}
              gutterBottom
              variant="body1"
              component="div"
            >
              {about.bio}
            </TypographyStyle>
            <TypographyStyle
              style={{ color: '#fffcf2' }}
              gutterBottom
              variant="body1"
              component="div"
            >
              {about.bio2}
            </TypographyStyle>
          </CardContent>
        </CardStyle>
        <CardStyle sx={{ maxWidth: 400 }} className="about-card-div">
          <ImgStyle
            component="img"
            height="600"
            width="300"
            image={about.image}
            alt="Mary Beth Hunter"
            style={{ padding: 0 }}
            className="about-img-div"
          />
        </CardStyle>
      </DivStyle>
    </>
  );
}

AboutCard.propTypes = {
  about: PropTypes.shape({
    bio: PropTypes.string,
    bio2: PropTypes.string,
    image: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  setAbouts: PropTypes.func.isRequired,
  user: PropTypes.shape(PropTypes.obj),
};

AboutCard.defaultProps = {
  user: null,
};
