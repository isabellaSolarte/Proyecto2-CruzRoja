import { Tooltip, Box, Grid } from '@mui/material';
import {
  ManagmentLayout,
  CustomText,
  CustomInput,
  CustomButton,
  DataTable,
  ActionsModal,
  EmptyBox,
} from '../../components';
import HelpIcon from '@mui/icons-material/Help';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import { useCreateCompensationPlan } from './hooks';
import AddIcon from '@mui/icons-material/Add';
import { useTranslation } from 'react-i18next';
import columns from './components/ActionsTableColumns';
import { useState } from 'react';

const CreateCompensationPlanPage = () => {
  const {
    errors,
    fields,
    actionsSelected,
    setActionsSelected,
    addAllActions,
    register,
    removeAction,
    setValue,
    getValues,
  } = useCreateCompensationPlan();
  const { t } = useTranslation('commons');
  const [open, setOpen] = useState(false);

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
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <CustomText
                  texto={t('generalFormInputLabels.name')}
                  variante="subtitulo"
                  icon={<EnergySavingsLeafIcon color="success" />}
                  mandatory
                />
                <CustomInput placeholder={t('Nombre')} size="large" props={register('name')} />
                {errors.name && <span>{errors.name.message}</span>}
              </Grid>

              <Grid item xs={12}>
                <EmptyBox height={30} width={1} />
              </Grid>

              <Grid item xs={12}>
                <CustomText
                  texto={t('generalFormInputLabels.description')}
                  variante="subtitulo"
                  icon={<EnergySavingsLeafIcon color="success" />}
                  mandatory
                />
                <CustomInput
                  placeholder={t('generalFormInputLabels.description')}
                  size="large"
                  props={register('description')}
                  type="number"
                />
                {errors.description && <span>{errors.description.message}</span>}
              </Grid>

              <Grid item xs={12}>
                <EmptyBox height={30} width={1} />
              </Grid>

              <Grid item xs={12} md={10}>
                <CustomText
                  texto={t('generalTableHeaders.actions')}
                  variante="subtitulo"
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
                <CustomText texto={t('generalFormInputLabels.discount')} variante="subtitulo" />
                <CustomText texto={`${getValues('discount')}`} variante="subtitulo" />
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

          <ActionsModal
            open={open}
            actionSummary={actionsSelected}
            onCancel={() => {
              setOpen(false);
            }}
            onAddSelected={({ actions, totalUfp, totalCosto }) => {
              setActionsSelected({ actions, totalUfp, totalCosto });
              addAllActions(actions);
              setValue('discount', totalUfp);
              setOpen(false);
            }}
          />
        </Box>
      }
    />
  );
};

export default CreateCompensationPlanPage;
