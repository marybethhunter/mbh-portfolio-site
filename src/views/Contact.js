import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getContactInfo } from '../api/data/portfolioData';
import ContactCard from '../components/ContactCard';

const DivStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
`;
export default function Contact({ user }) {
  const [contacts, setContacts] = useState([]);

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
    <>
      <DivStyle>
        {contacts.map((contact) => (
          <ContactCard
            key={contact.firebaseKey}
            contact={contact}
            setContacts={setContacts}
            user={user}
          />
        ))}
      </DivStyle>
    </>
  );
}

Contact.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

Contact.defaultProps = {
  user: null,
};
