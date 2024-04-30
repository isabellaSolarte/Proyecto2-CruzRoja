import './TextAreaStyle.css';

interface CustomTextArearProps {
  placeholder: string;
}
const CustomTextArea = ({ placeholder }: CustomTextArearProps) => {
  return <textarea className="custom-textarea" placeholder={placeholder} />;
};
export default CustomTextArea;
