import { CustomStepper } from '../../components';
import { CategoriesForm } from './forms';
import CoverageForm from './forms/CoverageForm';

const CalculatorPage = () => {
  return (
    <CustomStepper stepsData={[]} activeStep={0}>
      
          <CategoriesForm //todo implementar adaptador
          />

    </CustomStepper>
  );
};

export default CalculatorPage;
