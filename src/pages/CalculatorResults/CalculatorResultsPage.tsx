import { Box, Typography } from '@mui/material';
import {
  CustomAccordion,
  CustomButton,
  CustomText,
  EmptyBox,
  SimpleManagmentLayout,
} from '../../components';
import { useCalculatorResults } from './hooks';
import PrintIcon from '@mui/icons-material/Print';
import { RenderMonthData } from './components';
import RenderSourcesData from './components/RenderSourceData';

const CalculatorResultsPage = () => {
  const { total, totalByMonth, totalBySources, pageComponentRef, handlePrint } =
    useCalculatorResults();

  return (
    <SimpleManagmentLayout>
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
            <CustomText texto={'Resultados Evaluación FootPrint'} variante={'subtitulo'} />
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <CustomText texto={new Date().toLocaleDateString()} variante={'texto'} />
            <CustomButton
              content={'Imprimir'}
              icon={<PrintIcon />}
              color="info"
              onClick={handlePrint}
            />
          </div>
        </Box>

        <EmptyBox height={40} width={1} />

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
    </SimpleManagmentLayout>
  );
};

export default CalculatorResultsPage;
