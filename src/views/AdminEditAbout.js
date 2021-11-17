import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleAbout } from '../api/data/portfolioData';
import AboutCardForm from '../components/forms/AboutCardForm';

export default function AdminEditAbout() {
  const [editAbout, setEditAbout] = useState({});
  const { fbKey } = useParams();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getSingleAbout(fbKey).then(setEditAbout);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <AboutCardForm obj={editAbout} />
    </>
  );
}
