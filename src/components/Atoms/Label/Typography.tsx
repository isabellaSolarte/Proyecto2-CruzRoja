import { ReactElement } from 'react';
import { Typography, Icon, Box } from '@mui/material';

interface labelProps {
  texto: string;
  icon?:ReactElement;
  variante: 'titulo' | 'texto' | 'subtitulo';
  color?: 'gris' | 'negro'
}

const Etiqueta = ({ texto, icon , variante, color = 'gris' }:labelProps) => {
  return (
    
    <Typography variant={
      variante === 'titulo' ? 'h1' :
      variante === 'texto' ? 'body1' :
      variante === 'subtitulo' ? 'h6' :
      'h2'
    }
    color={color === 'gris' ? '#808080' : '#000000'}>  
      {icon && (
        <Box display="flex" alignItems="center" >
          {icon && <Icon sx={{ marginRight: 1 }}>{icon}</Icon>}
          {texto}
        </Box>
      )}
    </Typography>
  );
};

export default Etiqueta;