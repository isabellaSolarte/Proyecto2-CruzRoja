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
import { useNavigate } from "react-router-dom";
import { PathNames } from '../../core';

const CreateCategoryPage = () => {
  const { t } = useTranslation('commons');
  const navigate = useNavigate();
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
  const handleCreateButtonClick = () => {
    navigate(PathNames.CATEGORIES);
  };

  useEffect(() => {
    void loadCategoryById(Number(id));
  }, [id]);

  useEffect(() => {
    if (category) {
      setValue('name', category.name); 
      setValue('descripction', category.descripction); 
      setValue('scope', category.scope); 
    }
  }, [category, setValue]); 

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
                  size="large"
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
                  size="large"
                  props={register('descripction')}
                />
                {errors.descripction && <span>{errors.descripction.message}</span>} 
              </Grid>
              
            </Grid>
            <Box mt={4} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              
                  <CustomButton
                      content={t('components.stepper.back')} 
                      onClick={handleCreateButtonClick}
                  />
                   <CustomButton
                    content={t('generalButtonText.save')}
                    type="submit"
                    variant="contained"
                    color="success"
                  />
                 </Box>    
          </form>
        </Box>
      }
    />
  );
};

export default CreateCategoryPage;
