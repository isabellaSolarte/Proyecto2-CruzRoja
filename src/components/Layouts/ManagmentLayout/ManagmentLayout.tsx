import { Container, Grid } from '@mui/material';
import { Mesuares } from '../Mesearues';
import { EmptyBox } from '../../Atoms';

interface ManagmentLayoutProps {
  title: JSX.Element;
  description?: JSX.Element;
  generalContents: JSX.Element;
  button: JSX.Element;
  inputBar: JSX.Element;
}

const ManagmentLayout = ({
  title,
  description,
  generalContents,
  button,
  inputBar,
}: ManagmentLayoutProps) => {
  return (
    <Container sx={{ padding: Mesuares.CONTENT_BOX_PADDING }}>
      {title}

      <EmptyBox height={30} width={100} />

      {description && (
        <div style={{ minHeight: '2rem', textAlign: 'justify' }}>
          {description} <EmptyBox height={30} width={100} />
        </div>
      )}

      <Grid
        container
        columns={16}
        sx={{ margin: 0, display: 'flex' }}
        justifyContent={'space-between'}
      >
        <Grid item xs={10}>
          {inputBar}
        </Grid>
        <Grid item xs={4}>
          {button}
        </Grid>
      </Grid>

      <EmptyBox height={30} width={100} />

      {generalContents}
    </Container>
  );
};

export default ManagmentLayout;
