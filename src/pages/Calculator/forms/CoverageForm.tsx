import { CustomText, ManagmentLayout } from '../../../components';
import { useCoverageForm } from '../hooks';

const CoverageForm = () => {
  const { t } = useCoverageForm();
  return (
    <ManagmentLayout
      title={<CustomText texto={t('title.CoverageTitle')} variante={'subtitulo'} />}
      generalContents={<></>}
    />
  );
};

export default CoverageForm;
