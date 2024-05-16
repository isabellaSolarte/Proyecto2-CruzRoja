import { useState } from 'react';
import { useFieldArray, useForm, con } from 'react-hook-form';
import { defaulSourcesSchema,defaulSourceSchema, sourcesSchema,sourceSchema, initialSchema, initialSchemaValidation } from '../Schemas/SourcesSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { SourcesType } from '../types/SourcesType';

interface SourcesFormState {
    // TODO: Definir el tipo de las propiedades del formulario
}

const useSourcesForm = () => {
    
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(initialSchemaValidation),
      });

      const sourcesArray = useFieldArray({
        control,
        name: 'sources',
      });
      const addSource = (source: SourcesType) => {
        sourcesArray.append(source);
      };

      const removeSource = (name: string) => {
        const indexToRemove = sourcesArray.fields.findIndex(field => field.name === name);
        
        if (indexToRemove !== -1) {
          sourcesArray.remove(indexToRemove);
        }
      };

      const [isLoading, setIsLoading] = useState(false);
      const [error, setError] = useState<string | null>(null);
      const onSubmit = async (data: any) => {
        setIsLoading(true);
        setError(null);
        
        console.log('useFuentesForm data:', data);

        
    
        setIsLoading(false);
      }

    return {
        handleSubmit,
        register,
        errors,
        isLoading,
        error,
        onSubmit,
        addSource,
        removeSource,
    };
};

export default useSourcesForm;