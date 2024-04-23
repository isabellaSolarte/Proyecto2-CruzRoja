import Button from '@mui/material/Button';
import { ButtonProps as MuiButtonProps } from '@mui/material/Button';

interface CustomButtonProps extends MuiButtonProps {
  content: string;
  icon?: JSX.Element; // Propiedad para el ícono, opcional
  buttonSide?: 'start' | 'end'; // Propiedad para la posición del ícono
  onClick?: () => void; // Propiedad para el evento onPress
}
/* Utilizar botones
  <CustomButton content="Ejemplo" variant="contained" color="info" sx={{ fontSize: '16px' }}/> (sin ícono)
  <CustomButton content="Ejemplo" icon={<AddIcon />} variant="contained" color="info" sx={{ fontSize: '16px' }} /> (con ícono)
*/

const CustomButton = ({
  content,
  variant = 'contained',
  color = 'primary',
  icon,
  sx,
  buttonSide,
  onClick,
  ...rest
}: CustomButtonProps) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      color={color}
      sx={{
        typography: 'button',
        textTransform: 'none',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: buttonSide === 'end' ? 'row-reverse' : 'row',
        color: color === 'primary' ? '#000' : '#fff',
        gap: 1,
        ...sx,
      }}
      {...rest}
    >
      {icon && icon}
      {content}
    </Button>
  );
};

export default CustomButton;
