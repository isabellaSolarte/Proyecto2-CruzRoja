import { Tooltip, Box, Grid } from '@mui/material';
import {
  ManagmentLayout,
  CustomText,
  CustomInput,
  CustomButton,
  DataTable,
  ActionsModal,
  EmptyBox,
  CustomLoader,
} from '../../components';
import HelpIcon from '@mui/icons-material/Help';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import { useCreateCompensationPlan } from './hooks';
import AddIcon from '@mui/icons-material/Add';
import { useTranslation } from 'react-i18next';
import columns from './components/ActionsTableColumns';
import { useEffect, useState } from 'react';
import { useBusinessHooks } from '../Bussiness';
import CustomSearchInput from '../../components/Molecules/CustomSearchInput/CustomSearchInput';

const CreateCompensationPlanPage = () => {
  const { loadAllCompanies, business } = useBusinessHooks();
  const [companies, setCompanies] = useState<{ label: string; value: object }[]>([]);
  const {
    userId,
    errors,
    fields,
    actionsSelected,
    isLoading,
    currentPlan,
    id,
    path,
    setActionsSelected,
    register,
    removeAction,
    getTotalUfp,
    onSubmit,
    handleSubmit,
    getValues,
    setValue,
    generateInitalPlanState,
    reset,
    updateActions,
    updateSelectedBusiness,
  } = useCreateCompensationPlan();
  const { t } = useTranslation('commons');
  const [open, setOpen] = useState(false);

  // Cargar el plan de compensación en caso de que se edite
  useEffect(() => {
    if (id) generateInitalPlanState();
  }, [id]);

  // Resetear el plan de compensación en caso de que se edite
  useEffect(() => {
    if (currentPlan.description !== '') {
      reset(currentPlan);
      console.log(JSON.stringify(fields));
    }
  }, [currentPlan]);

  // Cargar las empresas
  useEffect(() => {
    setValue('volunterId', userId);
    loadAllCompanies();
  }, []);

  // Actualizar las empresas en el select de empresas para el serachInput
  useEffect(() => {
    setCompanies(business.map(company => ({ label: company.companyName, value: company })));
  }, [business]);

  return (
    <ManagmentLayout
      title={<CustomText texto={t('pageTitles.createAction')} variante="titulo" />}
      actionsContent={
        <Tooltip title={t('registerPlan.help.descriptionActionFormHelp')} placement="right">
          <HelpIcon color="disabled" />
        </Tooltip>
      }
      description={
        <div>
          <CustomText texto={t('registerPlan.help.title')} variante={'texto'} />
          <ul>
            <li>
              <CustomText texto={t('registerPlan.help.nameAction')} variante={'texto'} />
            </li>
            <li>
              <CustomText texto={t('registerPlan.help.unitaryPrice')} variante={'texto'} />
            </li>
            <li>
              <CustomText texto={t('registerPlan.help.footPrintUnity')} variante={'texto'} />
            </li>
            <li>
              <CustomText texto={t('registerPlan.help.quantity')} variante={'texto'} />
            </li>
            <li>
              <CustomText texto={t('registerPlan.help.description')} variante={'texto'} />
            </li>
          </ul>
        </div>
      }
      generalContents={
        <Box>
          {isLoading && <CustomLoader />}
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <CustomText
                  texto={t('generalFormInputLabels.name')}
                  variante="texto"
                  icon={<EnergySavingsLeafIcon color="success" />}
                  mandatory
                />
                <CustomInput placeholder={t('Nombre')} size="large" props={register('name')} />
                {errors.name && <span>{errors.name.message}</span>}
              </Grid>

              <Grid item xs={12} md={6}>
                <CustomText
                  texto={t('generalFormInputLabels.discount')}
                  variante="texto"
                  icon={<EnergySavingsLeafIcon color="success" />}
                />
                <CustomInput
                  placeholder={t('Discount')}
                  size="large"
                  props={register('discount')}
                />
                {errors.discount && <span>{errors.discount.message}</span>}
              </Grid>

              {path && path.includes('custom') && (
                <Grid item xs={12} md={6}>
                  <CustomSearchInput
                    options={companies}
                    placeholder={t('generalSearchPlaceholder.business')}
                    inputTitle={t('generalFormInputLabels.business')}
                    props={undefined}
                    onChangeEvent={updateSelectedBusiness}
                  />
                </Grid>
              )}

              <Grid item xs={12}>
                <CustomText
                  texto={t('generalFormInputLabels.description')}
                  variante="texto"
                  icon={<EnergySavingsLeafIcon color="success" />}
                  mandatory
                />
                <CustomInput
                  placeholder={t('generalFormInputLabels.description')}
                  size="large"
                  props={register('description')}
                />
                {errors.description && <span>{errors.description.message}</span>}
              </Grid>

              <Grid item xs={12}>
                <EmptyBox height={30} width={1} />
              </Grid>

              <Grid item xs={12} md={10}>
                <CustomText
                  texto={t('generalTableHeaders.actions')}
                  variante="texto"
                  icon={<EnergySavingsLeafIcon color="success" />}
                  mandatory
                />

                {/* {errors.quantity && <span>{errors.quantity.message}</span>} */}
              </Grid>

              <Grid item xs={12} md={2}>
                <CustomButton
                  content={t('generalButtonText.add')}
                  color="info"
                  icon={<AddIcon />}
                  onClick={() => {
                    setOpen(true);
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <DataTable
                  enableCheckboxSelection={false}
                  dataColumns={columns(t, () => {}, removeAction)}
                  dataRows={fields}
                  enableTools={false}
                />
              </Grid>

              <Grid item xs={12}>
                <Box sx={{ display: 'flex' }}>
                  <CustomText texto={'Unidades de compensación: '} variante="subtitulo" />
                  <CustomText
                    texto={`${getTotalUfp(getValues('actions'))} `}
                    variante="subtitulo"
                  />
                </Box>
              </Grid>
            </Grid>

            <Box
              mt={4}
              sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <CustomButton content={t('components.stepper.back')} onClick={() => {}} />
              <CustomButton
                content={t('generalButtonText.save')}
                type="submit"
                variant="contained"
                color="success"
              />
            </Box>
          </form>

          {open && (
            <ActionsModal
              actionSummary={actionsSelected}
              onCancel={() => {
                setOpen(false);
              }}
              onAddSelected={({ actions, totalUfp, totalPrice }) => {
                setActionsSelected({ actions, totalUfp, totalPrice: totalPrice });

                updateActions(actions);

                setOpen(false);
              }}
            />
          )}
        </Box>
      }
    />
  );
};

export default CreateCompensationPlanPage;
