import React from 'react';
import { Box, Typography, Button, Grid, Paper } from '@mui/material';

const MainContent: React.FC = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <img src="ruta_a_la_imagen" alt="Cruz Roja Footprint" style={{ maxWidth: '100%', height: 'auto' }} />
      </Box>
      <Typography variant="h4" align="center" gutterBottom>
        CRUZ ROJA FOOTPRINT
      </Typography>
      <Typography variant="body1" align="center" paragraph>
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
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6">Estadísticas</Typography>
            <Typography variant="body2">
              Our frontend developers understand the delicate balance between aesthetics and functionality.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6">Empresas</Typography>
            <Typography variant="body2">
              Our backend developers are the architects of efficiency and security. They design and build the databases and APIs.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6">Beneficios</Typography>
            <Typography variant="body2">
              Our data analytics team is a blend of mathematicians, statisticians, and technology enthusiasts.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainContent;
