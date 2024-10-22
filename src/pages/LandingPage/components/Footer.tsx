import React from 'react';
import { Box, Typography, Container, Grid, Link } from '@mui/material';
import { styled } from '@mui/system';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(13,64,86,0.8)', // Color de fondo similar al de la imagen
  backdropFilter: 'blur(10px)',
  color: '#fff', // Color del texto
  padding: theme.spacing(2),
  marginTop: 'auto', // Empuja el pie de página hacia abajo
}));

const FooterText = styled(Typography)({
  fontSize: '0.875rem',
  textAlign: 'center', // Centra el texto
});
const Logo = styled('img')(({ theme, width }) => ({
  margin: 0,
  width: width ? `${width}rem` : '10rem',
  [theme.breakpoints.down('md')]: {
    width: '9rem',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    width: '7rem',
  },
  [theme.breakpoints.down('xs')]: {
    width: '6rem',
  },
}));

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Grid container spacing={2} justifyContent="center" alignItems={'start'}>
        <Grid item xs={12} md={3}>
          <FooterText>Av. Cra. 68 # 68 B -31 Bogotá - Colombia</FooterText>
          <FooterText>Tel: 4376300</FooterText>
          <FooterText>
            <Link href="mailto:donaciones@cruzrojacolombiana.org" color="inherit">
              donaciones@cruzrojacolombiana.org
            </Link>
          </FooterText>
          <FooterText>
            <Link href="mailto:juridica@cruzrojacolombiana.org" color="inherit">
              Notificaciones Judiciales: juridica@cruzrojacolombiana.org
            </Link>
          </FooterText>
        </Grid>
        <Grid item xs={12} md={3}>
          <FooterText>La Cruz Roja en Colombiana</FooterText>
          <FooterText>Políticas y Normatividad Institucional</FooterText>
        </Grid>
        <Grid item xs={12} md={3}>
          <FooterText>UNIVERSIDAD DEL CAUCA</FooterText>
          <FooterText>Institución con Acreditación de Alta Calidad por 8 años</FooterText>
          <FooterText>(Resolución MEN 6218 de 2019)</FooterText>
        </Grid>

        <Grid item xs={6} md={3}>
          <Grid container spacing={2} direction="row" sx={{ display: 'flex', alignItems: 'start' }}>
            <Grid item xs={6} md={6}>
              <Box display="flex" justifyContent="center" alignItems={'center'}>
                <Logo src="/public/unicaucaLogoBlanco.svg" alt="Logo Universidad del Cauca" />
              </Box>
            </Grid>
            <Grid item xs={6} md={6}>
              <Box display="flex" justifyContent="center">
                <Logo src="/public/cruzRojaLogo.png" alt="Logo Cruz Roja" width={5} />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </FooterContainer>
  );
};

export default Footer;
