import React, { ReactElement } from "react";
import LabelGroup from "../../Molecules/CustomLabelCard/CustomLabelCard";
import CustomSwitch from "../../Switch/CustomSwitch";
import Card from '@mui/material/Card';
import './CustomCardStyle.css';


interface CardCustomProps{
    texto1: string;
    texto2?: string;
    icon?: ReactElement;
    sx?: React.CSSProperties; 
}
const CustomCard = ({texto1,texto2,icon,sx}:CardCustomProps) =>{
    return(
        <Card className = "card" 
            sx={{ maxWidth: 700, borderRadius: 5, ...sx }}>
            
            <div className="textos">
                <div className="icono">{icon && icon}</div>
                <LabelGroup 
                    texto1={texto1}
                    texto2={texto2}
                />
            </div>
                <CustomSwitch />
        </Card>
            
    );

};
export default CustomCard;
