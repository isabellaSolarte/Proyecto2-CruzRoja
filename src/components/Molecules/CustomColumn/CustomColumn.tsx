/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { ReactElement } from 'react';
import {
  CustomButton,
  CustomSwitch,
  CustomText,
} from '../../../components';

interface CustomColumnProps {
  field: string;
  headerName: string;
  //width?: number;
  format: 'text' | 'button' | 'switch';
  sortable?: boolean;
  variante?: 'titulo' | 'texto' | 'subtitulo';
  icon?: ReactElement;
  buttonDetails?: Array<{
    content: string;
    variant: 'text' | 'outlined' | 'contained';
    color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    icon?: React.ReactElement;
    cellStyle?: React.CSSProperties;
    onClick?: (rowData: GridRenderCellParams['row']) => void;
  }>;
  onClick?: (rowData: GridRenderCellParams['row']) => void;
}

const CustomColumn = ({
  field,
  headerName,
  format,
  buttonDetails,
  variante = 'texto',
  sortable = true,
  icon,
  onClick,
}: CustomColumnProps): GridColDef => ({
  field,
  headerName,
  flex: 1,
  sortable,

  renderCell: (params: GridRenderCellParams) => {
    if (format === 'button') {
      return (
        <div style={{ display: 'flex', gap: '10px' }}>
          {buttonDetails?.map((button, index) => (
            <CustomButton
              key={index}
              content={button.content}
              variant={button.variant}
              color={button.color}
              icon={button.icon}
              onClick={() => {}}
            />
          ))}
        </div>
      );
    } else if (format == 'text') {
      return <CustomText texto={params.value as string} variante={variante} icon={icon} />;
    } else {
      
      return (
        <CustomSwitch
          switchState={params.row.switchState as boolean}
          onClick={() => {onClick && onClick(params.row)}}
        />
      );
    }
  }
});

export default CustomColumn;