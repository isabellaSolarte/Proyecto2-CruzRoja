import { CustomStepper } from '../../components';
import PollutionTypeForm from './forms/PollutionTypeForm';

const CalculatorPage = () => {
  return (
    <CustomStepper stepsData={[]} activeStep={0}>
      <div>{/* AQUI PONER SUS FORMULARIOS POR AHORA PARA QUE PRUEBEN */}
        <h1>Calculadora de area</h1>
        <PollutionTypeForm/>
      </div>
    </CustomStepper>
  );
};

export default CalculatorPage;
