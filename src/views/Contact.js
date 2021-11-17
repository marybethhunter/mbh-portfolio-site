import React, { useState, useEffect } from 'react';
import { getContactInfo } from '../api/data/portfolioData';
import ContactCard from '../components/ContactCard';

export default function About() {
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
          />
        ))}
      </div>
    </>
  );
}
