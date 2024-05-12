import { CustomStepper } from '../../components';
import { CostsAndUsage } from './forms';

const CalculatorPage = () => {
  return (
    <CustomStepper stepsData={[]} activeStep={0}>
      <div>{<CostsAndUsage/>}</div>
    </CustomStepper>
  );
};

export default CalculatorPage;
