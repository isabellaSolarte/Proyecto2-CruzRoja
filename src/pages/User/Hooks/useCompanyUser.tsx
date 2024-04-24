import { useEffect, useState } from 'react';
import { CompanyUserModel } from '../../../models/UserModels/CompanyUserModel';
import { getCompanies } from '../../../services';
import CompanyUserType from '../types/CompanyUserType';

const useCompanyUser = () => {
    const [companyUsers, setCompanyUsers] = useState<CompanyUserModel[]>([]);
    const [loadingcompanyUsers, setLoadingcompanyUsers] = useState<boolean>(false);
    const [companyUserInfo, setCompanyUserInfo] = useState<CompanyUserType[]>([]);

    const updateCompanyUserInfo = (updatedCompanyUsers: CompanyUserModel[]) => {
        const mappedCompanyUsers = mapCompanyUsersToInfo(updatedCompanyUsers);
        setCompanyUserInfo(mappedCompanyUsers);
    }

    const mapCompanyUsersToInfo = (companyUsersData: CompanyUserModel[]): CompanyUserType[] => {
        return companyUsersData.map((companyUser) => {
            const rolesString = companyUser.roles.map((role) => role.typeRole as string).join(', ');
            return {
                id: companyUser.id,
                names: companyUser.names,
                companyName: companyUser.companyName,
                roles: rolesString,
                switchState: companyUser.state,
            };
        });
    }

    const fetchCompanyUsers = async () => {
        setLoadingcompanyUsers(true);
        try {
            const CompaniesData = await getCompanies(); // Reemplaza con la URL correcta de tu API
            setCompanyUsers(CompaniesData);
            console.log('Usuarios de la empresa:', CompaniesData);
            const mappedCompanyUsers = mapCompanyUsersToInfo(CompaniesData);
            setCompanyUserInfo(mappedCompanyUsers);
            console.log('Información de los usuarios de la empresa:', mappedCompanyUsers);
        } catch (error) {
            console.error('Error al obtener los usuarios de la empresa:', error);
        }
        setLoadingcompanyUsers(false);
    };
    useEffect(() => {

        void fetchCompanyUsers();

        return () => {
            // Cleanup if needed
        };
    }, []);

    return {companyUsers, setCompanyUsers, loadingcompanyUsers, companyUserInfo, updateCompanyUserInfo};
};

export default useCompanyUser;