import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { ManagmentLayout, CustomButton, CustomText, CustomInput, CustomSelect } from '../../components';
import { Box, Grid } from '@mui/material';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import { useCreateCategory } from './hooks/useCreateCategory';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'; // Importa useState
import { CategoryType } from './types/CategoryTypes';
import { OptionSelector } from '../../models';
import { yupResolver } from '@hookform/resolvers/yup'; 
import { categorySchema } from './schemas/CategorySchema'; 

const CreateCategoryPage = () => {
  const { t } = useTranslation('commons');
  const { id } = useParams<{ id: string }>();
  const { category, loadCategoryById, createOrUpdateCategory } = useCreateCategory();
  const { register, handleSubmit, control, formState: { errors }, setValue } = useForm<CategoryType>({ // Agrega setValue
    resolver: yupResolver(categorySchema), 
  });
  const options: OptionSelector[] = [
    { value: 'Alcance 1', label: 'Alcance 1' },
    { value: 'Alcance 2', label: 'Alcance 2' },
    { value: 'Alcance 3', label: 'Alcance 3' }
  ];

  useEffect(() => {
    void loadCategoryById(Number(id));
  }, [id]);

  useEffect(() => {
    if (category) {
      setValue('name', category.name); // Actualiza el valor por defecto del nombre
      setValue('descripction', category.descripction); // Actualiza el valor por defecto de la descripción
      setValue('scope', category.scope); // Actualiza el valor por defecto del alcance
    }
  }, [category, setValue]); // Ejecuta el efecto cuando category o setValue cambien

  const onSubmit = handleSubmit((data) => {
    createOrUpdateCategory(data);
  });

  return (
    <ManagmentLayout
      title={<CustomText texto={t('pageTitles.registerCategory')} variante="titulo" />}
      generalContents={ // Renderiza el formulario independientemente de la carga de la categoría
        <Box>
          <form onSubmit={onSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <CustomText
                  texto={t('registerCategory.nameCategory')}
                  variante="subtitulo"
                  icon={<EnergySavingsLeafIcon color="success" />}
                  mandatory
                />
                <CustomInput
                  placeholder={t('Nombre')}
                  size="medium"
                  props={register('name')}
                />
                {errors.name && <span>{errors.name.message}</span>} 
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomText
                  texto={t('registerCategory.scope')}
                  variante="subtitulo"
                  icon={<EnergySavingsLeafIcon color="success" />}
                  mandatory
                />
                <CustomSelect
                  options={options}
                  label={t('Alcance')} 
                  labelId="scope" 
                  control={control} 
                  sx={{ backgroundColor: '#FCFCFC' }}
                  disabled={false}
                  error={!!errors.scope} 
                  readOnly={false}
                  required={true}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomText
                  texto={t('registerCategory.description')}
                  variante="subtitulo"
                  icon={<EnergySavingsLeafIcon color="success" />}
                  mandatory
                />
                <CustomInput
                  placeholder={t('Descripción')}
                  size="medium"
                  props={register('descripction')}
                />
                {errors.descripction && <span>{errors.descripction.message}</span>} 
              </Grid>
              <Grid item xs={12} md={6}>
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomButton
                  content={t('generalButtonText.save')}
                  type="submit"
                  variant="contained"
                  color="success"
                />
              </Grid>
            </Grid>
          </form>
        </Box>
      }
    />
  );
};

export default CreateCategoryPage;
