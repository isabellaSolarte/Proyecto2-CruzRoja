import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CustomText } from '../../Atoms';

interface AccordionProps {
  accordionSummary: string;
  contentAccordion: React.ReactNode;
}

const AccordionComponent = ({ accordionSummary, contentAccordion }: AccordionProps) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1">
        <CustomText texto={accordionSummary} variante="texto" />
      </AccordionSummary>
      <AccordionDetails>{contentAccordion}</AccordionDetails>
    </Accordion>
  );
};
export default AccordionComponent;
