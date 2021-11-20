import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { getContactInfo } from '../api/data/portfolioData';

const DivStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
`;

const CardStyle = styled(Card)`
  display: flex;
  justify-content: center;
  box-shadow: 12px 12px 2px 1px #49fdb1;
`;
const TextStyle = styled(Typography)`
  margin-bottom: 30px;
`;

const ButtonStyle = styled(Button)`
  margin-right: 10px;
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
        <CardStyle
          sx={{
            height: 'auto',
            width: 'auto',
            maxHeight: { xs: 800, md: 1050 },
            maxWidth: { xs: 1280, md: 1680 },
          }}
          style={{ backgroundColor: '#6B01FD' }}
        >
          <CardContent>
            <Typography gutterBottom variant="h1" component="div">
              Contact Me!
            </Typography>
            <Typography gutterBottom variant="h4" component="div">
              {contact.name}
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              component="div"
              href="tel:+1-662-687-3547"
            >
              <PhoneIcon style={{ color: '#ffffff' }} /> {contact.phone}
            </Typography>
            <TextStyle gutterBottom variant="body1" component="div">
              <EmailIcon style={{ color: '#ffffff' }} /> {contact.email}
            </TextStyle>
            <ButtonStyle
              style={{ color: '#ffffff' }}
              href={contact.github}
              target="_blank"
            >
              <GitHubIcon style={{ color: '#ffffff' }} /> Github
            </ButtonStyle>
            <Button
              style={{ color: '#ffffff' }}
              href={contact.linkedIn}
              target="_blank"
            >
              <LinkedInIcon style={{ color: '#ffffff' }} /> LinkedIn
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
