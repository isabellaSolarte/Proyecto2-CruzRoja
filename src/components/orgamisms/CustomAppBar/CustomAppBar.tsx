import { AppBar, Box, Container, Toolbar, styled, useTheme } from '@mui/material';
import { CustomText } from '../../Atoms';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const ProfileBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const CustomAppBar = () => {
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
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default CustomAppBar;
