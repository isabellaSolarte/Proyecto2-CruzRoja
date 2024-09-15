import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { CalculatorContext } from '../../../contexts';

const useCalculatorHook = () => {
  const { t } = useTranslation('commons');
  const calculator = useContext(CalculatorContext);

  return {
    calculator,
    t,
  };
};

export default useCalculatorHook;
