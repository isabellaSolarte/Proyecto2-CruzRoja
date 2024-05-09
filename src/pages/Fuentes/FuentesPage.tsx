import { useTranslation } from "react-i18next";
import { CustomText, ManagmentLayout } from "../../components";
import { FuentesDataForm } from "./Form";

const FuentesPage = () => {
    const { t } = useTranslation('commons');

    return (
        <ManagmentLayout
        title={<CustomText texto={t('pageTitles.sources')} variante="titulo" />}
        generalContents={
            <div>
                <CustomText texto="Seleccione sus fuentes de emision." variante="texto"/>
                <FuentesDataForm/>
            </div>
        }
        />
    );
};

export default FuentesPage;