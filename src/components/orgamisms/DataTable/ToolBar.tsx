import { Box } from '@mui/material';
import {
  GridToolbarContainer,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarExport,
} from '@mui/x-data-grid';

const ToolBar = () => {
  const style = {
    paddingLeft: '1rem',
    paddingRight: '1rem',
    border: '1px solid #e0e0e0 !important',
    '&:hover': {
      border: '1px solid rgba(101, 183, 65, 1) !important',
      color: 'rgba(101, 183, 65, 1)',
    },
  };
  return (
    <GridToolbarContainer>
      {/* <GridToolbarColumnsButton sx={style} /> */}
      <GridToolbarFilterButton sx={style} />
      <GridToolbarDensitySelector sx={style} />
      <Box sx={{ flexGrow: 1 }} />
      <GridToolbarExport
        sx={style}
        slotProps={{
          tooltip: { title: 'Export data' },
          button: { variant: 'contained' },
        }}
      />
    </GridToolbarContainer>
  );
};

export default ToolBar;
