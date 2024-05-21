import { useTranslation } from "react-i18next";
import { CustomText, ManagmentLayout } from "../../../components";
import { SourcesDataForm } from "./Form";

interface SourcesFormProps {
    nextStep: () => void;
    stepBack: () => void;
  }

const SourcesForm = ({ nextStep, stepBack }: SourcesFormProps) => {
    const { t } = useTranslation('commons');

    return (
        <ManagmentLayout
        title={<CustomText texto={t('calculator.sourcesForm.title')} variante="titulo" />}
        description={<CustomText texto={t('calculator.sourcesForm.description')} variante="texto" />}
        generalContents={
            <SourcesDataForm nextStep={nextStep} stepBack={stepBack}/>
        }
        />
    );
};

export default SourcesForm;