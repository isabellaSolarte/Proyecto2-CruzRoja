/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useTranslation } from 'react-i18next';
import CustomInput from '../../../components/Atoms/CustomInput/CustomInput';
import { Box, Grid } from '@mui/material';
import { UserModel } from '../../../models/UserModels/UserModel';
import useGeneralUserDataForm from '../Hooks/useGeneralUserDataForm';
import { Fragment } from 'react/jsx-runtime';

interface UserDataFormProps {
  // eslint-disable-next-line no-unused-vars
  updateUserData: (userData: UserModel) => void;
}

const UserDataForm = ({ updateUserData }: UserDataFormProps) => {
  const { register, errors, handleSubmit, onSubmit, addRole, fields } =
    useGeneralUserDataForm(updateUserData);

  const { t } = useTranslation('commons');
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
                idRole: 0,
                typeRole: 'rol de ejemplo',
                permissions: [{ idPermission: 0, name: 'permiso 1', description: 'para usuarios' }],
              });
            }}
          >
            append
          </button>
        </Grid>

        <input type="submit" />
      </form>
    </Box>
  );
};

export default UserDataForm;
