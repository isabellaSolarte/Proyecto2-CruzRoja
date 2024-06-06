import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Container, Box, styled, useTheme, Drawer, List, ListItem, IconButton } from '@mui/material';
import { CustomButton, CustomText } from '../../../components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { useUserActions, userAtom } from '../../../recoil';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { PathNames } from '../../../core';


const ProfileBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const logout = useUserActions().logout;
  const navigate = useNavigate();
  const theme = useTheme();
  const user = useRecoilState(userAtom);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = ['Inicio', 'Nosotros', 'Servicios', 'Contáctanos'];

  return (
    <Box
      sx={{
        borderBottom: '2px solid',
        borderColor: theme.backgroundContentColors?.red,
      }}
    >
      <AppBar position="static">
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
            <CustomText variante="subtitulo" texto="Cruz Roja Colombiana" styles={{textAlign: 'center'}} />
          </Container>

          

          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
          >
            <List>
              {menuItems.map((text, index) => (
                <ListItem button key={index}>
                  {text}
                </ListItem>
              ))}
            </List>
          </Drawer>

          <Container
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1rem',
              bgcolor: 'success.main',
              borderRadius: '1rem',
              p: 1,
            }}
          >
            {menuItems.map((text, index) => (
              <Button key={index} color="inherit">
                {text}
              </Button>
            ))}
            
          </Container>
        
          <Container
            sx={{
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'center',
              gap: '1rem',
              margin: 0,
            }}
          >
          {!user[0] ? (
            <Button 
                color="inherit" 
                sx={{ borderRadius: '50px', border: `2px solid ${theme.palette.success.main}` }}
                onClick={() => {navigate(PathNames.LOGIN)}}
            >INICIAR SESIÓN</Button>
          ) : (
            <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <AccountCircleIcon sx={{ fontSize: '2.5rem' }} />
              <ProfileBox sx={{ display: 'flex', flexDirection: 'column' }}>
                <CustomText variante="texto" texto={`${user[0]?.names} ${user[0]?.lastNames}`} />
                <CustomText variante="pequeño" texto={`${user[0]?.personalEmail}`} />
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
          )}
          </Container>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'block', md: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;