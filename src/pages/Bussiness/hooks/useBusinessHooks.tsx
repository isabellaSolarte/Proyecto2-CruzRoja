import { useState } from 'react';
import { CompanyUserModel } from '../../../models';
import { getCompanies } from '../../../services/AxiosRequests/Users/userRequest';

const useBusinessHooks = () => {
  const [business, setBusiness] = useState<CompanyUserModel[]>([]);

  const loadAllCompanies = async () => {
    try {
      const companies = await getCompanies();
      console.log(companies);
      setBusiness(companies);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    business,
    loadAllCompanies,
  };
};

export default useBusinessHooks;
