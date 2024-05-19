/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
import { Box, Grid } from '@mui/material';
import { CustomText, LabeledInput } from '../../../../components';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';

interface DoubleInputProps {
  mainLabel: string;
  labelInput1: string;
  labelInput2: string;
  title: string;
  propsInput1?: {
    registerInput1?: any;
    updateInput1?: any;
    references?: number[];
  };
  propsInput2?: {
    registerInput2?: any;
    updateInput2?: any;
    references?: number[];
  };
}

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
        <LabeledInput
          label={labelInput2}
          placeholder={''}
          type={'number'}
          labelAlign="center"
          variante="pequeño"
          updateText={updateInputData2}
          props={propsInput2?.registerInput2 && { ...propsInput2.registerInput2 }}
        />
      </Grid>
    </Grid>
  );
};

export default DoubleInput;
