import { Typography, Button, Box, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PathNames } from '../../core';

const Error404 = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate(PathNames.HOME, { replace: true }); // Vuelve a la página de inicio
  };

  return (
    <Grid container component="main">
      <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Typography variant="h2" sx={{ mt: 4, mb: 2 }}>
            ¡404!
          </Typography>
          <Box sx={{ width: '50%' }}>
            <img src="/confused.png" alt="Error 404" style={{ maxWidth: '100%', height: 'auto' }} />
          </Box>
          <Typography variant="h2" sx={{ mt: 4, mb: 2 }}>
            ¿QUÉ HACES AQUÍ?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Lo sentimos, la página que estás buscando no existe.
          </Typography>

          <Button variant="contained" color="info" onClick={handleGoHome}>
            Volver
          </Button>
        </Box>
      </Grid>
      <Grid
        item
        xs={false}
        sm={4}
        md={5}
        sx={{
          backgroundImage: 'url(/imagen-fondo.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: t =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </Grid>
  );
};

export default Error404;
