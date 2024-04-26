/* eslint-disable no-unused-vars */
import { TextField } from '@mui/material';
import './InputStyle.css';

interface CustomInputProps {
  placeholder: string;
  size: 'small' | 'medium' | 'large'; // Define size prop
  type?: 'text' | 'password' | 'email' | 'number' | 'submit'; // Define type prop
  updateText?: (text: string) => void;
  value?: string | number;
  props?: object;
  defaultValue?: string;
}
/*Ejmplo para usar el input 
      <CustomInput placeholder="Small Input" size="small" /> (input pequeño)
      <CustomInput placeholder="Medium Input" size="medium" /> (input mediano)
      <CustomInput placeholder="Large Input" size="large" />  (input grande)
*/
const CustomInput = ({
  placeholder,
  size,
  type = 'text',
  updateText,
  value,
  defaultValue,
  props = {},
}: CustomInputProps) => {
  const inputClass = `custom-input-${size}`;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (updateText) {
      updateText(e.target.value);
    }
  };

  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className={inputClass}
        style={{
          width: '100%',
        }}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default CustomInput;
