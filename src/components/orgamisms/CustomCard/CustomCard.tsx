import React, { ReactElement } from 'react';
import LabelGroup from '../../Molecules/CustomLabelCard/CustomLabelCard';
import { CustomSwitch } from '../../Atoms';
import Card from '@mui/material/Card';
import './CustomCardStyle.css';

/*Ejemplo para usar
    <CustomCard 
      texto1="Crear empresa"
      icon={<SearchIcon />}
      sx={{ backgroundColor: theme.backgroundContentColors?.green}}
      switchState={switchState}
      handleSwitchState={handleSwitchState}
    /> */
interface CardCustomProps {
  texto1: string;
  texto2?: string;
  icon?: ReactElement;
  sx?: React.CSSProperties;
  switchState: boolean;
  handleSwitchState: () => void;
}
const CustomCard = ({
  texto1,
  texto2,
  icon,
  sx,
  switchState,
  handleSwitchState,
}: CardCustomProps) => {
  return (
    <Card className="card" sx={{ maxWidth: 700, borderRadius: 5, ...sx }}>
      <div className="textos">
        <div className="icono">{icon && icon}</div>
        <LabelGroup texto1={texto1} texto2={texto2} />
      </div>
      <CustomSwitch switchState={switchState} onClick={handleSwitchState} />
    </Card>
  );
};
export default CustomCard;
