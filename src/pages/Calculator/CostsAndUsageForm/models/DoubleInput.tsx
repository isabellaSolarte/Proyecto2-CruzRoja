import { Box, Grid, MenuItem, Select } from '@mui/material';
import { CustomText, LabeledInput } from '../../../../components';
import EnergySavingsLeafIcon from '@mui/icons-material/WaterDrop';

interface DoubleInputProps {
    mainLabel: string;
    labelInput1: string;
    labelInput2: string;
    labelInput3: string;
    labelInput4: string; 
    title: string;
    propsInput1?: { registerInput1?: any; updateInput1?: any; references?: number[]; };
    propsInput2?: { registerInput2?: any; updateInput2?: any; references?: number[]; defaultValue?: number; };
    propsInput3?: { registerInput3?: any; updateInput3?: any; references?: number[]; };
    propsInput4?: { registerInput4?: any; updateInput4?: any; references?: number[]; defaultValue?: number; };
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

const years = [
    { value: 2023, label: '2023' },
    { value: 2024, label: '2024' },
    { value: 2025, label: '2025' },
    { value: 2026, label: '2026' },
    { value: 2027, label: '2027' },
    { value: 2028, label: '2028' },
    { value: 2029, label: '2029' },
    { value: 2030, label: '2030' },
];

const DoubleInput = ({
    mainLabel,
    labelInput1,
    labelInput2,
    labelInput3,
    labelInput4,
    title,
    propsInput1,
    propsInput2,
    propsInput3,
    propsInput4,
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
    const updateInputData3 = (data: string) => {
        if (propsInput3?.references && propsInput3.references.length === 2) {
            propsInput3.updateInput3(propsInput3.references[0], propsInput3.references[1], data);
        }
    };
    const updateInputData4 = (data: string) => {
        if (propsInput4?.references && propsInput4.references.length === 2) {
            propsInput4.updateInput4(propsInput4.references[0], propsInput4.references[1], data);
        }
    };

    return (
        <Box>
            <Box sx={{ textAlign: 'center' }}>
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
            </Box>
            <Grid
                container
                spacing={2}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '1rem',
                }}
            >
                <Grid item xs={6} sm={3}>
                    <LabeledInput
                        label={labelInput1}
                        placeholder={''}
                        type={'number'}
                        labelAlign="center"
                        variante="pequeño"
                        updateText={propsInput1?.updateInput1}
                        props={propsInput1?.registerInput1 && { ...propsInput1.registerInput1 }}
                    />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <LabeledInput
                        label={labelInput3}
                        placeholder={''}
                        type={'number'}
                        labelAlign="center"
                        variante="pequeño"
                        updateText={propsInput3?.updateInput3}
                        props={propsInput3?.registerInput3 && { ...propsInput3.registerInput3 }}
                    />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <LabeledSelect
                        label={labelInput2}
                        options={months}
                        labelAlign="center"
                        variante="pequeño"
                        updateText={propsInput2?.updateInput2}
                        props={propsInput2?.registerInput2 && { ...propsInput2.registerInput2 }}
                        required
                        defaultValue={propsInput2?.defaultValue}
                    />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <LabeledSelect
                        label={labelInput4}
                        options={years}
                        labelAlign="center"
                        variante="pequeño"
                        updateText={propsInput4?.updateInput4}
                        props={propsInput4?.registerInput4 && { ...propsInput4.registerInput4 }}
                        required
                        defaultValue={propsInput4?.defaultValue}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

interface LabeledSelectProps {
    label: string;
    options: { value: number | string; label: string }[];
    labelAlign?: 'left' | 'center' | 'right';
    variante?: 'pequeño' | 'medio' | 'grande';
    updateText: (data: string) => void;
    props?: any;
    required?: boolean;
    defaultValue?: number;
}

const LabeledSelect = ({
    label,
    options,
    labelAlign = 'left',
    variante = 'medio',
    updateText,
    props,
    required = false,
    defaultValue
}: LabeledSelectProps) => {
    return (
        <Box sx={{ textAlign: labelAlign }}>
            <CustomText texto={label} variante='pequeño' />
            <Select
                onChange={(event) => updateText(event.target.value as string)}
                fullWidth
                required={required}
                defaultValue={defaultValue}
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
