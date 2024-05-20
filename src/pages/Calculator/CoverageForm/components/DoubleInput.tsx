/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
import { Box, Grid, Typography } from '@mui/material';
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
      <Grid item xs={12}>
        <Typography sx={{ textAlign: 'center' }}>{title}</Typography>
      </Grid>

      <Grid item xs={12} md={12} lg={6}>
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

      <Grid item xs={12} md={12} lg={6}>
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
