/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Box, Grid } from '@mui/material';
import { UserModel } from '../../../models/UserModels/UserModel';
import useGeneralUserDataForm from '../Hooks/useGeneralUserDataForm';
import {
  CustomButton,
  EmptyBox,
  CustomSelect,
  LabeledInput,
  CustomText,
  ErrorText,
} from '../../../components';
import { useEffect } from 'react';
import { RoleCard } from '../Components';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
interface UserDataFormProps {
  // eslint-disable-next-line no-unused-vars
  updateUserData: (userData: UserModel) => void;
  handleNextStep: () => void;
  handleStepBack: () => void;
  userData: UserModel;
}

const UserDataForm = ({ updateUserData, handleNextStep, handleStepBack }: UserDataFormProps) => {
  const {
    register,
    handleSubmit,
    onSubmit,
    addRole,
    validateData,
    loadRoles,
    remove,
    errors,
    roleList,
    documents,
    control,
    t,
  } = useGeneralUserDataForm(updateUserData);

  const handleNextButton = () => {
    validateData()
      .then(valid => {
        if (valid) handleNextStep();
      })
      .catch(() => {});
  };

  useEffect(() => {
    void loadRoles();
  }, []);

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <Grid item xs={12} paddingTop={3}>
            <CustomText texto={'Información personal'} variante={'subtitulo'} />
          </Grid>

          <Grid item sm={6} xs={12} padding={2}>
            <LabeledInput
              label={t('usersPages.userForm.name')}
              placeholder={t('usersPages.userForm.name')}
              mandatory
              type="text"
              props={register('names')}
            />
            {errors.names && <ErrorText error={errors.names.message} />}
          </Grid>
          <Grid item sm={6} xs={12} padding={2}>
            <LabeledInput
              label={t('usersPages.userForm.lastname')}
              placeholder={t('usersPages.userForm.lastname')}
              mandatory
              type="text"
              props={register('lastNames')}
            />
            {errors.lastNames && <ErrorText error={errors.lastNames.message} />}
          </Grid>

          <Grid item sm={6} xs={12} padding={2}>
            <CustomText texto={'Documento'} variante={'texto'} color={'#fff'} />
            <CustomSelect
              label={t('usersPages.userForm.documentType')}
              labelId="documentType"
              options={documents}
              control={control}
              {...register('documentType')}
            />
            {errors.documentType && <ErrorText error={errors.documentType.message} />}
          </Grid>

          <Grid item sm={6} xs={12} padding={2}>
            <LabeledInput
              label={t('usersPages.userForm.documentNumber')}
              placeholder={t('usersPages.userForm.documentNumber')}
              mandatory
              type="number"
              props={register('documentNumber')}
              icon={<BadgeOutlinedIcon />}
            />
            {errors.documentNumber && <ErrorText error={errors.documentNumber.message} />}
          </Grid>

          <Grid item xs={12} paddingTop={3}>
            <CustomText texto={'Información de contacto'} variante={'subtitulo'} />
          </Grid>

          <Grid item sm={6} xs={12} padding={2}>
            <LabeledInput
              label={t('usersPages.userForm.personalPhone')}
              placeholder={t('usersPages.userForm.personalPhone')}
              mandatory
              type="text"
              props={register('personalPhone')}
            />
            {errors.personalPhone && <ErrorText error={errors.personalPhone.message} />}
          </Grid>

          <Grid item sm={6} xs={12} padding={2}>
            <LabeledInput
              label={t('usersPages.userForm.email')}
              placeholder={t('usersPages.userForm.email')}
              mandatory
              type="email"
              props={register('personalEmail')}
            />
            {errors.personalEmail && <ErrorText error={errors.personalEmail.message} />}
          </Grid>

          <Grid item xs={12} paddingTop={3}>
            <CustomText texto={'Datos de usuario'} variante={'subtitulo'} />
          </Grid>
          <Grid item sm={12} xs={12} padding={2}>
            <LabeledInput
              label={t('usersPages.userForm.username')}
              placeholder={t('usersPages.userForm.username')}
              mandatory
              type="text"
              props={register('username')}
            />
            {errors.username && <ErrorText error={errors.username.message} />}
          </Grid>

          <Grid item sm={12} xs={12} padding={2}>
            <LabeledInput
              label={t('usersPages.userForm.password')}
              placeholder={t('usersPages.userForm.password')}
              mandatory
              type="password"
              props={register('password')}
            />
            {errors.password && <ErrorText error={errors.password.message} />}
          </Grid>

          <Grid item sm={12} xs={12} padding={2}>
            <LabeledInput
              label={t('usersPages.userForm.passwordConfirmation')}
              placeholder={t('usersPages.userForm.passwordConfirmation')}
              mandatory
              type="password"
            />
          </Grid>

          <Grid item xs={12} paddingTop={3}>
            <CustomText texto={'Niveles de acceso'} variante={'subtitulo'} />
          </Grid>
          <Grid item sm={12} xs={12} padding={2}>
            <CustomText
              texto={'Para seleccionar un rol active el boton switch a la derecha.'}
              variante={'texto'}
            />
            {roleList.map((rol, index) => (
              <RoleCard
                key={rol.idRole}
                rol={rol}
                positiveAction={addRole}
                negativeAction={() => {
                  remove(index);
                }}
              />
            ))}
            {errors.roles && <ErrorText error={errors.roles.message} />}
          </Grid>
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
