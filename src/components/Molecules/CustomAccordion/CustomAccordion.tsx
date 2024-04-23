import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CustomText } from '../../Atoms';
import { withStyles } from '@material-ui/core/styles';

interface AccordionProps{
    accordionSummary: string;
    contentAccordion: React.ReactNode;
}
const StyledAccordion= withStyles({
    root: {
      
    },
  })(Accordion);
const AccordionComponent = ({accordionSummary, contentAccordion}: AccordionProps) =>
    {
        return(
            <StyledAccordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id="panel1"
                >
                    <CustomText texto={accordionSummary} variante='texto' />
                </AccordionSummary>
                <AccordionDetails>
                    {contentAccordion}
                </AccordionDetails>
            </StyledAccordion>
        )
    }
export default AccordionComponent;