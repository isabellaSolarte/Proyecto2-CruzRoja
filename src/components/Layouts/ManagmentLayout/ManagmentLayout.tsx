import { Container, Grid } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { Mesuares } from '../Mesearues';
import { EmptyBox } from '../../Atoms';
import {CustomButton} from '../../../components';
import { mainRoutes } from '../../../core'; 

interface ManagmentLayoutProps {
  title: JSX.Element;
  description?: JSX.Element;
  generalContents: JSX.Element;
  actionsContent?: JSX.Element;
  inputBar?: JSX.Element;
}

const ManagmentLayout = ({
  title,
  description,
  generalContents,
  actionsContent,
  inputBar,
}: ManagmentLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {
    navigate(-1);
  };

  const isMainRoute = Object.values(mainRoutes).includes(location.pathname as mainRoutes);

  const showBackButton = !isMainRoute;

  return (
    
    <Container sx={{ padding: Mesuares.CONTENT_BOX_PADDING }}>
      <Grid container>
        <Grid item md={8} xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
          {title}
        </Grid>

        {actionsContent && (
          <Grid item md={4} xs={12} sx={{ display: 'flex' }}>
            {actionsContent}
          </Grid>
        )}
      </Grid>

      <EmptyBox height={30} width={100} />

      {description && (
        <div>
          {description}
          <EmptyBox height={30} width={100} />
        </div>
      )}

      {inputBar && (
        <>
          {inputBar}
          <EmptyBox height={30} width={100} />
        </>
      )}


      {generalContents}
      
      {showBackButton && (
        <CustomButton
          content={'Atrás'}
          onClick={handleGoBack}
        />
      )}
      
    </Container>
  );
};

export default ManagmentLayout;
