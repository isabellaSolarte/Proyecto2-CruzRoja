import { useState } from 'react';
import ActionsModal from './ActionsModal';
import { ActionType } from './types/ActionType';
import Button from '@mui/material/Button';
import { ManagmentLayout } from '../../Layouts';
import { CustomText } from '../../Atoms';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

type ActionSummaryType = {
  actions: ActionType[];
  totalUfp: number;
  totalCosto: number;
};

const ParentComponent = () => {
  const { t } = useTranslation('commons');
  const [showModal, setShowModal] = useState(false);
  const [actionSummary, setActionSummary] = useState<ActionSummaryType>({
    actions: [],
    totalUfp: 0,
    totalCosto: 0,
  });

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleAddSelected = (selectedActions: ActionSummaryType) => {
    // Lógica para agregar las acciones seleccionadas
    console.log('Acciones seleccionadas:', selectedActions);
    setActionSummary(selectedActions)
    // Aquí puedes realizar la lógica adicional que necesites, como actualizar el estado o enviar datos a un servidor
    setShowModal(false);
  };

  return (
    <ManagmentLayout
    title={<CustomText texto={t('Acciones')} variante="titulo" />}
    generalContents={
      <Grid container spacing={2}>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setShowModal(true)}
          >
            {t('Agregar Acciones')}
          </Button>
          {showModal && (
            <ActionsModal
              actionSummary={actionSummary}
              onCancel={handleCancel}
              onAddSelected={handleAddSelected}
            />
          )}
        </Grid>
        {/*... */}
      </Grid>
    }
    />
  );
};

export default ParentComponent;