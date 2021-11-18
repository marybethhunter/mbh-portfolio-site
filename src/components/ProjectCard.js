import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import { deleteProject } from '../api/data/portfolioData';

const DivStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const CardStyle = styled(Card)`
  margin: 5px;
  border-radius: 5px;
`;

export default function ProjectCard({ project, setProjects, user }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      deleteProject(project.firebaseKey).then((projArray) => setProjects(projArray));
    }
  };

  return (
    <DivStyle>
      <CardStyle color="primary" style={{ backgroundColor: '#AC92A6' }}>
        <CardMedia
          component="img"
          height="150"
          width="175"
          image={project.projectImage}
          alt={project.projectName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.projectName}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            style={{ color: '#ffffff' }}
            size="small"
            href={`/details/${project.firebaseKey}`}
          >
            Project Details
          </Button>
          {user?.isAdmin && (
            <Button
              style={{ color: '#ffffff' }}
              href={`/edit/project/${project.firebaseKey}`}
            >
              Edit Project
            </Button>
          )}
          {user?.isAdmin && (
            <Button
              style={{ color: '#ffffff' }}
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
