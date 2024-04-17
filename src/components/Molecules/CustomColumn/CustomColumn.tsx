/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { GridColDef } from '@mui/x-data-grid';
import { CustomButton } from '../../Atoms/Button';
import { ReactElement } from 'react';
import { CustomText } from '../../Atoms';
import CustomSwitch from '../../Switch/CustomSwitch';

interface CustomColumnProps {
  field: string;
  headerName: string;
  width?: number;
  format: 'text' | 'button' | 'switch';
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
  width = 150,
  format,
  buttonDetails=[],
  variante='texto',
}: CustomColumnProps): GridColDef => ({
  field,
  headerName,
  width,
  renderCell: _params => {
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
      return <CustomText texto={''} variante={variante} />;
    } else {
      return <CustomSwitch />;
    }
  },
});

export default CustomColumn;
