/* eslint-disable no-unused-vars */
import { CustomText } from '../../Atoms';
import CustomInput from '../../Atoms/CustomInput/CustomInput';

interface LabeledInputProps {
  label: string;
  placeholder: string;
  mandatory?: boolean;
  icon?: JSX.Element;
  type: 'text' | 'password' | 'email' | 'number' | 'submit';
  updateText?: (text: string) => void;
  props?: object;
  labelAlign?: 'center' | 'justify' | 'left' | 'right' | 'start';
  variante?: 'titulo' | 'texto' | 'subtitulo' | 'pequeño';
}

const LabeledInput = ({
  label,
  placeholder,
  mandatory = false,
  type,
  updateText,
  props,
  labelAlign,
  variante = 'texto',
}: LabeledInputProps) => {
  return (
    <div>
      <CustomText texto={label} variante={variante} mandatory={mandatory} textAlign={labelAlign} />
      <CustomInput
        placeholder={placeholder}
        size={'large'}
        type={type}
        props={props}
        updateText={updateText}
      />
    </div>
  );
};

export default LabeledInput;
