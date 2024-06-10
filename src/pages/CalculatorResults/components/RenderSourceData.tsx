import { Box, Typography } from '@mui/material';
import { sourceResult } from '../../../models';

const RenderSourcesData = (data: sourceResult) => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
          width: '100%',
        }}
      >
        <Typography>{data.source}</Typography>
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
          {data.total} ufp
        </Typography>
      </Box>
    </Box>
  );
};

export default RenderSourcesData;
