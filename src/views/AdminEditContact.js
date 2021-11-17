import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleContact } from '../api/data/portfolioData';
import ContactCardForm from '../components/forms/ContactCardForm';

export default function AdminEditAbout() {
  const [editContact, setEditContact] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getSingleContact(firebaseKey).then(setEditContact);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <ContactCardForm obj={editContact} />
    </>
  );
}
