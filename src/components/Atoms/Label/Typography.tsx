import { Box, Icon, Tooltip, Typography, useTheme } from '@mui/material';

interface PropiedadesEtiqueta {
  texto: string;
  variante: 'titulo' | 'texto' | 'subtitulo';
  mandatory?: boolean;
  icon?: JSX.Element;
}

const putMandatoryAdornment = () => {
  return (
    <Tooltip title="Campo obligatorio" arrow>
      <Icon color="error">*</Icon>
    </Tooltip>
  );
};

const CustomText = ({ texto, variante, mandatory, icon }: PropiedadesEtiqueta) => {
  const theme = useTheme();

  const style = {
    padding: 0,
  };

  switch (variante) {
    case 'titulo':
      return (
        <Box display="flex" alignItems="center">
          {icon && <Icon sx={{ marginRight: 1 }}>{icon}</Icon>}
          <Typography
            variant="h4"
            fontWeight={'bold'}
            color={theme.palette.text.primary}
            sx={style}
          >
            {texto}
            {mandatory && putMandatoryAdornment()}
          </Typography>
        </Box>
      );
    case 'texto':
      return (
        <Box display="flex" alignItems="center">
          {icon && <Icon sx={{ marginRight: 1 }}>{icon}</Icon>}
          <Typography fontSize={'18px'} color={theme.palette.text.primary} sx={style}>
            {texto}
            {mandatory && putMandatoryAdornment()}
          </Typography>
        </Box>
      );
    case 'subtitulo':
      return (
        <Box display="flex" alignItems="center">
          {icon && <Icon sx={{ marginRight: 1 }}>{icon}</Icon>}
          <Typography variant="subtitle2" color={theme.palette.text.secondary} sx={style}>
            {texto}
            {mandatory && putMandatoryAdornment()}
          </Typography>
        </Box>
      );
    default:
      return (
        <Box display="flex" alignItems="center">
          {icon && <Icon sx={{ marginRight: 1 }}>{icon}</Icon>}
          <Typography variant="h2" color={theme.palette.text.primary} sx={style}>
            {texto}
            {mandatory && putMandatoryAdornment()}
          </Typography>
        </Box>
      );
  }
};

export default CustomText;
