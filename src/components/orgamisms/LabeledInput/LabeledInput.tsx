import { CustomText } from '../../Atoms';
import CustomInput from '../../Atoms/CustomInput/CustomInput';

interface LabeledInputProps {
  label: string;
  placeholder: string;
  mandatory?: boolean;
  icon?: JSX.Element;
  type: 'text' | 'password' | 'email' | 'number' | 'submit';
  props?: object;
}

const LabeledInput = ({
  label,
  placeholder,
  mandatory = false,
  type,
  props,
}: LabeledInputProps) => {
  return (
    <div>
      <div
        style={{ display: 'flex', justifyContent: 'start', alignItems: 'start', marginBottom: 2 }}
      >
        <CustomText texto={label} variante={'texto'} mandatory={mandatory} />
      </div>
      <CustomInput placeholder={placeholder} size={'large'} type={type} props={props} />
    </div>
  );
};

export default LabeledInput;
