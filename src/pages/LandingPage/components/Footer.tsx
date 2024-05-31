import React from 'react';
import { Box, Typography, Container, Grid, Link } from '@mui/material';
import { styled } from '@mui/system';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#4CAF50', // Color de fondo similar al de la imagen
  color: '#fff', // Color del texto
  padding: theme.spacing(2),
}));

const FooterText = styled(Typography)({
  fontSize: '0.875rem',
});

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
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
          <Grid item xs={12} md={3}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                <Box display="flex" justifyContent="flex-end">
                    <img src="/public/unicaucaLogoBlanco.svg" alt="Logo Universidad del Cauca" style={{ width: '10rem' }} />
                </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                <Box display="flex" justifyContent="flex-end">
                    <img src="/public/cruzRojaLogoCirculo.svg" alt="Logo Cruz Roja" style={{ width: '10rem'}} />
                </Box>
                </Grid>
                
            </Grid>
        </Grid>
        </Grid>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
