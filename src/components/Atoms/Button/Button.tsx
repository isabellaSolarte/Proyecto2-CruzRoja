import Button from '@mui/material/Button';
import { ButtonProps as MuiButtonProps } from '@mui/material/Button';

interface CustomButtonProps extends MuiButtonProps {
  content: string;
}
/*Ejemplo para utilizar el boton: <CustomButton content="Ejmeplo" variant="contained" color="info" sx={{ fontSize: '16px' }} /> */
const CustomButton = ({ content, variant , color, sx, ...rest }: CustomButtonProps) => {
  return (
    <Button 
      variant={variant} 
      color={color} 
      sx={{ 
        typography: 'button', 
        textTransform: 'none',
        borderRadius: '8px'
        }} {...rest}>
      {content}
    </Button>
  );
};
export default CustomButton;