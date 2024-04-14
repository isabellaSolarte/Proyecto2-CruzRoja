import { Typography, useTheme } from '@mui/material';

interface PropiedadesEtiqueta {
  texto: string;
  variante: 'titulo' | 'texto' | 'subtitulo';
}

const CustomTexto = ({ texto, variante }: PropiedadesEtiqueta) => {
  const theme = useTheme();

  switch (variante) {
    case 'titulo':
      return (
        <Typography variant="h1" color={theme.palette.text.primary}>
          {texto}
        </Typography>
      );
    case 'texto':
      return (
        <Typography variant="body1" color={theme.palette.text.primary}>
          {texto}
        </Typography>
      );
    case 'subtitulo':
      return (
        <Typography variant="caption" color={theme.palette.text.secondary}>
          {texto}
        </Typography>
      );
    default:
      return (
        <Typography variant="h2" color={theme.palette.text.primary}>
          {texto}
        </Typography>
      );
  }
};

export default CustomTexto;
