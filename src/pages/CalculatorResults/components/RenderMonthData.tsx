import { Box, Typography, Divider } from '@mui/material';
import { monthResult } from '../../../models';

const monthEnum = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

const RenderMonthData = (data: monthResult) => {
  return (
    <Box>
      <Typography fontWeight={'bold'}>{data.year}</Typography>
      {data.month.map((month, index) => (
        <Box
          key={month}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
            width: '100%',
          }}
        >
          <Typography>{monthEnum[index]}</Typography>
          <Typography
            sx={{
              color: '#FFB225',
              '&::before': {
                content: '".....................................................   "',
                letterSpacing: '4px',
                fontSize: '18px',
                color: 'orange',
                marginLeft: '20px',
              },
            }}
          >
            {month} ufp
          </Typography>
        </Box>
      ))}
      <Divider sx={{ marginBlock: 4 }} />
    </Box>
  );
};

export default RenderMonthData;
