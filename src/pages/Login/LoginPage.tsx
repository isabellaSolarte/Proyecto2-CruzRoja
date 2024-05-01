import { Box, Checkbox, FormControlLabel, Grid, IconButton, Paper, TextField, Typography, useTheme } from '@mui/material';
import { useUserActions } from '../../recoil';
import { CustomButton, CustomText } from '../../components';
import { styled } from '@mui/system';



// Estilos para el IconButton
const LargeIconButton = styled(IconButton)({
  width: '150px', // ajusta el tamaño según sea necesario
  height: '150px',
  borderRadius: '50%', // hace que el IconButton sea circular
});

const LoginPage = () => {
  const userActions = useUserActions();
  const theme = useTheme();
  const handleLogin = async () => {
    await userActions.login({
      user: 'mesa',
      password: '1234',
    });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div>
        {/* <Container>
          {JSON.stringify(userActions.getLoggedUser())}
          <CustomButton
            content={'INICIAR SESION'}
            onClick={() => {
              void handleLogin();
            }}
          />
        </Container> */}
      <Grid container component="main" sx={{ height: '100vh' }}>
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
                texto='CRUZ ROJA FOOTPRINT'
                variante='titulo'
                styles={{ textAlign: 'center'}}
              />
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
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
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
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
                    variant='contained'
                    color='success'
                    sx={{ mt: 3, mb: 2 }}
                    fullWidth
                    content={'INICIAR SESION'}
                    onClick={() => {
                      void handleLogin();
                    }}  
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
                backgroundColor: (t) =>
                  t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'right',
              }}
            />
          
        </Grid>
      </Grid>

    </div>
  );
};

export default LoginPage;
