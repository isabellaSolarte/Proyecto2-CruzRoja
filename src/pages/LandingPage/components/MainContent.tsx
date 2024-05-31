import React from 'react';
import { Box, Typography, Button, Grid, Theme, Container, useTheme } from '@mui/material';
import { styled } from '@mui/system';

const BackgroundContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  background: `url('/path_to_image/mainContec.jpg') no-repeat center center`,
  backgroundSize: 'cover',
  padding: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2),
  },
}));

const ContentContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));


const InfoContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
    background: 'rgba(255, 255, 255, 0.9)', // Fondo semi-transparente
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    boxShadow: theme.shadows[3],
    textAlign: 'center',
    marginTop: theme.spacing(2),
}));

const MainContent: React.FC = () => {
    const theme = useTheme();

  return (
    <BackgroundContainer>
      <ContentContainer maxWidth="lg">
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2 }}>
            <img src="public\LandingPageVector.svg" alt="Cruz Roja Footprint" style={{ maxWidth: '100%', height: 'auto' }} />
            </Box>
        <Box sx={{ flex: 1, p: 2 }}>
          <Typography variant="h4" gutterBottom>
            CRUZ ROJA FOOTPRINT
          </Typography>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <Button variant="contained" color="primary" sx={{ mx: 1 }}>
              USAR CALCULADORA
            </Button>
            <Button variant="outlined" color="primary" sx={{ mx: 1 }}>
              REGÍSTRATE
            </Button>
          </Box>
        </Box>
        
      </ContentContainer>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={4}>
          <InfoContainer theme={theme}>
            <Typography variant="h6">Estadísticas</Typography>
            <Typography variant="body2">
              Our frontend developers understand the delicate balance between aesthetics and functionality.
            </Typography>
          </InfoContainer>
        </Grid>
        <Grid item xs={12} md={4}>
          <InfoContainer theme={theme}>
            <Typography variant="h6">Empresas</Typography>
            <Typography variant="body2">
              Our backend developers are the architects of efficiency and security. They design and build the databases and APIs.
            </Typography>
          </InfoContainer>
        </Grid>
        <Grid item xs={12} md={4}>
          <InfoContainer>
            <Typography variant="h6">Beneficios</Typography>
            <Typography variant="body2">
              Our data analytics team is a blend of mathematicians, statisticians, and technology enthusiasts.
            </Typography>
          </InfoContainer>
        </Grid>
      </Grid>
    </BackgroundContainer>
  );
};

export default MainContent;
