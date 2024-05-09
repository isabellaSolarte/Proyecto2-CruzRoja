import { CustomStepper, CustomText, ManagmentLayout } from '../../components';

const CalculatorPage = () => {
  return (
    <ManagmentLayout
      title={<CustomText texto={''} variante={'texto'} />}
      generalContents={
        <CustomStepper stepsData={[]} activeStep={0}>
          <div></div>
        </CustomStepper>
      }
    />
  );
};

export default CalculatorPage;
