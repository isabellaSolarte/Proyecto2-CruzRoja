import { ReactElement } from 'react';
import { CustomText } from '../../Atoms';

interface labelGroupProps {
  texto1: string;
  texto2: string;
  icon?: ReactElement;
}
const LabelGroup = ({ texto1, texto2, icon }: labelGroupProps) => {
  return (
    <>
      <CustomText texto={texto1} variante="texto" />
      <CustomText texto={texto2} variante="pequeño" />
    </>
  );
};

export default LabelGroup;
