import { Icon, Tooltip, Typography, useTheme } from '@mui/material';

interface PropiedadesEtiqueta {
  texto: string;
  variante: 'titulo' | 'texto' | 'subtitulo';
  mandatory?: boolean;
}

const putMandatoryAdornment = () => {
  return (
    <Tooltip title="Campo obligatorio" arrow>
      <Icon color="error">*</Icon>
    </Tooltip>
  );
};

const CustomText = ({ texto, variante, mandatory }: PropiedadesEtiqueta) => {
  const theme = useTheme();

  const style = {
    padding: 0,
  };

  switch (variante) {
    case 'titulo':
      return (
        <Typography variant="h4" fontWeight={'bold'} color={theme.palette.text.primary} sx={style}>
          {texto}
          {mandatory && putMandatoryAdornment()}
        </Typography>
      );
    case 'texto':
      return (
        <Typography fontSize={'18px'} color={theme.palette.text.primary} sx={style}>
          {texto}
          {mandatory && putMandatoryAdornment()}
        </Typography>
      );
    case 'subtitulo':
      return (
        <Typography variant="subtitle2" color={theme.palette.text.secondary} sx={style}>
          {texto}
          {mandatory && putMandatoryAdornment()}
        </Typography>
      );
    default:
      return (
        <Typography variant="h2" color={theme.palette.text.primary} sx={style}>
          {texto}
          {mandatory && putMandatoryAdornment()}
        </Typography>
      );
  }
};

export default CustomText;
