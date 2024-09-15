/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
  //background: `url('/public/icono-calculadora.png') no-repeat left center`,
  backgroundSize: 'contain',
  backgroundPosition: 'right center',
  padding: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    background: 'none', // Esto hará que la imagen de fondo desaparezca en pantallas 'md' o menores
    padding: theme.spacing(2),
  },
}));

const ContentContainer = styled(Container)(({ theme }) => ({
  minHeight: 'calc(100vh)',
  minWidth: 'calc(100vw*0.9)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
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
      <ContentContainer maxWidth="md">
        <Box
          sx={{
            p: 2,
            //backgroundColor: 'rgba(13,64,86,0.5)',
            backdropFilter: 'blur(7px)',
            color: '#000',
            maxWidth: '50vw',
            borderRadius: '10px',
          }}
        >
          <CustomText
            texto={t('CRUZ ROJA FOOTPRINT')}
            variante="titulo"
            styles={{ textAlign: 'center', color: '#000' }}
          />
          <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
            Esta herramienta integral facilita la gestión y reporte de emisiones de Gases de Efecto
            Invernadero (GEI), cumpliendo con los estándares de la NTC 14064-1 y el Protocolo GHG.
            Permite identificar, cuantificar y reportar fuentes de emisión de GEI de manera
            eficiente, ayudando a las empresas a gestionar su impacto ambiental.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 2, mb: 4 }}>
            <Button
              variant="contained"
              color="info"
              sx={{ borderRadius: '50px' }}
              onClick={() => {
                navigate(PathNames.LOGIN);
              }}
            >
              CALCULA TU HUELLA DE CARBONO
            </Button>
            {/* <Button
              color="inherit"
              sx={{ borderRadius: '50px', border: `2px solid ${theme.palette.success.main}` }}
              onClick={() => {
                navigate(PathNames.LOGIN);
              }}
            >
              REGÍSTRATE
            </Button> */}
          </Box>
        </Box>
        <Grid
          container
          spacing={2}
          justifyContent="center"
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
              <CustomText
                texto={t('Estadísticas')}
                variante="subtitulo"
                styles={{ textAlign: 'center' }}
              />
              <Typography variant="body2">
                La herramienta ofrece estadísticas de emisiones de GEI, facilitando decisiones
                informadas y seguimiento ambiental.
              </Typography>
            </InfoContainer>
          </Grid>
          <Grid item xs={12} md={4}>
            <InfoContainer theme={theme}>
              <BusinessIcon color="success" fontSize="large" />
              <CustomText
                texto={t('Empresas')}
                variante="subtitulo"
                styles={{ textAlign: 'center' }}
              />
              <Typography variant="body2">
                La herramienta ayuda a empresas a reducir su huella de carbono y cumplir normativas
                ambientales.
              </Typography>
            </InfoContainer>
          </Grid>
          <Grid item xs={12} md={4}>
            <InfoContainer theme={theme}>
              <ThumbUpIcon color="success" fontSize="large" />
              <CustomText
                texto={t('Beneficios')}
                variante="subtitulo"
                styles={{ textAlign: 'center' }}
              />
              <Typography variant="body2">
                Las empresas cumplen regulaciones, mejoran su imagen, optimizan costos y combaten el
                cambio climático
              </Typography>
            </InfoContainer>
          </Grid>
        </Grid>
      </ContentContainer>
    </BackgroundContainer>
  );
};

export default MainContent;
