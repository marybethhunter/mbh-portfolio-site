import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getAllProjects } from '../api/data/portfolioData';
import ProjectCard from '../components/ProjectCard';

const ProjectViewStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default function Projects({ user }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getAllProjects().then((projArray) => {
      if (isMounted) setProjects(projArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <h2>Projects</h2>
      {user?.isAdmin && <Link to="/addproject">Add Project</Link>}
      <ProjectViewStyle>
        {projects.map((project) => (
          <ProjectCard
            key={project.firebaseKey}
            project={project}
            setProjects={setProjects}
            user={user}
          />
        ))}
      </ProjectViewStyle>
    </>
  );
}

Projects.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

Projects.defaultProps = {
  user: null,
};
