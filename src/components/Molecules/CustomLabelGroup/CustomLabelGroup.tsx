import { ReactElement } from "react";
import CustomText from "../../Atoms/Label/Typography";
interface labelGroupProps{
    texto1: string;
    texto2: string;
    icon?:ReactElement;
}

const LabelGroup = ({texto1,texto2,icon}:labelGroupProps) => {
    return (
        <>
        <CustomText texto={texto1} icon={icon} variante="texto"   />
        <CustomText texto={texto2} variante="texto"  />
        </> 
      
    );
  };
  
  export default LabelGroup;