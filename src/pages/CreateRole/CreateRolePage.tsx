import { useTranslation } from 'react-i18next';
import { ManagmentLayout, CustomText } from '../../components';
import { FormRoleData } from './Form';

//TODO preguntar sobre si se necesita una interfaz cuando manda el id del rol a editar
const CreateRolePage = () => {
  const { t } = useTranslation('commons');

  return (
    <ManagmentLayout
      title={<CustomText texto={t('pageTitles.createRole')} variante="titulo" />}
      generalContents={
        <FormRoleData //todo implementar adaptador
        />
      }
    />
  );
};

export default CreateRolePage;
