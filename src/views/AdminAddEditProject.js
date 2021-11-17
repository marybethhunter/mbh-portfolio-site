import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { getSingleProject } from '../api/data/portfolioData';
import ProjectCardForm from '../components/forms/ProjectCardForm';
import { signOutUser } from '../api/auth';

const ButtonStyle = styled.button`
  margin-top: 40px;
  color: white;
  background-color: orange;
`;

export default function AdminEditAbout({ user }) {
  const [editProject, seteditProject] = useState({});
  const { projKey } = useParams();
  const history = useHistory();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getSingleProject(projKey).then(seteditProject);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <ProjectCardForm obj={editProject} user={user} />
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
