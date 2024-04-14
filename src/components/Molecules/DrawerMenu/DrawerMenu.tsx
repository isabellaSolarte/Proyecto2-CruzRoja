import { styled, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import { useState } from 'react';
import { CustomDrawerContent, CustomDrawerHeader } from '../../Atoms';
import { MenuOption } from '../../../models';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  backgroundColor: theme.backgroundContentColors?.green,
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  backgroundColor: theme.backgroundContentColors?.green,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: prop => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

interface CollapseMenuProps {
  options: MenuOption[];
}

const DrawerMenu = ({ options }: CollapseMenuProps) => {
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer variant="permanent" open={open}>
        <CustomDrawerHeader open={open} handleDrawerState={handleDrawer} />

        <CustomDrawerContent open={open} navigationOptions={options} />
      </Drawer>

      {/* AQUI VA CONTENIDO */}
    </Box>
  );
};

export default DrawerMenu;
