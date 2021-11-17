import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getAllProjects } from '../api/data/portfolioData';
import ProjectCard from '../components/ProjectCard';

const ProjectViewStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default function Projects() {
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
      <Link to="/addproject">Add Project</Link>
      <ProjectViewStyle>
        {projects.map((project) => (
          <ProjectCard
            key={project.firebaseKey}
            project={project}
            setProjects={setProjects}
          />
        ))}
      </ProjectViewStyle>
    </>
  );
}
