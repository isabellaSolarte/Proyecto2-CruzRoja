import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { ManagmentLayout, CustomButton, CustomText, CustomInput } from '../../components';
import { Box, Grid, Tooltip } from '@mui/material';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import { useCreateAction } from './hooks/useCreateAction';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react'; 
import { ActionType } from './Types/ActionType';
import { yupResolver } from '@hookform/resolvers/yup'; 
import { actionSchema } from './schemas/actionSchema'; 
import { useNavigate } from "react-router-dom";
import { PathNames } from '../../core';
import HelpIcon from '@mui/icons-material/Help';

const CreateActionPage = () => {
  const { t } = useTranslation('commons');
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { action, loadActionById, createOrUpdateAction } = useCreateAction();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<ActionType>({
    resolver: yupResolver(actionSchema), 
  });

  const handleCreateButtonClick = () => {
    navigate(PathNames.ACTIONS);
  };

  useEffect(() => {
    if (id) {
      void loadActionById(Number(id));
    }
  }, [id]);

  useEffect(() => {
    if (action) {
      setValue('name', action.name); 
      setValue('description', action.description); 
      setValue('unitaryPrice', action.unitaryPrice); 
      setValue('footPrintUnity', action.footPrintUnity); 
      setValue('quantity', action.quantity); 
    }
  }, [action, setValue]); 

  const onSubmit = handleSubmit((data) => {
    createOrUpdateAction(data);
  });

  const pageTitle = id ? t('pageTitles.editAction') : t('pageTitles.createAction');

  return (
    <ManagmentLayout
      title={<CustomText texto={pageTitle} variante="titulo" />}
      actionsContent={
        <Tooltip title={t('registerAction.help.descriptionActionFormHelp')} placement="right">
          <HelpIcon color="disabled" />
        </Tooltip>
      }
      description={
        <div>
          <CustomText texto={t('registerAction.help.title')} variante={'texto'} />
          <ul>
            <li>
              <CustomText texto={t('registerAction.help.nameAction')} variante={'texto'} />
            </li>
            <li>
              <CustomText texto={t('registerAction.help.unitaryPrice')} variante={'texto'} />
            </li>
            <li>
              <CustomText texto={t('registerAction.help.footPrintUnity')} variante={'texto'} />
            </li>
            <li>
              <CustomText texto={t('registerAction.help.quantity')} variante={'texto'} />
            </li>
            <li>
              <CustomText texto={t('registerAction.help.description')} variante={'texto'} />
            </li>
          </ul>
        </div>
      }
      generalContents={
        <Box>
          <form onSubmit={onSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <CustomText
                  texto={t('registerAction.nameAction')}
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
                  texto={t('registerAction.unitaryPrice')}
                  variante="subtitulo"
                  icon={<EnergySavingsLeafIcon color="success" />}
                  mandatory
                />
                <CustomInput
                  placeholder={t('Precio Unitario')}
                  size="large"
                  props={register('unitaryPrice')}
                  type="number"
                />
                {errors.unitaryPrice && <span>{errors.unitaryPrice.message}</span>}
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomText
                  texto={t('registerAction.footPrintUnity')}
                  variante="subtitulo"
                  icon={<EnergySavingsLeafIcon color="success" />}
                  mandatory
                />
                <CustomInput
                  placeholder={t('Unidad de Huella de Carbono')}
                  size="large"
                  props={register('footPrintUnity')}
                  type="number"
                />
                {errors.footPrintUnity && <span>{errors.footPrintUnity.message}</span>}
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomText
                  texto={t('registerAction.quantity')}
                  variante="subtitulo"
                  icon={<EnergySavingsLeafIcon color="success" />}
                  mandatory
                />
                <CustomInput
                  placeholder={t('Cantidad')}
                  size="large"
                  props={register('quantity')}
                  type="number"
                />
                {errors.quantity && <span>{errors.quantity.message}</span>}
              </Grid>
              <Grid item xs={12}>
                <CustomText
                  texto={t('registerAction.description')}
                  variante="subtitulo"
                  icon={<EnergySavingsLeafIcon color="success" />}
                  mandatory
                />
                <CustomInput
                  placeholder={t('Descripción')}
                  size="large"
                  props={register('description')}
                />
                {errors.description && <span>{errors.description.message}</span>} 
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

export default CreateActionPage;
