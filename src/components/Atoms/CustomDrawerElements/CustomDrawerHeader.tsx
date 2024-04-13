/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Container, IconButton, Theme, Typography, useTheme } from '@mui/material';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';

interface CustomDrawerHeaderProps {
  open: boolean;
  handleDrawerState: () => void;
}

/**
 *
 * @param open  Drawer state
 * @param handleDrawerState  Function to handle the drawer state (open or close)
 * @returns
 */
const CustomDrawerHeader = ({ open, handleDrawerState }: CustomDrawerHeaderProps) => {
  const theme: Theme = useTheme();
  return (
    <Container
      style={{
        display: 'flex',
        justifyContent: open ? 'space-between' : 'center',
        alignItems: 'center',
        padding: '10px 10px',
        color: theme.palette.primary.main,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          width: open ? '100%' : 0,
          opacity: open ? 1 : 0,
          transition: 'width 0.5s, opacity 0.5s',
        }}
      >
        FootPrint
      </Typography>
      <IconButton onClick={handleDrawerState} color="primary">
        {open ? <MenuOpenIcon /> : <MenuIcon />}
      </IconButton>
    </Container>
  );
};

export default CustomDrawerHeader;
