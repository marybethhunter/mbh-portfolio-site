import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import { deleteProject } from '../api/data/portfolioData';

const DivStyle = styled.div`
  padding: 5px;
`;

const CardStyle = styled(Card)`
  border-radius: 5px;
  box-shadow: 12px 12px 2px 1px #49fdb1;
  text-align: center;
  align-items: center;
`;

export default function ProjectCard({ project, setProjects, user }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      deleteProject(project.firebaseKey).then((projArray) => setProjects(projArray));
    }
  };

  return (
    <DivStyle className="project-div">
      <CardStyle
        color="primary"
        style={{ backgroundColor: '#6B01FD' }}
        className="project-card-div"
      >
        <CardContent>
          <Typography color="#ffffff" gutterBottom variant="h5" component="div">
            {project.projectName}
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: 'center' }}>
          <Button
            style={{ color: '#ffffff' }}
            size="medium"
            href={`/details/${project.firebaseKey}`}
          >
            <DoubleArrowIcon style={{ color: '#ffffff' }} /> Project Details
          </Button>
          {user?.isAdmin && (
            <Button
              style={{ color: '#ffffff' }}
              size="medium"
              href={`/edit/project/${project.firebaseKey}`}
            >
              Edit Project
            </Button>
          )}
          {user?.isAdmin && (
            <Button
              style={{ color: '#ffffff' }}
              size="medium"
              type="button"
              onClick={() => handleClick('delete')}
            >
              delete
            </Button>
          )}
        </CardActions>
      </CardStyle>
    </DivStyle>
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
