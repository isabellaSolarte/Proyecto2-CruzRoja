import { Box, Grid, MenuItem, Select } from '@mui/material';
import { CustomText, LabeledInput } from '../../../../components';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';

interface DoubleInputProps {
    mainLabel: string;
    labelInput1: string;
    labelInput2: string;
    title: string;
    propsInput1?: { registerInput1?: any; updateInput1?: any; references?: number[]; };
    propsInput2?: {
        registerInput2?: any;
        updateInput2?: any;
        references?: number[];
        defaultValue?: number; // Agregar la propiedad defaultValue
    };
}

const months = [
    { value: 1, label: 'Enero' },
    { value: 2, label: 'Febrero' },
    { value: 3, label: 'Marzo' },
    { value: 4, label: 'Abril' },
    { value: 5, label: 'Mayo' },
    { value: 6, label: 'Junio' },
    { value: 7, label: 'Julio' },
    { value: 8, label: 'Agosto' },
    { value: 9, label: 'Septiembre' },
    { value: 10, label: 'Octubre' },
    { value: 11, label: 'Noviembre' },
    { value: 12, label: 'Diciembre' },
];

const DoubleInput = ({
    mainLabel,
    labelInput1,
    labelInput2,
    title,
    propsInput1,
    propsInput2,
}: DoubleInputProps) => {
    const updateInputData1 = (data: string) => {
        if (propsInput1?.references && propsInput1.references.length === 2) {
            propsInput1.updateInput1(propsInput1.references[0], propsInput1.references[1], data);
        }
    };
    const updateInputData2 = (data: string) => {
        if (propsInput2?.references && propsInput2.references.length === 2) {
            propsInput2.updateInput2(propsInput2.references[0], propsInput2.references[1], data);
        }
    };

    return (
        <Grid
            container
            sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'flex-end',
            }}
        >
            <Grid item xs={12} md={6}>
                <CustomText
                    texto={mainLabel}
                    variante={'pequeño'}
                    textAlign="center"
                    icon={<EnergySavingsLeafIcon color="success" />}
                />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.5)',
                        borderRadius: '5px',
                        padding: '0.8rem',
                    }}
                >
                    <CustomText texto={title} variante={'texto'} textAlign="center" />
                </Box>
            </Grid>
            <Grid item xs={6} md={3}>
                <LabeledInput
                    label={labelInput1}
                    placeholder={''}
                    type={'number'}
                    labelAlign="center"
                    variante="pequeño"
                    updateText={updateInputData1}
                    props={propsInput1?.registerInput1 && { ...propsInput1.registerInput1 }}
                />
            </Grid>
            <Grid item xs={6} md={3}>
                <LabeledSelect
                    label={labelInput2}
                    options={months}
                    labelAlign="center"
                    variante="pequeño"
                    updateText={updateInputData2}
                    props={propsInput2?.registerInput2 && { ...propsInput2.registerInput2 }}
                    required // Hacer que el Select sea obligatorio
                    defaultValue={propsInput2?.defaultValue} // Establecer la opción predeterminada como enero
                />
            </Grid>
        </Grid>
    );
};

interface LabeledSelectProps {
    label: string;
    options: { value: number | string; label: string }[]; // El valor puede ser un número o una cadena
    labelAlign?: 'left' | 'center' | 'right';
    variante?: 'pequeño' | 'medio' | 'grande';
    updateText: (data: string) => void;
    props?: any;
    required?: boolean; // Propiedad para indicar si el campo es obligatorio
    defaultValue?: number; // Propiedad para el valor predeterminado
}

const LabeledSelect = ({
    label,
    options,
    labelAlign = 'left',
    variante = 'medio',
    updateText,
    props,
    required = false,
    defaultValue // Agregar defaultValue como argumento
}: LabeledSelectProps) => {
    return (
        <Box sx={{ textAlign: labelAlign }}>
            <CustomText texto={label} variante='pequeño' />
            <Select
                onChange={(event) => updateText(event.target.value as string)}
                fullWidth
                required={required} // Hacer que el Select sea obligatorio
                defaultValue={defaultValue} // Pasar el valor predeterminado
                {...props}
            >
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </Box>
    );
};

export default DoubleInput;