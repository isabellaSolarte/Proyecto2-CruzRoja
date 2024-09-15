import { Container, Grid, Icon, Typography } from '@mui/material';
import { CustomText, ManagmentLayout } from '../../components';
import { useHomePage } from './hooks';

const HomaPage = () => {
  const { user, avalibleActions, generateRandomColor, navigate } = useHomePage();

  return (
    <ManagmentLayout
      title={<CustomText texto={`Hola ${user?.names}`} variante={'titulo'} />}
      description={
        <CustomText texto={'Bienvenido a tu centro de acciones principal.'} variante={'texto'} />
      }
      generalContents={
        <Grid container>
          {avalibleActions.map(action => {
            const color = generateRandomColor();
            return (
              <Grid item key={action.path} paddingBlock={5} paddingInline={10}>
                <Container
                  onClick={() => {
                    navigate(action.path);
                  }}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 4,
                    boxShadow: '0px 0px 10px 1px rgba(0,0,0,0.3)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transition: 'all 0.3s ease',
                      transform: 'scale(1.05)',
                      color: { color },
                    },
                    height: '8rem',
                    width: '11rem',
                  }}
                >
                  <Icon
                    sx={{
                      color: { color },
                    }}
                  >
                    {action.icon}
                  </Icon>
                  <Typography variant="body1" fontWeight={'bold'}>
                    Ver {action.title}
                  </Typography>
                </Container>
              </Grid>
            );
          })}
        </Grid>
      }
    />
  );
};

export default HomaPage;
