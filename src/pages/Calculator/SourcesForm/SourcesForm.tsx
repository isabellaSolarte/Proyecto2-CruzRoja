import { useTranslation } from "react-i18next";
import { CustomText, ManagmentLayout } from "../../../components";
import { SourcesDataForm } from "./Form";
import {sourcesDictionaryPrueba2} from "./Form/sourcesDictionary";

const SourcesPage = () => {
    const { t } = useTranslation('commons');

    return (
        <ManagmentLayout
        title={<CustomText texto={t('pageTitles.sources')} variante="titulo" />}
        generalContents={
            <div>
                <SourcesDataForm/>
            </div>
        }
        />
    );
};

export default SourcesPage;