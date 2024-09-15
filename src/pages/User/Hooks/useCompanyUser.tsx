import { useEffect, useState } from 'react';
import { CompanyUserModel } from '../../../models/UserModels/CompanyUserModel';
import { getCompanies } from '../../../services';
import CompanyUserType from '../types/CompanyUserType';
import { set } from 'react-hook-form';

const useCompanyUser = () => {
  const [companyUsers, setCompanyUsers] = useState<CompanyUserModel[]>([]);
  const [loadingcompanyUsers, setLoadingcompanyUsers] = useState<boolean>(false);
  const [errorCompanyUsers, setError] =useState<string | null>(null);
  const [companyUserInfo, setCompanyUserInfo] = useState<CompanyUserType[]>([]);

  const updateCompanyUserInfo = (updatedCompanyUsers: CompanyUserModel[]) => {
    const mappedCompanyUsers = mapCompanyUsersToInfo(updatedCompanyUsers);
    setCompanyUserInfo(mappedCompanyUsers);
  };

  const mapCompanyUsersToInfo = (companyUsersData: CompanyUserModel[]): CompanyUserType[] => {
    return companyUsersData.map(companyUser => {
      const rolesString = companyUser.roles.map(role => role.typeRole as string).join(', ');
      return {
        id: companyUser.id,
        names: companyUser.names,
        companyName: companyUser.companyName,
        roles: rolesString,
        switchState: companyUser.state,
      };
    });
  };

  const fetchCompanyUsers = async () => {
    setLoadingcompanyUsers(true);
    try {
      const CompaniesData = await getCompanies();
      setCompanyUsers(CompaniesData);
      const mappedCompanyUsers = mapCompanyUsersToInfo(CompaniesData);
      setCompanyUserInfo(mappedCompanyUsers);
      setError(null);
    } catch (error) {
      console.error('Error al obtener los usuarios de la empresa:', error);
      setError(error.response.data.message);
    }
    setLoadingcompanyUsers(false);
  };
  useEffect(() => {
    void fetchCompanyUsers();

    return () => {
      // Cleanup if needed
    };
  }, []);

  return {
    companyUsers,
    setCompanyUsers,
    loadingcompanyUsers,
    companyUserInfo,
    updateCompanyUserInfo,
    errorCompanyUsers,
  };
};

export default useCompanyUser;
