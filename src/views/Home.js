import React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Container';

const DivStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1px;
`;

const BoxStyle = styled(Box)`
  height: 90vh;
  border-radius: 5px;
  padding: 0;
`;

export default function Home() {
  return (
    <DivStyle>
      <BoxStyle
        component="img"
        sx={{
          height: 'auto',
          width: 'auto',
          maxHeight: { xs: 800, md: 1050 },
          maxWidth: { xs: 1280, md: 1680 },
        }}
        alt="home"
        src="https://i.ibb.co/mRPLZvF/My-Post-1.png"
        style={{
          boxShadow: '0 0 50px 25px #49FDB1',
          clipPath: 'inset(0px -55px 0px -55px)',
        }}
      />
    </DivStyle>
  );
}
