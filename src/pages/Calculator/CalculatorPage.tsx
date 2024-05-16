import { CustomStepper } from '../../components';
import { CoverageForm } from './CoverageForm';

const CalculatorPage = () => {
  return (
    <CustomStepper stepsData={[]} activeStep={0}>
      <CoverageForm sources={[]} />
    </CustomStepper>
  );
};

export default CalculatorPage;
