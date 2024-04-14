import Button from '@mui/material/Button';
import { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { Icon } from '@mui/material';
import { ReactElement } from 'react'; 

interface CustomButtonProps extends MuiButtonProps {
  content: string;
  icon?: ReactElement; // Propiedad para el ícono, opcional
}
/* Utilizar botones
  <CustomButton content="Ejemplo" variant="contained" color="info" sx={{ fontSize: '16px' }}/> (sin ícono)
  <CustomButton content="Ejemplo" icon={<AddIcon />} variant="contained" color="info" sx={{ fontSize: '16px' }} /> (con ícono)
*/
const CustomButton = ({ content, variant = 'contained', color = 'primary', icon, sx, ...rest }: CustomButtonProps) => {
  return (
    <Button
      variant={variant}
      color={color}
      sx={{
        typography: 'button',
        textTransform: 'none',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center', 
        ...sx,
      }}
      {...rest}
    >
      {icon && <Icon>{icon}</Icon>}
      {content}
    </Button>
  );
};

export default CustomButton;