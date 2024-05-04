import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { ManagmentLayout, CustomButton, CustomText, CustomInput } from '../../components';
import { Box, Grid } from '@mui/material';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import { useCreateCategory } from './hooks/useCreateCategory';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { CategoryType } from './types/CategoryTypes';

const CreateCategoryPage = () => {
  const { t } = useTranslation('commons');
  const { id } = useParams<{ id: string }>();
  const { category, loadCategoryById, createOrUpdateCategory } = useCreateCategory();
  const { register, handleSubmit } = useForm<CategoryType>();

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
                  placeholder={t('registerCategory.namePlaceholder')}
                  size="medium"
                  defaultValue={category?.name }
                  props={register('name')}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomText
                  texto={t('registerCategory.scope')}
                  variante="subtitulo"
                  icon={<EnergySavingsLeafIcon color="success" />}
                  mandatory
                />
                <CustomInput
                  placeholder={t('registerCategory.scopePlaceholder')}
                  size="medium"
                  defaultValue={category?.scope}
                  props={register('scope')}
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
                  placeholder={t('registerCategory.descriptionPlaceholder')}
                  size="medium"
                  defaultValue={category?.descripction}
                  props={register('descripction')}
                />
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
