/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { ReactElement } from 'react';
import { CustomButton, CustomInput, CustomSwitch, CustomText } from '../../../components';

interface CustomColumnProps {
  field: string;
  headerName: string;
  width?: number;
  aling?: 'center' | 'left' | 'right';
  format: 'text' | 'button' | 'switch' | 'input';
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
  inputDetails?: Array<{
    placeholder: string;
    updateText: (text: string) => void;
    defaultValue?: string;
    props?: any;
  }>;
}

const CustomColumn = ({
  field,
  headerName,
  width,
  aling = 'left',
  format,
  buttonDetails,
  variante = 'texto',
  sortable = true,
  icon,
  inputDetails,
  onClick,
}: CustomColumnProps): GridColDef => ({
  align: aling,
  field,
  headerName,
  flex: width ? undefined : 1,
  width: width ? width : undefined,
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
              onClick={() => {
                button.onClick && button.onClick(params.row);
              }}
            />
          ))}
        </div>
      );
    } else if (format == 'text') {
      return <CustomText texto={params.value as string} variante={variante} icon={icon} />;
    } else if (format == 'input') {
      return (
        <div style={{ display: 'flex', gap: '10px' }}>
          {inputDetails?.map((input, index) => (
            <CustomInput
              key={index}
              placeholder={input.placeholder}
              size={'small'}
              props={input.props}
              updateText={input.updateText}
              defaultValue={input.defaultValue}
            />
          ))}
        </div>
      );
    } else {
      return (
        <CustomSwitch
          switchState={params.row.switchState as boolean}
          onClick={() => {
            onClick && onClick(params.row);
          }}
        />
      );
    }
  },
});

export default CustomColumn;
