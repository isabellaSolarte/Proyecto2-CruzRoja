import { AppBar, Box, Container, Toolbar, styled, useTheme } from '@mui/material';
import { CustomButton, CustomText } from '../../Atoms';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { useUserActions } from '../../../recoil';
import { useNavigate } from 'react-router-dom';
import { PathNames } from '../../../core';

const ProfileBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const CustomAppBar = () => {
  const logout = useUserActions().logout;
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box
      sx={{
        flexGrow: 1,
        borderBottom: '2px solid',
        borderColor: theme.backgroundContentColors?.red,
      }}
    >
      <AppBar position="relative">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* LOGO */}
          <Container
            sx={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
              gap: '1rem',
              margin: 0,
            }}
          >
            <img src="/public/cruzRojaLogo.png" style={{ width: '2rem' }} />
            <CustomText variante="subtitulo" texto="Cruz Roja Colombiana" />
          </Container>

          {/* PERFIL */}

          <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <AccountCircleIcon sx={{ fontSize: '2.5rem' }} />
            <ProfileBox sx={{ display: 'flex', flexDirection: 'column' }}>
              <CustomText variante="texto" texto="Vadlmir smirnof" />
              <CustomText variante="pequeño" texto="vadimir@unicauca.edu.co" />
              <CustomText variante="pequeño" texto="voluntario" />
            </ProfileBox>
            <CustomButton
              content="Cerrar sesión"
              icon={<LogoutIcon sx={{ fontSize: 20 }} />}
              buttonSide="end"
              color="error"
              sx={{ width: '9rem' }}
              onClick={() => {
                navigate(PathNames.LOGIN, { replace: true });
                logout();
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default CustomAppBar;
