import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProject } from '../api/data/portfolioData';
import ProjectCardForm from '../components/forms/ProjectCardForm';

export default function AdminEditAbout() {
  const [editProject, seteditProject] = useState({});
  const { projKey } = useParams();

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
      <ProjectCardForm obj={editProject} />
    </>
  );
}
