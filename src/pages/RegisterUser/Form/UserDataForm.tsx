/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useTranslation } from 'react-i18next';
import { Box, Grid } from '@mui/material';
import { UserModel } from '../../../models/UserModels/UserModel';
import useGeneralUserDataForm from '../Hooks/useGeneralUserDataForm';
import { Fragment } from 'react/jsx-runtime';
import { CustomButton, EmptyBox, CustomInput } from '../../../components';

interface UserDataFormProps {
  // eslint-disable-next-line no-unused-vars
  updateUserData: (userData: UserModel) => void;
  handleNextStep: () => void;
  handleStepBack: () => void;
  userData: UserModel;
}

const UserDataForm = ({ updateUserData, handleNextStep, handleStepBack }: UserDataFormProps) => {
  const { t } = useTranslation('commons');
  const { register, errors, handleSubmit, onSubmit, addRole, fields, validateData } =
    useGeneralUserDataForm(updateUserData);

  const handleNextButton = () => {
    validateData()
      .then(valid => {
        if (valid) handleNextStep();
      })
      .catch(() => {});
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid sx={{ columnGap: 2, rowGap: 4 }} container>
          <Grid item sm={6} xs={12}>
            <CustomInput
              placeholder={t('usersPages.userForm.name')}
              size={'large'}
              props={register('names')}
            />
            {errors.names && <span>{errors.names.message}</span>}
          </Grid>
          <Grid item sm={6} xs={12}>
            <CustomInput
              placeholder={t('usersPages.userForm.lastname')}
              size={'large'}
              props={register('lastNames')}
            />
            {errors.lastNames && <span>{errors.lastNames.message}</span>}
          </Grid>

          <Grid item sm={2} xs={12}>
            <CustomInput
              placeholder={t('usersPages.userForm.documentType')}
              size={'large'}
              props={register('documentType')}
            />
            {errors.documentType && <span>{errors.documentType.message}</span>}
          </Grid>
          <Grid item sm={4} xs={12}>
            <CustomInput
              placeholder={t('usersPages.userForm.documentNumber')}
              size={'large'}
              props={register('documentNumber')}
              type="number"
            />
            {errors.documentNumber && <span>{errors.documentNumber.message}</span>}
          </Grid>
          <Grid item sm={6} xs={12}>
            <CustomInput
              placeholder={t('usersPages.userForm.personalPhone')}
              size={'large'}
              props={register('personalPhone')}
            />
            {errors.personalPhone && <span>{errors.personalPhone.message}</span>}
          </Grid>

          <Grid item sm={12} xs={12}>
            <CustomInput
              placeholder={t('usersPages.userForm.email')}
              size={'large'}
              props={register('personalEmail')}
            />
            {errors.personalEmail && <span>{errors.personalEmail.message}</span>}
          </Grid>
          <Grid item sm={12} xs={12}>
            <CustomInput
              placeholder={t('usersPages.userForm.username')}
              size={'large'}
              props={register('username')}
            />
            {errors.username && <span>{errors.username.message}</span>}
          </Grid>
          <Grid item sm={6} xs={12}>
            <CustomInput
              placeholder={t('usersPages.userForm.password')}
              size={'large'}
              props={register('password')}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </Grid>
          <Grid item sm={6} xs={12}>
            <CustomInput
              placeholder={t('usersPages.userForm.password')}
              size={'large'}
              props={register('password')}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </Grid>
          <Grid item sm={6} xs={12}>
            <CustomInput
              placeholder={t('usersPages.userForm.password')}
              size={'large'}
              props={register('state')}
            />
            {errors.state && <span>{errors.state.message}</span>}
          </Grid>
          <Grid item sm={6} xs={12}>
            {fields.map(field => (
              <Fragment key={field.id}>{JSON.stringify(field)}</Fragment>
            ))}
            {errors.roles && <span>{errors.roles.message}</span>}
          </Grid>
          <button
            type="button"
            onClick={() => {
              addRole({
                idRole: 1,
                typeRole: 'consulta de roles',
                permissions: [
                  {
                    idPermission: 100,
                    name: 'ROLE_Listar_Roles',
                    description: 'Permiso para consultar todos los roles en el sistema',
                  },
                ],
              });
            }}
          >
            append
          </button>
        </Grid>

        <EmptyBox height={50} width={10} />

        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <CustomButton content={t('components.stepper.back')} onClick={handleStepBack} />
          <CustomButton
            type="submit"
            content={t('components.stepper.next')}
            onClick={handleNextButton}
            color="info"
          />
        </Box>
      </form>
    </Box>
  );
};

export default UserDataForm;
