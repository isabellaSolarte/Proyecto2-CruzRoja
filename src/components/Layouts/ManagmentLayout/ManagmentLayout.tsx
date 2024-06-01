import { Container, Grid } from '@mui/material';
import { Mesuares } from '../Mesearues';
import { EmptyBox } from '../../Atoms';

interface ManagmentLayoutProps {
  title: JSX.Element;
  description?: JSX.Element;
  generalContents: JSX.Element;
  actionsContent?: JSX.Element;
  inputBar?: JSX.Element;
}

/**
 *
 * @param title - Componente que contiene el título de la página. OBLIGATORIO
 * @param description - Componente que contiene la descripción de la página. - OPCIONAL
 * @param generalContents - Componente que contiene el contenido general de la página. OBLIGATORIO
 * @param actionsContent - Componente que contiene las acciones de la página, puede ser un boton un un label. - OPCIONAL
 * @param inputBar - Componente que contiene la barra de busqueda. OPCIONAL
 * @returns
 */

const ManagmentLayout = ({
  title,
  description,
  generalContents,
  actionsContent,
  inputBar,
}: ManagmentLayoutProps) => {
  return (
    <Container
      sx={{
        padding: Mesuares.CONTENT_BOX_PADDING,
        maxWidth: 'calc(100vw*0.9)',
      }}
    >
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

      {description && (
        <div>
          <EmptyBox height={30} width={100} />
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

      <Container>{generalContents}</Container>
      <EmptyBox height={30} width={100} />
    </Container>
  );
};

export default ManagmentLayout;
