/* eslint-disable @typescript-eslint/use-unknown-in-catch-callback-variable */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useTranslation } from 'react-i18next';
import { Box, Grid } from '@mui/material';
import useBusinessUserDataForm from '../Hooks/useBusinessUserDataForm';
import { BusinessRegisterFormType } from '../types';
import {
  EmptyBox,
  CustomButton,
  CustomSelect,
  ErrorText,
  LabeledInput,
  CustomText,
} from '../../../components';
import { useEffect } from 'react';

interface UserDataFormProps {
  updateUserData: (userData: BusinessRegisterFormType) => void;
  handleNextStep: () => void;
  handleStepBack: () => void;
}

const BusinessUserDataForm = ({
  updateUserData,
  handleNextStep,
  handleStepBack,
}: UserDataFormProps) => {
  const { t } = useTranslation('commons');
  const {
    register,
    handleSubmit,
    onSubmit,
    validateData,
    loadCountries,
    loadCities,
    updateSelectedCountry,
    countryList,
    currentSelectedCountry,
    cities,
    control,
    errors,
  } = useBusinessUserDataForm(updateUserData);

  const handleNextButton = () => {
    validateData()
      .then(valid => {
        if (valid) handleNextStep();
      })
      .catch(() => {});
  };

  /** CARGAR LOS PAISES EN LA PRIMERA CARGA DE LA VISTA */
  useEffect(() => {
    void loadCountries();
  }, []);

  /** CARGAR LAS CIUDADES DEL PAIS SELECCIONADO */
  useEffect(() => {
    if (currentSelectedCountry) void loadCities(currentSelectedCountry);
  }, [currentSelectedCountry]);

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <Grid item xs={12} paddingTop={3}>
            <CustomText texto={'Datos de la empresa'} variante={'subtitulo'} />
          </Grid>

          <Grid item padding={2} sm={6} xs={12}>
            <LabeledInput
              label={t('usersPages.userForm.companyName')}
              placeholder={t('usersPages.userForm.companyName')}
              props={register('companyName')}
              type={'text'}
              mandatory
            />
            {errors.companyName && (
              <ErrorText error={errors.companyName.message} formErrorKey="userFormErrors" />
            )}
          </Grid>

          <Grid item padding={2} sm={6} xs={12}>
            <LabeledInput
              label={t('usersPages.userForm.companyNit')}
              placeholder={t('usersPages.userForm.companyNit')}
              props={register('companyNit')}
              type={'number'}
              mandatory
            />
            {errors.companyNit && (
              <ErrorText error={errors.companyNit.message} formErrorKey="userFormErrors" />
            )}
          </Grid>

          <Grid item padding={2} sm={6} xs={12}>
            <LabeledInput
              label={t('usersPages.userForm.companyPhone')}
              placeholder={t('usersPages.userForm.companyPhone')}
              props={register('companyPhone')}
              type={'text'}
              mandatory
            />
            {errors.companyPhone && (
              <ErrorText formErrorKey="userFormErrors" error={errors.companyPhone.message} />
            )}
          </Grid>

          <Grid item padding={2} sm={6} xs={12}>
            <LabeledInput
              label={t('usersPages.userForm.companyEmail')}
              placeholder={t('usersPages.userForm.companyEmail')}
              props={register('companyEmail')}
              type={'email'}
              mandatory
            />
            {errors.companyEmail && (
              <ErrorText formErrorKey="userFormErrors" error={errors.companyEmail.message} />
            )}
          </Grid>

          <Grid item xs={12} paddingTop={5}>
            <CustomText texto={'Datos de ubicación'} variante={'subtitulo'} />
          </Grid>

          {/* <Grid item padding={2} paddingTop={0} sm={6} xs={12}>
            <CustomText texto={'Documento'} variante={'texto'} color={'#fff'} />
            <CustomSelect
              label={t('address.country')}
              labelId="address.country"
              options={countryList}
              control={control}
              onChangeAction={(value: string) => {
                updateSelectedCountry(value);
              }}
              {...register('address.country')}
            />
            {errors.address && <ErrorText error={errors.address.country?.message} />}
          </Grid> */}

          <Grid item padding={2} paddingTop={0} sm={6} xs={12}>
            <CustomText texto={'Documento'} variante={'texto'} color={'#fff'} />
            <CustomSelect
              label={t('address.country')}
              labelId="address.country"
              options={countryList}
              control={control}
              onChangeAction={(value: string) => {
                updateSelectedCountry(value);
              }}
              {...register('address.country')}
            />
            {/* {errors.address && <ErrorText error={errors.address.country?.message} />} */}
          </Grid>

          <Grid item padding={2} paddingTop={0} sm={6} xs={12}>
            <CustomText texto={'Documento'} variante={'texto'} color={'#fff'} />
            <CustomSelect
              label={t('address.city')}
              labelId="address.city"
              options={cities}
              control={control}
              disabled={cities.length === 0}
              {...register('address.city')}
            />
            {/* {errors.address && <ErrorText error={errors.address.city?.message} />} */}
          </Grid>

          <Grid item padding={2} sm={6} xs={12}>
            <LabeledInput
              label={t('address.neighborhood')}
              placeholder={t('address.neighborhood')}
              mandatory
              type="text"
              props={register('address.neighborhood')}
            />
            {errors.address && (
              <ErrorText
                formErrorKey="userFormErrors"
                error={errors.address.neighborhood?.message}
              />
            )}
          </Grid>

          <Grid item padding={2} sm={6} xs={12}>
            <LabeledInput
              label={t('address.street')}
              placeholder={t('address.street')}
              mandatory
              type="text"
              props={register('address.street')}
            />
            {errors.address && (
              <ErrorText error={errors.address.street?.message} formErrorKey="userFormErrors" />
            )}
          </Grid>

          <Grid item padding={2} sm={6} xs={12}>
            <LabeledInput
              label={t('address.number')}
              placeholder={t('address.number')}
              mandatory
              type="text"
              props={register('address.number')}
            />
            {errors.address && (
              <ErrorText error={errors.address.number?.message} formErrorKey="userFormErrors" />
            )}
          </Grid>

          <Grid item padding={2} sm={6} xs={12}>
            <LabeledInput
              label={t('address.floorOrApartment')}
              placeholder={t('address.floorOrApartment')}
              mandatory
              type="text"
              props={register('address.floorOrApartment')}
            />
            {errors.address && (
              <ErrorText
                error={errors.address.floorOrApartment?.message}
                formErrorKey="userFormErrors"
              />
            )}
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

export default BusinessUserDataForm;
