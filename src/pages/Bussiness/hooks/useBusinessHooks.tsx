import { useState } from 'react';
import { CompanyUserModel } from '../../../models';
import { getCompanies } from '../../../services/AxiosRequests/Users/userRequest';

const useBusinessHooks = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setError] = useState<string | null>(null);
  const [business, setBusiness] = useState<CompanyUserModel[]>([]);

  const loadAllCompanies = async () => {
    setLoading(true);
    try {
      const companies = await getCompanies();
      setBusiness(companies);
    } catch (error) {
      setError(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    business,
    errors,
    loadAllCompanies,
  };
};

export default useBusinessHooks;
