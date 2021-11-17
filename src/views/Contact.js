import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getContactInfo } from '../api/data/portfolioData';
import ContactCard from '../components/ContactCard';

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
      <div>
        {contacts.map((contact) => (
          <ContactCard
            key={contact.firebaseKey}
            contact={contact}
            setContacts={setContacts}
            user={user}
          />
        ))}
      </div>
    </>
  );
}

Contact.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

Contact.defaultProps = {
  user: null,
};
