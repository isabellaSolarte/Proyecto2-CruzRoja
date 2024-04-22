/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { IconButton, Typography, useTheme} from '@mui/material';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import { Theme } from '@mui/material/styles';


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
  const theme = useTheme<Theme>();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: open ? 'space-between' : 'center',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          width: open ? '100%' : 0,
          opacity: open ? 1 : 0,
          transition: 'width 0.5s, opacity 0.5s',
          paddingLeft: open ? '1rem' : 0,
          color: theme.backgroundContentColors?.contentBox
        }}
      >
        FootPrint
      </Typography>
      <IconButton onClick={handleDrawerState} color="primary">
        {open ? <MenuOpenIcon /> : <MenuIcon />}
      </IconButton>
    </div>
  );
};

export default CustomDrawerHeader;
