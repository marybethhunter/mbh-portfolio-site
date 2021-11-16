import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getAllTechUsed } from '../api/data/portfolioData';
import TechCard from '../components/TechCard';

const TechViewStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default function Tech() {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getAllTechUsed().then((techArray) => {
      if (isMounted) setTechs(techArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <h2>Tech Used</h2>
      <TechViewStyle>
        {techs.map((tech) => (
          <TechCard key={tech.firebaseKey} tech={tech} setTechs={setTechs} />
        ))}
      </TechViewStyle>
    </>
  );
}
