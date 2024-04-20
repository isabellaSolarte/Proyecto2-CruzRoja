/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useTranslation } from 'react-i18next';
import CustomInput from '../../../components/Atoms/CustomInput/CustomInput';
import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import { Box, Grid } from '@mui/material';
import CustomButton from '../../../components/Atoms/CustomButton/CustomButton';

interface UserDataFormProps {
  // eslint-disable-next-line no-unused-vars
  register: UseFormRegister<{
    address: {
      number: string;
      street: string;
      floorOrApartment: string;
      neighborhood: string;
      city: string;
      country: string;
    };
    companyNit: number;
    companyName: string;
    companyPhone: string;
    companyEmail: string;
  }>;
  errors: FieldErrors<{
    address: {
      number: string;
      street: string;
      floorOrApartment: string;
      neighborhood: string;
      city: string;
      country: string;
    };
    companyNit: number;
    companyName: string;
    companyPhone: string;
    companyEmail: string;
  }>;
  handleSubmit: UseFormHandleSubmit<{
    address: {
      number: string;
      street: string;
      floorOrApartment: string;
      neighborhood: string;
      city: string;
      country: string;
    };
    companyNit: number;
    companyName: string;
    companyPhone: string;
    companyEmail: string;
  }>;
  // eslint-disable-next-line no-unused-vars
  onSubmit: (data: unknown) => Promise<void>;
}

const BusinessUserDataForm = ({ register, errors, handleSubmit, onSubmit }: UserDataFormProps) => {
  const { t } = useTranslation('commons');
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
            <CustomInput
              placeholder={t('address.country')}
              size={'large'}
              props={register('address.country')}
            />
            {errors.address && <span>{errors.address.country?.message}</span>}
          </Grid>
          <Grid item sm={4} xs={12}>
            <CustomInput
              placeholder={t('address.city')}
              size={'large'}
              props={register('address.city')}
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

        <CustomButton
          type="submit"
          variant="contained"
          color="primary"
          content={'validar'}
          onClick={() => {}}
        />
      </form>
    </Box>
  );
};

export default BusinessUserDataForm;
