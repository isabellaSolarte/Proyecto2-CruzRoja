import { CustomStepper } from '../../components';
import CoverageForm from './forms/CoverageForm';

const CalculatorPage = () => {
  return (
    <CustomStepper stepsData={[]} activeStep={0}>
      <CoverageForm />
    </CustomStepper>
  );
};

export default CalculatorPage;
