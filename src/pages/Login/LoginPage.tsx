import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  Paper,
  TextField,
  useTheme,
} from '@mui/material';
import { CustomButton, CustomText } from '../../components';
import { styled } from '@mui/system';
import { useLoginForm } from './hooks';

// Estilos para el IconButton
const LargeIconButton = styled(IconButton)({
  width: '150px', // ajusta el tamaño según sea necesario
  height: '150px',
  borderRadius: '50%', // hace que el IconButton sea circular
});

const LoginPage = () => {
  const theme = useTheme();
  const { handleSubmit, register, errors, onSubmit } = useLoginForm();


  return (
    <div>
      <Grid container component="main" sx={{ height: '100vh' }}>
          <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <LargeIconButton>
                <img
                  src="/icono-calculadora.png"
                  alt="Icono Calculadora"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </LargeIconButton>

              <CustomText
                texto="CRUZ ROJA FOOTPRINT"
                variante="titulo"
                styles={{ textAlign: 'center' }}
              />
              <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  
                  autoComplete="username"
                  autoFocus
                  {...register('username')}
                  error={!!errors.username}
                  helperText={errors.username?.message}
                  InputLabelProps={{
                    sx: {
                      '&.Mui-focused': {
                        color: theme.palette.text.primary, // Color del texto del label cuando el campo está enfocado
                      },
                    },
                  }}
                  sx={{
                    '& .MuiInputBase-root.Mui-focused': {
                      color: theme.palette.text.primary, // Color del texto del input al estar seleccionado
                    },
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: theme.buttonColors.green, // Color del contorno al estar seleccionado
                    },
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  {...register('password')}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  InputLabelProps={{
                    sx: {
                      '&.Mui-focused': {
                        color: theme.palette.text.primary, // Color del texto del label cuando el campo está enfocado
                      },
                    },
                  }}
                  sx={{
                    '& .MuiInputBase-root.Mui-focused': {
                      color: theme.palette.text.primary, // Color del texto del input al estar seleccionado
                    },
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: theme.buttonColors.green, // Color del contorno al estar seleccionado
                    },
                  }}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Recuerdame"
                  sx={{
                    '& .MuiTypography-root': {
                      color: theme.palette.text.primary, // Color del texto del label del checkbox
                    },
                    '& .MuiCheckbox-root.Mui-checked': {
                      color: theme.buttonColors.green, // Color del checkbox seleccionado
                    },
                  }}
                />

                <CustomButton
                  variant="contained"
                  color="success"
                  sx={{ mt: 3, mb: 2 }}
                  fullWidth
                  content={'INICIAR SESION'}
                  type='submit'
                />
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={false}
            sm={4}
            md={5}
            sx={{
              backgroundImage: 'url(/fondo-login-vector.png)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: t =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'right',
            }}
          />
      </Grid>
    </div>
  );
};

export default LoginPage;
