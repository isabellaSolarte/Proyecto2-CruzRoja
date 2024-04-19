import './InputStyle.css';

interface CustomInputProps {
  placeholder: string;
  size: 'small' | 'medium' | 'large'; // Define size prop
}
/*Ejmplo para usar el input 
      <CustomInput placeholder="Small Input" size="small" /> (input pequeño)
      <CustomInput placeholder="Medium Input" size="medium" /> (input mediano)
      <CustomInput placeholder="Large Input" size="large" />  (input grande)
*/
const CustomInput = ({ placeholder, size }: CustomInputProps) => {
  const inputClass = `custom-input-${size}`;
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={inputClass}
      style={{
        width: '100%',
      }}
    />
  );
};

export default CustomInput;
