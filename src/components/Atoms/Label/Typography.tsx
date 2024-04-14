import React from 'react';
import { Typography } from '@mui/material';

interface PropiedadesEtiqueta {
  texto: string;
  variante: 'titulo' | 'texto' | 'subtitulo';
}

const Etiqueta: React.FC<PropiedadesEtiqueta> = ({ texto, variante }) => {
  return (
    <Typography variant={
      variante === 'titulo' ? 'h1' :
      variante === 'texto' ? 'body1' :
      variante === 'subtitulo' ? 'h6' :
      'h2' // Valor predeterminado
    }>
      {texto}
    </Typography>
  );
};

export default Etiqueta;