import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import { getSingleProject } from '../api/data/portfolioData';

const DivStyle = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: #6B01FD;
  margin-top: 4px;
  border-radius: 5px;
  min-height: 90vh;
`;

const CardStyle = styled(Card)`
  margin: 20px 5px;
  border-radius: 5px;
  box-shadow: 12px 12px 2px 1px #49fdb1;
  // border: 2px solid #160033;
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
            // sx={{
            //   height: 'auto',
            //   width: 'auto',
            //   maxHeight: {
            //     xs: 300, sm: 600, md: 900, lg: 1200, xl: 1536,
            //   },
            //   maxWidth: {
            //     xs: 350, sm: 600, md: 900, lg: 1200, xl: 1536,
            //   },
            // }}
            style={{ backgroundColor: '#6B01FD' }}
          >
            <ImgStyle
              component="img"
              height="325"
              image={project.projectImage}
              alt={project.projectName}
            />
            <CardContent>
              <Typography
                style={{ color: '#ffffff' }}
                gutterBottom
                variant="h4"
                component="div"
              >
                {project.projectName}
              </Typography>
              <Typography
                style={{ color: '#ffffff' }}
                gutterBottom
                variant="body1"
                component="div"
              >
                {project.projectDescription}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                style={{ color: '#ffffff' }}
                href={project.repoLink}
                target="_blank"
              >
                <GitHubIcon style={{ color: '#ffffff' }} /> Github
              </Button>
              <Button
                style={{ color: '#ffffff' }}
                href={project.deployedLink}
                target="_blank"
              >
                <LanguageIcon style={{ color: '#ffffff' }} /> Deployed Site
              </Button>
            </CardActions>
          </CardStyle>
        </DivStyle>
      </DivStyle>
    </>
  );
}
