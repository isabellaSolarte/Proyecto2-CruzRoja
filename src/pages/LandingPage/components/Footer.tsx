import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ p: 2, textAlign: 'center', backgroundColor: '#f1f1f1' }}>
      <Typography variant="body2" color="textSecondary">
        La Cruz Roja en Colombiana
      </Typography>
      <Typography variant="body2" color="textSecondary">
        UNIVERSIDAD DEL CAUCA - Institución con Acreditación de Alta Calidad por 8 años
      </Typography>
    </Box>
  );
};

export default Footer;
