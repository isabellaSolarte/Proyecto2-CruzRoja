import { Box } from '@mui/material';
import { CustomAccordion, CustomButton, CustomCard } from '../../../components';
import { useSourcesForm } from '../hooks';
import { sourcesDictionaryPrueba } from './sourcesDictionary';
import { SourcesCard } from '../Components';
import { useEffect, useState } from 'react';
import { defaultSourcesCategory } from '../Schemas';

const SourcesDataForm = () => {
  const { handleSubmit, onSubmit, register } = useSourcesForm();
  const [sourcesDictionary, setSourcesDictionary] = useState(defaultSourcesCategory);
  useEffect(() => {
    setSourcesDictionary(sourcesDictionaryPrueba);
  }, []);

  const handleSwitchState = (sourceId: number) => {
    // TODO: Implementar la lógica para cambiar el estado de la fuente en sourcesDictionary
    // 1. Crear una copia de sourcesDictionary
    const updatedSourcesDictionary = [...sourcesDictionary];

    // 2. Buscar la fuente con el id sourceId
    const categoryIndex = updatedSourcesDictionary.findIndex(category =>
      category.sources.some(source => source.id === sourceId),
    );
    const sourceIndex = updatedSourcesDictionary[categoryIndex].sources.findIndex(
      source => source.id === sourceId,
    );

    // 3. Cambiar el estado de la fuente
    updatedSourcesDictionary[categoryIndex].sources[sourceIndex].state =
      !updatedSourcesDictionary[categoryIndex].sources[sourceIndex].state;

    // 4. Actualizar sourcesDictionary con la nueva fuente
    setSourcesDictionary(updatedSourcesDictionary);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mt={4}>
          {sourcesDictionary.map(category => (
            <CustomAccordion
              key={category.id}
              accordionSummary={category.name}
              contentAccordion={
                <Box>
                  {category.sources.map(source => (
                    <SourcesCard
                      key={source.id}
                      Sources={source}
                      handleSwitchState={() => handleSwitchState(source.id)}
                      props={register('source')}
                    />
                  ))}
                </Box>
              }
            />
          ))}
        </Box>
        <Box mt={4} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <CustomButton content="Atras" onClick={() => {}} />
          <CustomButton content="Siguiente" type="submit" variant="contained" color="success" />
        </Box>
      </form>
    </Box>
  );
};

export default SourcesDataForm;
