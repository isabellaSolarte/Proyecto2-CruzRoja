import { Box, Grid, Typography } from '@mui/material';
import {
  CustomAccordion,
  CustomButton,
  CustomText,
  EmptyBox,
  LabeledInput,
  SimpleLayout,
} from '../../components';
import { useCalculatorResults } from './hooks';
import PrintIcon from '@mui/icons-material/Print';
import { RenderMonthData } from './components';
import RenderSourcesData from './components/RenderSourceData';
import { PieChart } from '@mui/x-charts/PieChart';

const CalculatorResultsPage = () => {
  const { total, totalByMonth, totalBySources, pageComponentRef, percentage, user, handlePrint } =
    useCalculatorResults();

  return (
    <SimpleLayout>
      <Box ref={pageComponentRef}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="../../../public/testResult.png"
              alt="logo calculadora resultado"
              style={{
                width: '7rem',
              }}
            />
            <CustomText texto={'Resultados Evaluación FootPrint'} variante={'titulo'} />
          </div>
          <CustomButton
            content={'Imprimir'}
            icon={<PrintIcon />}
            color="info"
            onClick={handlePrint}
          />
        </Box>

        <EmptyBox height={40} width={1} />

        <Grid container>
          <Grid item xs={12} md={6}>
            <CustomText texto={'Datos del Evaluador'} variante={'subtitulo'} />
            <LabeledInput
              label={'Nombre'}
              placeholder={`${user?.names} ${user?.lastNames}`}
              type={'text'}
            />
            <LabeledInput label={'Correo'} placeholder={`${user?.personalEmail}`} type={'text'} />
            <LabeledInput
              label={'Fecha'}
              placeholder={new Date().toLocaleDateString()}
              type={'text'}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomText texto={'Datos de la Empresa'} variante={'subtitulo'} />
            <LabeledInput label={'Nombre'} placeholder={'Nombre de la empresa'} type={'text'} />
            <LabeledInput label={'Correo'} placeholder={'Correo de la empresa'} type={'text'} />
            <LabeledInput
              label={'Representante'}
              placeholder={'Nombre del representante'}
              type={'text'}
            />
          </Grid>
        </Grid>

        <EmptyBox height={80} width={1} />

        <CustomText texto={'Resultados'} variante={'subtitulo'} />

        <CustomAccordion
          accordionSummary={'Datos Evaluados por Mes'}
          contentAccordion={totalByMonth.map(monthData => RenderMonthData(monthData))}
        />

        <EmptyBox height={10} width={1} />

        <CustomAccordion
          accordionSummary={'Datos Evaluados por Fuente de Emisión'}
          contentAccordion={totalBySources.map(sourceData => RenderSourcesData(sourceData))}
        />

        <EmptyBox height={10} width={1} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 1,
            padding: 2,
            boxShadow: 1,
          }}
        >
          <Typography fontWeight={'bold'}>Total Unidades FootPrint generadas</Typography>
          <Typography>{total} ufp</Typography>
        </Box>

        <EmptyBox height={60} width={1} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h6">Mayores Fuentes de Contaminación</Typography>
          <PieChart
            series={[
              {
                data: percentage.map((data, index) => {
                  return {
                    id: index,
                    label: `${data.source} (${data.total}%)`,
                    value: data.total,
                  };
                }),
                innerRadius: 40,
                paddingAngle: 5,
                cornerRadius: 5,
                highlightScope: { faded: 'global', highlighted: 'item' },
                faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
              },
            ]}
            width={600}
            height={200}
          />
        </Box>

        <EmptyBox height={60} width={1} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
            backgroundColor: '#65B741',
          }}
        >
          <img
            src="/unicaucaLogo.png"
            alt=""
            style={{ width: '6rem', filter: 'invert(1) brightness(2)' }}
          />
          <Typography sx={{ fontSize: 14, paddingRight: 2, color: '#fff' }}>
            En colaboración con Universidad del Cauca y Cruz Roja Colombiana
          </Typography>
          <img src="/cruzRojaLogo.png" alt="" />
        </Box>
      </Box>
    </SimpleLayout>
  );
};

export default CalculatorResultsPage;
