import { useTranslation } from "react-i18next";
import { CustomText, ManagmentLayout } from "../../components";
import { SourcesDataForm } from "./Form";

const SourcesPage = () => {
    const { t } = useTranslation('commons');

    return (
        <ManagmentLayout
        title={<CustomText texto={t('pageTitles.sources')} variante="titulo" />}
        generalContents={
            <div>
                <CustomText texto="Seleccione sus fuentes de emision." variante="texto"/>
                <SourcesDataForm/>
            </div>
        }
        />
    );
};

export default SourcesPage;