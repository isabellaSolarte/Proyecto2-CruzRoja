/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { CustomButton } from '../../Atoms/CustomButton';
import { ReactElement } from 'react';
import { CustomText } from '../../Atoms';
import CustomSwitch from '../../Atoms/Switch/CustomSwitch';

interface CustomColumnProps {
  field: string;
  headerName: string;
  width?: number;
  format: 'text' | 'button' | 'switch';
  sortable?: boolean;
  content: string;
  variante: 'titulo' | 'texto' | 'subtitulo';
  icon?: ReactElement;
  buttonDetails: Array<{
    content: string;
    variant: 'text' | 'outlined' | 'contained';
    color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    icon?: React.ReactElement;
    cellStyle?: React.CSSProperties;
  }>;
}

const CustomColumn = ({
  field,
  headerName,
  width = 282,
  format,
  buttonDetails,
  variante,
  sortable = true,
}: CustomColumnProps): GridColDef => ({
  field,
  headerName,
  width,
  sortable,

  renderCell: (params: GridRenderCellParams) => {
    if (format === 'button') {
      return (
        <div style={{ display: 'flex', gap: '10px' }}>
          {buttonDetails.map((button, index) => (
            <CustomButton
              key={index}
              content={button.content}
              variant={button.variant}
              color={button.color}
              icon={button.icon}
              onClick={() => {
                console.log(`click en boton de customColumn`);
              }}
            />
          ))}
        </div>
      );
    } else if (format == 'text') {
      return <CustomText texto={params.value as string} variante={variante} />;
    } else {
      return (
        <CustomSwitch
          switchState={params.row.switchState as boolean}
          handleSwitchState={() => {}}
        />
      );
    }
  },
});

export default CustomColumn;