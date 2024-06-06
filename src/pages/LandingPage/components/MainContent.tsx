import React from 'react';
import { Box, Typography, Button, Grid, Theme, Container, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import { CustomText } from '../../../components';
import { useTranslation } from 'react-i18next';
import BarChartIcon from '@mui/icons-material/BarChart';
import BusinessIcon from '@mui/icons-material/Business';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useNavigate } from 'react-router-dom';
import { PathNames } from '../../../core';


const BackgroundContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    background: `url('/public/LandingPageVector.svg') no-repeat left center`,
    backgroundSize: 'contain',
    padding: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
        background: 'none', // Esto hará que la imagen de fondo desaparezca en pantallas 'md' o menores
        padding: theme.spacing(2),
    },
}));

const ContentContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'nowrap',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  }));


const InfoContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
    padding: theme.spacing(2),
    textAlign: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(2),
    display: 'flex', 
    flexDirection: 'column',
}));

const MainContent: React.FC = () => {
    const theme = useTheme();
    const { t } = useTranslation('commons');
    const navigate = useNavigate(); // Utilize the useNavigate hook


  return (
    <BackgroundContainer>
      <ContentContainer maxWidth="lg">
      <Box sx={{ p: 2, marginLeft: { xs: 0, md: '25vw' } }}>
            <CustomText texto={t('CRUZ ROJA FOOTPRINT')} variante="titulo" styles={{textAlign: 'center',}}/>
            <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
            <Button variant="contained" color="info" sx={{ borderRadius: '50px' }}>
                USAR CALCULADORA
            </Button>
            <Button 
                color="inherit" 
                sx={{ borderRadius: '50px', border: `2px solid ${theme.palette.success.main}` }}
                onClick={() => {navigate(PathNames.LOGIN)}}
            >REGÍSTRATE</Button>
            </Box>
        </Box>
        </ContentContainer>
      <Grid container spacing={2} justifyContent="center"
      sx={{
        boxShadow: '0 0 1rem 0 rgba(0, 0, 0, .2)',
        borderRadius: '5px',
        backgroundColor: 'rgba(255, 255, 255, .75)',
        backdropFilter: 'blur(5px)',
      }}
      
      
      >
        <Grid item xs={12} md={4}>
          <InfoContainer theme={theme}>
          <BarChartIcon color="success" fontSize="large" />
          <CustomText texto={t('Estadísticas')} variante="subtitulo" styles={{textAlign: 'center',}}/>
            <Typography variant="body2">
              Our frontend developers understand the delicate balance between aesthetics and functionality.
            </Typography>
          </InfoContainer>
        </Grid>
        <Grid item xs={12} md={4}>
          <InfoContainer theme={theme}>
          <BusinessIcon color='success' fontSize="large" />
          <CustomText texto={t('Empresas')} variante="subtitulo" styles={{textAlign: 'center',}}/>
            <Typography variant="body2">
              Our backend developers are the architects of efficiency and security. They design and build the databases and APIs.
            </Typography>
          </InfoContainer>
        </Grid>
        <Grid item xs={12} md={4} >
          <InfoContainer theme={theme}>
          <ThumbUpIcon color="success" fontSize="large" />
          <CustomText texto={t('Beneficios')} variante="subtitulo" styles={{textAlign: 'center',}}/>
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
