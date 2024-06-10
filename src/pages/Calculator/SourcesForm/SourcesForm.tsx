import { useTranslation } from "react-i18next";
import { Grid, Tooltip } from "@mui/material";
import { CustomText, ManagmentLayout, CustomIconDetails } from "../../../components";
import { SourcesDataForm } from "./Form";
import HelpIcon from '@mui/icons-material/Help';

interface SourcesFormProps {
    nextStep: () => void;
    stepBack: () => void;
}

const SourcesForm = ({ nextStep, stepBack }: SourcesFormProps) => {
    const { t } = useTranslation('commons');

    return (
        <ManagmentLayout
            title={<CustomText texto={t('calculator.pollutionTypeForm.title')} variante="titulo" styles={{ textAlign: 'center' }} />}
            actionsContent={
                <Tooltip title={t('calculator.pollutionTypeForm.help')} placement="right">
                  <HelpIcon color="disabled" />
                </Tooltip>
              }
            description={
            <CustomText texto={t('calculator.pollutionTypeForm.description')} variante="texto" styles={{ textAlign: 'center' }} />
            }
            generalContents={
                <SourcesDataForm nextStep={nextStep} stepBack={stepBack} />
            }
        />
    );
};

export default SourcesForm;