/* eslint-disable no-unused-vars */
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { defaulBusinessUserSchema, businessUserSchemaValidation } from '../schemas';
import { BusinessRegisterFormType } from '../types';
import {
  getAllCitiesFromCountry,
  getCountries,
} from '../../../services/AxiosRequests/ExternalAPIs';
import { useState } from 'react';
import { OptionSelector } from '../../../models';

const useBusinessUserDataForm = (
  updateUserData: (newUserData: BusinessRegisterFormType) => void,
) => {
  const [countryList, setCountryList] = useState<OptionSelector[]>([]);
  const [currentSelectedCountry, setCurrentSelectedCountry] = useState<string | null>();
  const [cities, setCities] = useState<OptionSelector[]>([]);

  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
    control,
  } = useForm({
    defaultValues: defaulBusinessUserSchema,
    resolver: yupResolver(businessUserSchemaValidation),
  });

  const onSubmit = async (data: BusinessRegisterFormType) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    updateUserData(data);
  };

  const validateData = (): Promise<boolean> => {
    const valid = businessUserSchemaValidation
      .validate(getValues())
      .then(() => {
        updateUserData(getValues());
        return true;
      })
      .catch(() => false);
    return valid;
  };

  const loadCountries = async () => {
    const countriesResponse = await getCountries();
    setCountryList(countriesResponse);
  };

  const loadCities = async (country: string) => {
    const citiesResponse = await getAllCitiesFromCountry(country);
    setCities(citiesResponse);
  };

  const updateSelectedCountry = (country: string) => {
    setCurrentSelectedCountry(country);
  };

  return {
    handleSubmit,
    getValues,
    register,
    onSubmit,
    validateData,
    loadCountries,
    loadCities,
    updateSelectedCountry,
    errors,
    countryList,
    control,
    cities,
    currentSelectedCountry,
  };
};

export default useBusinessUserDataForm;
