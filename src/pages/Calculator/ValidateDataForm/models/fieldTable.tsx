import './styles.css'
interface FieldInputProps {
    
    labelInput1: string;
    labelInput2: string;
    labelInput3: string;
    labelInput4: string;
    
}
const FieldTable = ({
    labelInput1,
    labelInput2,
    labelInput3,
    labelInput4
}: FieldInputProps) => {
    

    return (
        
        <div className="label">
            <span>{labelInput1}</span> 
            <span className="space"></span> 
            <span>{labelInput2}</span> 
            <span className="space"></span> 
            <span>{labelInput3}</span> 
            <span className="space"></span> 
            <span>{labelInput4}</span> 
            <br />
        </div>
    );
};
export default FieldTable;