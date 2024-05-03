import { styled, Theme, CSSObject, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import { CustomDrawerContent, CustomDrawerHeader } from '../../Atoms';
import { MenuOption } from '../../../models';
import { useState } from 'react';
import { PathNames } from '../../../core';

const drawerWidth = 260;

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
  [theme.breakpoints.down('sm')]: {
    width: 0,
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
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const availableDrawerOptions = [
    PathNames.BUSINESS,
    PathNames.PLANS,
    PathNames.ACTIVITY,
    PathNames.STATISTICS,
    PathNames.USERS,
    PathNames.ROLES,
    PathNames.CATEGORIES,
    PathNames.PERMISSIONS,
    PathNames.SETTINGS,
    PathNames.CLOSE_SESSION,
    PathNames.COMPONETS
    
  ];
  const drawerOptions = options.filter(option => availableDrawerOptions.includes(option.path));

  const handleOpenMenu = () => {
    setOpen(!open);
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.backgroundContentColors?.green,
      }}
    >
      <Drawer variant="permanent" open={open}>
        <CustomDrawerHeader open={open} handleDrawerState={handleOpenMenu} />
        <CustomDrawerContent open={open} navigationOptions={drawerOptions} />
      </Drawer>

      {/* AQUI VA CONTENIDO */}
    </Box>
  );
};

export default DrawerMenu;
