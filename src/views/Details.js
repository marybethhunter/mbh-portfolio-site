import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import { getSingleProject } from '../api/data/portfolioData';

const DivStyle = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fffcf2;
  margin-top: 6px;
  border-radius: 5px;
  min-height: 100vh;
`;

const CardStyle = styled(Card)`
  margin: 60px 5px;
  border-radius: 5px;
  box-shadow: 12px 12px 2px 1px #ac92a6;
  border: 1px solid #ac92a6;
`;

const ImgStyle = styled(CardMedia)`
  border-radius: 5px;
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
    <>
      <DivStyle>
        <DivStyle maxWidth="lg">
          <CardStyle
            sx={{ maxWidth: 700 }}
            style={{ backgroundColor: '#fffcf2' }}
          >
            <ImgStyle
              component="img"
              height="300"
              image={project.projectImage}
              alt={project.projectName}
            />
            <CardContent>
              <Typography
                style={{ color: '#AC92A6' }}
                gutterBottom
                variant="h5"
                component="div"
              >
                {project.projectName}
              </Typography>
              <Typography
                style={{ color: '#AC92A6' }}
                gutterBottom
                variant="h5"
                component="div"
              >
                {project.projectDescription}
              </Typography>
            </CardContent>
            <CardActions>
              <Button color="primary" href={project.repoLink} target="_blank">
                Github
              </Button>
              <Button
                color="primary"
                href={project.deployedLink}
                target="_blank"
              >
                Deployed Site
              </Button>
            </CardActions>
          </CardStyle>
        </DivStyle>
      </DivStyle>
    </>
  );
}
