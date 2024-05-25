import { Container, Grid, Icon, Typography } from '@mui/material';
import { CustomText, ManagmentLayout } from '../../components';
import { useHomePage } from './hooks';

const HomaPage = () => {
  const { user, avalibleActions } = useHomePage();
  console.log('avalibleActions', avalibleActions);
  return (
    <ManagmentLayout
      title={<CustomText texto={`Hola ${user?.names}`} variante={'titulo'} />}
      description={
        <CustomText texto={'Bienvenido a tu centro de acciones principal.'} variante={'texto'} />
      }
      generalContents={
        <Grid container>
          {avalibleActions.map(action => (
            <Grid item key={action.path} paddingBlock={5} paddingInline={10}>
              <Container
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 1,
                  padding: 1,
                  borderRadius: 1,
                  backgroundColor: '#B842AF',
                  boxShadow: '0px 0px 1px 0px #000000',
                  cursor: 'pointer',
                  transition: 'all 0.5s ease',
                  '&:hover': {
                    transition: 'all 0.5s ease',
                    transform: 'scale(1.05)',
                    background:
                      'linear-gradient(180deg, rgba(23,26,74,1) 0%, rgba(62,128,34,1) 38%)',
                    color: '#fff',
                  },
                  height: '10rem',
                  width: '10rem',
                }}
              >
                <Icon>{action.icon}</Icon>
                <Typography variant="h6">{action.title}</Typography>
              </Container>
            </Grid>
          ))}
        </Grid>
      }
    />
  );
};

export default HomaPage;
