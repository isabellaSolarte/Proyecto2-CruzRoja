import { CompanyUserModel } from '../../../models/UserModels/CompanyUserModel';

type CompanyUserType = Pick<CompanyUserModel, 'id' | 'names' | 'companyName'> & {
    roles: string;
    switchState: boolean;
};

export default CompanyUserType;