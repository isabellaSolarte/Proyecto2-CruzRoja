import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { defaultSourcesCategory, sourcesCategoryValidation, defaulCategorySchema } from '../Schemas/SourcesSchema';
import { yupResolver } from '@hookform/resolvers/yup';

interface SourcesFormState {
    // TODO: Definir el tipo de las propiedades del formulario
}

const useSourcesForm = () => {
    
    const {
        handleSubmit,
        register,
        formState: { errors },
      } = useForm({
        defaultValues: defaulCategorySchema,
        resolver: yupResolver(sourcesCategoryValidation),
      });
      
      
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
        onSubmit
    };
};

export default useSourcesForm;