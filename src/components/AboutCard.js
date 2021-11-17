import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { getAboutMe } from '../api/data/portfolioData';

const AboutStyle = styled.div`
  width: 600px;
  height: 400px;
  margin: 10px;
`;

const ImgStyle = styled.img`
  width: 300px;
  height: 400px;
`;

const DivStyle = styled.div`
  display: flex;
  flex-wrap: flex-wrap;
  margin-top: 60px;
  justify-content: center;
`;

export default function AboutCard({ about, setAbouts }) {
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
    <DivStyle>
      <ImgStyle alt="Mary Beth Hunter" src={about.image} />
      <AboutStyle>
        <CardBody>
          <CardBody>
            <Link to={`/editabout/${about.firebaseKey}`}>Edit About Me</Link>
          </CardBody>
          <CardTitle tag="h5">About Me</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {about.bio}
          </CardSubtitle>
        </CardBody>
      </AboutStyle>
    </DivStyle>
  );
}

AboutCard.propTypes = {
  about: PropTypes.shape({
    bio: PropTypes.string,
    image: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  setAbouts: PropTypes.func.isRequired,
};
