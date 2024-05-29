import { Tooltip, Box, Grid } from '@mui/material';
import {
  ManagmentLayout,
  CustomText,
  CustomInput,
  CustomButton,
  DataTable,
  CustomColumn,
} from '../../components';
import HelpIcon from '@mui/icons-material/Help';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import { useCreateCompensationPlan } from './hooks';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { useTranslation } from 'react-i18next';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RecyclingIcon from '@mui/icons-material/Recycling';

const columns = (t, observeAction, deleteAction) => {
  return [
    CustomColumn({
      icon: <RecyclingIcon color="success" />,
      width: 200,
      field: 'name',
      headerName: t('generalTableHeaders.actions'),
      format: 'text',
      variante: 'texto',
    }),
    CustomColumn({
      width: 100,
      field: 'footPrintUnity',
      headerName: t('generalTableHeaders.ufp'),
      format: 'text',
      variante: 'texto',
    }),
    CustomColumn({
      width: 100,
      field: 'quantity',
      headerName: t('generalTableHeaders.quantity'),
      format: 'text',
      variante: 'texto',
    }),
    CustomColumn({
      width: 100,
      field: 'unitaryPrice',
      headerName: t('generalTableHeaders.cost'),
      format: 'text',
      variante: 'texto',
    }),
    CustomColumn({
      width: 300,
      field: 'options',
      headerName: t('generalTableHeaders.options'),
      format: 'button',
      variante: 'texto',
      buttonDetails: [
        {
          content: t('generalButtonText.view'),
          variant: 'contained',
          color: 'warning',
          icon: <EditIcon />,
          onClick: (rowData: { id: string }) => {
            observeAction(rowData.id);
          },
        },
        {
          content: t('generalButtonText.delete'),
          variant: 'contained',
          color: 'error',
          icon: <DeleteForeverIcon />,
          onClick: (rowData: { id: string }) => {
            deleteAction(rowData.id);
          },
        },
      ],
    }),
  ];
};

const CreateCompensationPlanPage = () => {
  const { errors, fields, addAction, register, removeAction } = useCreateCompensationPlan();
  const { t } = useTranslation('commons');

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
                    addAction({
                      id: 1,
                      name: 'acion 1',
                      description: 'Description de la action id 1',
                      unitaryPrice: 10,
                      footPrintUnity: 500,
                      quantity: 1,
                    });
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
        </Box>
      }
    />
  );
};

export default CreateCompensationPlanPage;
