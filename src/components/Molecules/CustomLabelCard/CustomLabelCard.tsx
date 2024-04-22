import Etiqueta from '../../Atoms/Label/Typography';

interface labelGroupProps {
  texto1: string;
  texto2?: string;
}
const LabelCard = ({ texto1, texto2 }: labelGroupProps) => {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Etiqueta texto={texto1} variante="texto" />
        {texto2 && <Etiqueta texto={texto2} variante="texto" />}
      </div>
    </>
  );
};

export default LabelCard;
