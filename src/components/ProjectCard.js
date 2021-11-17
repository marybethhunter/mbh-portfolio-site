import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  CardBody, CardTitle, CardSubtitle, CardLink,
} from 'reactstrap';
import styled from 'styled-components';
import { deleteProject } from '../api/data/portfolioData';

const CardStyle = styled.div`
  width: 300px;
  height: 400px;
  margin: 10px;
`;

export default function ProjectCard({ project, setProjects, user }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      deleteProject(project.firebaseKey).then((projArray) => setProjects(projArray));
    }
  };

  return (
    <div>
      <CardStyle>
        <CardBody>
          <CardTitle tag="h5">{project.projectName}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Card subtitle
          </CardSubtitle>
        </CardBody>
        <img
          alt={project.projectName}
          src={project.projectImage}
          width="100%"
        />
        <CardBody>
          <CardLink href={`/details/${project.firebaseKey}`}>Details</CardLink>
          {user?.isAdmin && (
            <Link to={`/edit/project/${project.firebaseKey}`}>
              Edit Project
            </Link>
          )}
          {user?.isAdmin && (
            <button type="button" onClick={() => handleClick('delete')}>
              delete
            </button>
          )}
        </CardBody>
      </CardStyle>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    projectName: PropTypes.string,
    projectImage: PropTypes.string,
    projectDescription: PropTypes.string,
    firebaseKey: PropTypes.string,
    deployedLink: PropTypes.string,
    repoLink: PropTypes.string,
  }).isRequired,
  setProjects: PropTypes.func.isRequired,
  user: PropTypes.shape(PropTypes.obj),
};

ProjectCard.defaultProps = {
  user: null,
};
