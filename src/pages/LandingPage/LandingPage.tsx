import React from 'react';
import { Box } from '@mui/material';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './assets/landinpageStyle.css';

const LandingPage: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      sx={{ overflowX: 'hidden' }}
      className={'landingPageBackground'}
    >
      <Header />

      <MainContent />
      <Footer />
    </Box>
  );
};

export default LandingPage;
