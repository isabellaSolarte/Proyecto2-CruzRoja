import { ReactElement } from "react";
import Etiqueta from "../../Atoms/Label/Typography";

interface labelGroupProps{
    texto1: string;
    texto2: string;
    icon?:ReactElement;
}
const LabelGroup = ({texto1,texto2,icon}:labelGroupProps) => {
    return (
      <div>
        <Etiqueta texto={texto1} icon={icon} variante="texto" color="gris" />
        <Etiqueta texto={texto2}  variante="texto" color="negro"  /> 
      </div>
    );
  };
  
  export default LabelGroup;