import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { ManagmentLayout, CustomButton, CustomText, CustomInput, CustomSelect } from '../../components';
import { Box, Grid } from '@mui/material';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import { useCreateCategory } from './hooks/useCreateCategory';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { CategoryType } from './types/CategoryTypes';
import { OptionSelector } from '../../models';
import { yupResolver } from '@hookform/resolvers/yup'; 
import { categorySchema } from './schemas/CategorySchema'; 

const CreateCategoryPage = () => {
  const { t } = useTranslation('commons');
  const { id } = useParams<{ id: string }>();
  const { category, loadCategoryById, createOrUpdateCategory } = useCreateCategory();
  const { register, handleSubmit, control, formState: { errors } } = useForm<CategoryType>({
    resolver: yupResolver(categorySchema), 
  });
  const options: OptionSelector[] = [
    { value: 'Alcance 1', label: 'Alcance 1' },
    { value: 'Alcance 2', label: 'Alcance 2' },
    { value: 'Alcance 3', label: 'Alcance 3' }
  ];
  useEffect(() => {
    void loadCategoryById(Number(id));
  }, []);

  const onSubmit = handleSubmit((data) => {
    createOrUpdateCategory(data);
  });

  return (
    <ManagmentLayout
      title={<CustomText texto={t('pageTitles.registerCategory')} variante="titulo" />}
      generalContents={
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
                  defaultValue={category ? category?.name : '' }
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
                  sx={{ backgroundColor: '#f5f5f5' }}
                  disabled={false}
                  error={!!errors.scope} 
                  readOnly={false}
                  required={true}
                  defaultValue={category ? category?.scope : '' }
                />
                {errors.scope && <span>{errors.scope.message}</span>} 
              </Grid>
              <Grid item xs={12}>
                <CustomText
                  texto={t('registerCategory.description')}
                  variante="subtitulo"
                  icon={<EnergySavingsLeafIcon color="success" />}
                  mandatory
                />
                <CustomInput
                  placeholder={t('Descripcion')}
                  size="medium"
                  defaultValue={category ? category?.descripction : '' }
                  props={register('descripction')}
                />
                {errors.descripction && <span>{errors.descripction.message}</span>} 
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomButton
                  content={t('components.stepper.back')}
                  onClick={() => {
                    // Acciones para ir hacia atrás
                  }}
                />
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
