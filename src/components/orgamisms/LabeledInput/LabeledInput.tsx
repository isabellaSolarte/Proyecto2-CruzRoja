import { CustomText } from '../../Atoms';
import CustomInput from '../../Atoms/CustomInput/CustomInput';

interface LabeledInputProps {
  label: string;
  placeholder: string;
  mandatory?: boolean;
  icon?: JSX.Element; // Nuevo prop para el ícono
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
  icon, // Nuevo prop para el ícono
}: LabeledInputProps) => {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {icon && <div style={{ marginRight: '0.5rem' }}>{icon}</div>} {/* Mostrar el ícono si está presente */}
        <CustomText texto={label} variante={variante} mandatory={mandatory} textAlign={labelAlign} />
      </div>
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
