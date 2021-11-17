import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getSingleAbout } from '../api/data/portfolioData';
import AboutCardForm from '../components/forms/AboutCardForm';
import { signOutUser } from '../api/auth';

const ButtonStyle = styled.button`
  margin-top: 40px;
  color: white;
  background-color: orange;
`;
export default function AdminEditAbout({ user }) {
  const [editAbout, setEditAbout] = useState({});
  const { fbKey } = useParams();
  const history = useHistory();

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
      <AboutCardForm obj={editAbout} user={user} />
      <ButtonStyle
        type="button"
        onClick={() => {
          signOutUser().then(() => {
            history.push('/');
          });
        }}
      >
        Sign Out
      </ButtonStyle>
    </>
  );
}

AdminEditAbout.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

AdminEditAbout.defaultProps = {
  user: null,
};
