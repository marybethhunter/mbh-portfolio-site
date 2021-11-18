import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { getContactInfo } from '../api/data/portfolioData';

const DivStyle = styled.div`
  display: flex;
  flex-wrap: flex-wrap;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const CardStyle = styled(Card)`
  display: flex;
  flex-wrap: flex-wrap;
  justify-content: center;
`;
const TextStyle = styled(Typography)`
  margin-bottom: 30px;
`;

export default function ContactCard({ contact, setContacts, user }) {
  useEffect(() => {
    let isMounted = true;
    getContactInfo().then((contactArray) => {
      if (isMounted) setContacts(contactArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      {user?.isAdmin && (
        <Link to={`/edit/contact/${contact.firebaseKey}`}>
          Edit Contact Info
        </Link>
      )}
      <DivStyle>
        <CardStyle style={{ backgroundColor: '#AC92A6' }}>
          <CardContent>
            <Typography gutterBottom variant="h3" component="div">
              Contact Me!
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {contact.name}
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="div">
              {contact.phone}
            </Typography>
            <TextStyle gutterBottom variant="subtitle1" component="div">
              {contact.email}
            </TextStyle>
            <Button
              style={{ color: '#ffffff' }}
              href={contact.github}
              target="_blank"
            >
              Github
            </Button>
            <Button
              style={{ color: '#ffffff' }}
              href={contact.linkedIn}
              target="_blank"
            >
              LinkedIn
            </Button>
          </CardContent>
        </CardStyle>
      </DivStyle>
    </div>
  );
}

ContactCard.propTypes = {
  contact: PropTypes.shape({
    email: PropTypes.string,
    github: PropTypes.string,
    firebaseKey: PropTypes.string,
    linkedIn: PropTypes.string,
    name: PropTypes.string,
    phone: PropTypes.string,
  }).isRequired,
  setContacts: PropTypes.func.isRequired,
  user: PropTypes.shape(PropTypes.obj),
};

ContactCard.defaultProps = {
  user: null,
};
