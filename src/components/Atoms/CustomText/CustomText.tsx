import { Box, Icon, Tooltip, Typography, useTheme } from '@mui/material';

interface PropiedadesEtiqueta {
  texto: string;
  variante: 'titulo' | 'texto' | 'subtitulo' | 'pequeño';
  mandatory?: boolean;
  icon?: JSX.Element;
  color?: string;
}

const putMandatoryAdornment = () => {
  return (
    <Tooltip title="Campo obligatorio" arrow>
      <Icon color="error">*</Icon>
    </Tooltip>
  );
};

const CustomText = ({ texto, variante, mandatory, icon, color }: PropiedadesEtiqueta) => {
  const theme = useTheme();

  const style = {
    padding: 0,
    textAlign: 'justify',
    color: variante === 'pequeño' ? theme.palette.text.secondary : theme.palette.text.primary,
    fontWeight: variante === 'titulo' || variante === 'subtitulo' ? 'bold' : 'regular',
  };

  return (
    <Box display="flex" alignItems="center">
      {icon && <Icon sx={{ marginRight: 1 }}>{icon}</Icon>}
      <Typography
        variant={
          variante === 'titulo'
            ? 'h4'
            : variante === 'texto'
            ? 'body1'
            : variante === 'subtitulo'
            ? 'h6'
            : 'caption'
        }
        sx={{ ...style, color: color ? color : style.color }}
      >
        {texto}
      </Typography>

      {mandatory && putMandatoryAdornment()}
    </Box>
  );
};

export default CustomText;
