import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import {
  CardBody,
  CardTitle,
  CardSubtitle,
  CardLink,
  CardText,
} from 'reactstrap';
import { getSingleProject } from '../api/data/portfolioData';

const DetailsStyle = styled.div`
  width: 300px;
  height: 400px;
  margin: 10px;
`;

export default function Details() {
  const [project, setProject] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getSingleProject(firebaseKey).then(setProject);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <DetailsStyle>
        <CardBody>
          <CardTitle tag="h5">Project Details</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {project.projectName}
          </CardSubtitle>
        </CardBody>
        <img
          alt={project.projectName}
          src={project.projectImage}
          width="100%"
        />
        <CardText>{project.projectDescription}</CardText>
        <CardLink href={project.repoLink} target="_blank">
          Check it out on Github!
        </CardLink>
        <CardLink href={project.deployedLink} target="_blank">
          See Deployed Site!
        </CardLink>
      </DetailsStyle>
    </div>
  );
}
