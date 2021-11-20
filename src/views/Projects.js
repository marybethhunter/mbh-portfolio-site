import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Masonry from 'react-smart-masonry';
import { Link } from 'react-router-dom';
import { getAllProjects } from '../api/data/portfolioData';
import ProjectCard from '../components/ProjectCard';

const DivStyle = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: center;
  min-height: 90vh;
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
    <DivStyle>
      {user?.isAdmin && <Link to="/addproject">Add Project</Link>}
      <Masonry columns={2} gap={18}>
        {projects.map((project) => (
          <ProjectCard
            key={project.firebaseKey}
            project={project}
            setProjects={setProjects}
            user={user}
          />
        ))}
      </Masonry>
    </DivStyle>
  );
}

Projects.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

Projects.defaultProps = {
  user: null,
};
