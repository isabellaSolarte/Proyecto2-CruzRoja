import { useTranslation } from 'react-i18next';

const useCoverageForm = () => {
  const { t } = useTranslation();
  return {
    t,
  };
};

export default useCoverageForm;
