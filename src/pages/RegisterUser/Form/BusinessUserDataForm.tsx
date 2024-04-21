/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useTranslation } from 'react-i18next';
import { Box, Grid } from '@mui/material';
import useBusinessUserDataForm from '../Hooks/useBusinessUserDataForm';
import { BusinessRegisterFormType } from '../types';
import { EmptyBox, CustomButton, CustomInput, CustomSelect } from '../../../components';
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
        <Grid sx={{ columnGap: 2, rowGap: 4 }} container>
          <Grid item sm={6} xs={12}>
            <CustomInput
              placeholder={t('usersPages.userForm.companyName')}
              size={'large'}
              props={register('companyName')}
            />
            {errors.companyName && <span>{errors.companyName.message}</span>}
          </Grid>

          <Grid item sm={6} xs={12}>
            <CustomInput
              placeholder={t('usersPages.userForm.companyNit')}
              size={'large'}
              props={register('companyNit')}
            />
            {errors.companyNit && <span>{errors.companyNit.message}</span>}
          </Grid>

          <Grid item sm={6} xs={12}>
            <CustomInput
              placeholder={t('usersPages.userForm.companyPhone')}
              size={'large'}
              props={register('companyPhone')}
            />
            {errors.companyPhone && <span>{errors.companyPhone.message}</span>}
          </Grid>

          <Grid item sm={6} xs={12}>
            <CustomInput
              placeholder={t('usersPages.userForm.companyEmail')}
              size={'large'}
              props={register('companyEmail')}
            />
            {errors.companyEmail && <span>{errors.companyEmail.message}</span>}
          </Grid>

          <Grid item sm={2} xs={12}>
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

            {errors.address && <span>{errors.address.country?.message}</span>}
          </Grid>

          <Grid item sm={4} xs={12}>
            <CustomSelect
              label={t('address.city')}
              labelId="address.city"
              options={cities}
              control={control}
              disabled={cities.length === 0}
              {...register('address.city')}
            />
            {errors.address && <span>{errors.address.city?.message}</span>}
          </Grid>

          <Grid item sm={6} xs={12}>
            <CustomInput
              placeholder={t('address.neighborhood')}
              size={'large'}
              props={register('address.neighborhood')}
            />
            {errors.address && <span>{errors.address.neighborhood?.message}</span>}
          </Grid>

          <Grid item sm={6} xs={12}>
            <CustomInput
              placeholder={t('address.street')}
              size={'large'}
              props={register('address.street')}
            />
            {errors.address && <span>{errors.address.street?.message}</span>}
          </Grid>

          <Grid item sm={6} xs={12}>
            <CustomInput
              placeholder={t('address.number')}
              size={'large'}
              props={register('address.number')}
            />
            {errors.address && <span>{errors.address.number?.message}</span>}
          </Grid>

          <Grid item sm={6} xs={12}>
            <CustomInput
              placeholder={t('address.floorOrApartment')}
              size={'large'}
              props={register('address.floorOrApartment')}
            />
            {errors.address && <span>{errors.address.floorOrApartment?.message}</span>}
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
