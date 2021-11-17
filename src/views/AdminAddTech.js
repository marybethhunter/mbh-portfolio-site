import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TechCardForm from '../components/forms/TechCardForm';
import { signOutUser } from '../api/auth';

const ButtonStyle = styled.button`
  margin-top: 40px;
  color: white;
  background-color: orange;
`;

export default function AdminAddTech({ user }) {
  const history = useHistory();

  return (
    <>
      <TechCardForm user={user} />
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

AdminAddTech.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

AdminAddTech.defaultProps = {
  user: null,
};
