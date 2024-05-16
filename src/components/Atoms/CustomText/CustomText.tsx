import { Box, Icon, Tooltip, Typography, useTheme } from '@mui/material';

interface PropiedadesEtiqueta {
  texto: string;
  variante: 'titulo' | 'texto' | 'subtitulo' | 'pequeño';
  mandatory?: boolean;
  icon?: JSX.Element;
  color?: string;
  styles?: object;
  textAlign?: 'center' | 'justify' | 'left' | 'right' | 'start';
}

const putMandatoryAdornment = () => {
  return (
    <Tooltip title="Campo obligatorio" arrow>
      <Icon color="error">*</Icon>
    </Tooltip>
  );
};

const CustomText = ({
  texto,
  variante,
  mandatory,
  icon,
  color,
  styles = {},
  textAlign = 'start',
}: PropiedadesEtiqueta) => {
  const theme = useTheme();

  const colorStyled =
    variante === 'pequeño' ? theme.palette.text.secondary : theme.palette.text.primary;

  const style = {
    padding: 0,
    textAlign: 'justify',
    color: colorStyled,
    fontWeight: variante === 'titulo' || variante === 'subtitulo' ? 'bold' : 'regular',
    ...styles,
  };

  return (
    <Box display="flex" alignItems="center" justifyContent={textAlign} gap={0.3}>
      {icon && icon}
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
