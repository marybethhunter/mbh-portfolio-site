import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  CardBody, CardTitle, CardSubtitle, CardLink,
} from 'reactstrap';
import { getContactInfo } from '../api/data/portfolioData';

const ContactStyle = styled.div`
  width: 300px;
  height: 400px;
  margin: 10px;
`;

export default function ContactCard({ contact, setContacts }) {
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
      <Link to={`/edit/contact/${contact.firebaseKey}`}>Edit Contact Info</Link>
      <ContactStyle>
        <CardBody>
          <CardTitle tag="h5">Contact Me</CardTitle>
          <CardSubtitle className="mb-2" tag="h6">
            {contact.name}
          </CardSubtitle>
          <CardSubtitle>
            <CardLink href={contact.github} target="_blank">
              Check out my Github!
            </CardLink>
          </CardSubtitle>
          <CardSubtitle>
            <CardLink href={contact.linkedIn} target="_blank">
              Connect with me on LinkedIn!
            </CardLink>
          </CardSubtitle>
          <CardSubtitle className="mb-2" tag="h6">
            {contact.email}
          </CardSubtitle>
          <CardSubtitle className="mb-2" tag="h6">
            {contact.phone}
          </CardSubtitle>
        </CardBody>
      </ContactStyle>
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
};
