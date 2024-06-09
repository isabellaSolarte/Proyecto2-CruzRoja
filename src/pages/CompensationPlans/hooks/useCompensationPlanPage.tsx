import { useEffect, useState } from "react";
import { getAllPersonalPlans, getAllPlans, postAcquiredPlan } from "../../../services/AxiosRequests/Plans/PlanRequests";
import { CompensationPlanModel } from '../../../models/CompensationPlan/CompensationPlanModel';
import { getCompanies } from "../../../services";
import { CompanyUserModel } from "../../../models";
import {userAtom} from '../../../recoil/Login/States';
import { useRecoilState } from "recoil";
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';


export const useCompensationPlanPage = () => {
    const { t } = useTranslation('commons');
    const [loadingPlan, setLoadingPlan] = useState(true);
    const [loadingPersonalPlan, setLoadingPersonalPlan] = useState(true);
    const [loadingCompanies, setLoadingCompanies] = useState(true);
    const [compensationPlans, setCompensationPlans] = useState<CompensationPlanModel[]>([]);
    const [personalCompensationPlans, setPersonalCompensationPlans] = useState<CompensationPlanModel[]>([]);
    const [companies, setCompanies] = useState<CompanyUserModel[]>([]);
    const [errorPlan, setErrorPlan] = useState<string | null>(null);
    const [errorCompanies, setErrorCompanies] = useState<string | null>(null);
    const [errorPersonalPlan, setErrorPersonalPlan] = useState<string | null>(null);
    const [user, setUser] = useRecoilState(userAtom);

    const fetchCompensationPlan = async () => {
        try {
            const compensationPlanData = await getAllPlans();
            if (Array.isArray(compensationPlanData) && compensationPlanData.length > 0) {
                const adaptedCompensationPlans = compensationPlanData.map((compensationPlan) => ({
                    id: compensationPlan.id,
                    name: compensationPlan.name,
                    description: compensationPlan.description,
                    price: compensationPlan.price,
                    discount: compensationPlan.discount,
                    actions: compensationPlan.actions,
                    ufpCompensation: compensationPlan.ufpCompensation,
                    total: compensationPlan.price - (compensationPlan.price * (compensationPlan.discount / 100))
                }));
                setCompensationPlans(adaptedCompensationPlans);
                setErrorPlan(null);
            } 
            else {
                setCompensationPlans([]);
                setErrorPlan("No se encontraron los planes de compensacion en la base de datos.");
            }
        } 
        catch (error) {
            setErrorPlan("No se pueden obtener los planes de compensacion en este momento. Por favor, inténtalo de nuevo más tarde.");
        } finally {
            setLoadingPlan(false);
        }
    };

    const fetchPersonalCompensationPlan = async () => {
        try {
            const compensationPlanData = await getAllPersonalPlans(Number(user?.id));
            if (Array.isArray(compensationPlanData) && compensationPlanData.length > 0) {
                const adaptedCompensationPlans = compensationPlanData.map((compensationPlan) => ({
                    id: compensationPlan.id,
                    name: compensationPlan.name,
                    description: compensationPlan.description,
                    price: compensationPlan.price,
                    discount: compensationPlan.discount,
                    actions: compensationPlan.actions,
                    ufpCompensation: compensationPlan.ufpCompensation,
                    total: compensationPlan.price - (compensationPlan.price * (compensationPlan.discount / 100))
                }));
                setPersonalCompensationPlans(adaptedCompensationPlans);
                setErrorPersonalPlan(null);
            } 
            else {
                setPersonalCompensationPlans([]);
                setErrorPersonalPlan("No se encontraron los planes de compensacion en la base de datos.");
            }
        } 
        catch (error) {
            setErrorPersonalPlan("No se pueden obtener los planes de compensacion en este momento. Por favor, inténtalo de nuevo más tarde.");
        } finally {
            setLoadingPersonalPlan(false);
        }
    };

    const fetchCompanies = async () => {
        try {
            const companiesData = await getCompanies();
            if (Array.isArray(companiesData) && companiesData.length > 0) {
                const adaptedCompanies = companiesData.map((company) => ({
                    label: company.companyName,
                    value: company.companyNit,
                }));
                setCompanies(adaptedCompanies);
                setErrorCompanies(null);
            } 
            else {
                setCompanies([]);
                setErrorCompanies("No se encontraron compañías en la base de datos.");
            }
        } 
        catch (error) {
            setErrorCompanies("No se pueden obtener las compañías en este momento. Por favor, inténtalo de nuevo más tarde.");
        } finally {
            setLoadingCompanies(false);
        }
    };

    const hasPermission = (permissionId: number) =>{
        return user?.roles.some(role => 
            role.permissions.some(permission => permission.id === permissionId)
        );
    }

    const updateCompensationPlanInfo = (updatedCompensationPlans: CompensationPlanModel[]) => {
        setCompensationPlans(updatedCompensationPlans);
    };

    const onSubmit = async (companyPlan: any) => {
        console.log(companyPlan);
        
        try {
            await postAcquiredPlan(companyPlan);
            void Swal.fire({
                title: t('alertText.correctOperation'),
                text: t('alertText.acquiredPlan'),
                icon: 'success',
                confirmButtonText: t('generalButtonText.accept'),
            });
        } catch (error: any) {
            console.error("Error posting acquired plan:", error); // Add more error logging here
            void Swal.fire({
                title: t('alertText.error'),
                text: t('alertText.errorDescription'),
                icon: 'error',
                confirmButtonText: t('generalButtonText.accept'),
            });
        }
    };

    useEffect(() => {
        void fetchCompensationPlan();
        void fetchPersonalCompensationPlan();
        void fetchCompanies();
    }, []);

    return {
        compensationPlans,
        personalCompensationPlans,
        companies,
        loadingPlan,
        loadingPersonalPlan,
        loadingCompanies,
        errorPlan,
        errorPersonalPlan,
        errorCompanies,
        user,
        onSubmit,
        fetchCompensationPlan,
        fetchPersonalCompensationPlan,
        fetchCompanies,
        hasPermission,
        updateCompensationPlanInfo
    };
}