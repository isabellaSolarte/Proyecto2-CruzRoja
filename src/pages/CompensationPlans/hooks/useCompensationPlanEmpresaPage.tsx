import { useEffect, useState } from "react";
import { getAllPlans, postAcquiredPlan } from "../../../services/AxiosRequests/Plans/PlanRequests";
import { CompensationPlanModel } from '../../../models/CompensationPlan/CompensationPlanModel';
import { getCompayUserById } from "../../../services";
import { CompanyUserModel } from "../../../models";
import {userAtom} from '../../../recoil/Login/States';
import { useRecoilState } from "recoil";
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';


export const useCompensationPlanEmpresaPage = () => {
    const { t } = useTranslation('commons');
    const [loadingPlan, setLoadingPlan] = useState(true);
    const [loadingAcquiredPlan, setLoadingAcquiredPlan] = useState(true);
    const [loadingCompany, setLoadingCompany] = useState(true);
    const [compensationPlans, setCompensationPlans] = useState<CompensationPlanModel[]>([]);
    const [acquiredCompensationPlans, setAcquiredCompensationPlans] = useState<CompensationPlanModel[]>([]);
    const [company, setCompany] = useState<CompanyUserModel[]>([]);
    const [errorPlan, setErrorPlan] = useState<string | null>(null);
    const [errorAcquiredPlan, setErrorAcquiredPlan] = useState<string | null>(null);
    const [errorCompany, setErrorCompany] = useState<string | null>(null);
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

    const fetchAcquiredCompensationPlan = async () => {
        try {
            const acquiredCompensationPlanData = await getAcquiredPlans();
            if (Array.isArray(acquiredCompensationPlanData) && acquiredCompensationPlanData.length > 0) {
                const adaptedAcquiredCompensationPlans = acquiredCompensationPlanData.map((acquiredCompensationPlan) => ({
                    id: acquiredCompensationPlan.id,
                    name: acquiredCompensationPlan.name,
                    description: acquiredCompensationPlan.description,
                    price: acquiredCompensationPlan.price,
                    discount: acquiredCompensationPlan.discount,
                    actions: acquiredCompensationPlan.actions,
                    ufpCompensation: acquiredCompensationPlan.ufpCompensation,
                    total: acquiredCompensationPlan.price - (acquiredCompensationPlan.price * (acquiredCompensationPlan.discount / 100))
                }));
                setAcquiredCompensationPlans(adaptedAcquiredCompensationPlans);
                setErrorAcquiredPlan(null);
            } 
            else {
                setAcquiredCompensationPlans([]);
                setErrorAcquiredPlan("No se encontraron los planes de compensacion en la base de datos.");
            }
        } 
        catch (error) {
            setErrorAcquiredPlan("No se pueden obtener los planes de compensacion en este momento. Por favor, inténtalo de nuevo más tarde.");
        } finally {
            setLoadingAcquiredPlan(false);
        }
    };


    const getCompany = async () => {
        try {
            const companyData = await getCompayUserById(Number(user?.id));
            
            const adaptedCompany = {
                name: companyData.names,
                nit: companyData.companyNit
            }
            setCompany(adaptedCompany);
            setErrorCompany(null);
        } 
        catch (error) {
            setErrorCompany("No se pueden obtener las compañías en este momento. Por favor, inténtalo de nuevo más tarde.");
        } finally {
            setLoadingCompany(false);
        }
    };

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
        void fetchAcquiredCompensationPlan();
        void getCompany();
    }, []);


    return {
        compensationPlans,
        acquiredCompensationPlans,
        company,
        loadingPlan,
        loadingAcquiredPlan,
        loadingCompany,
        errorPlan,
        errorAcquiredPlan,
        errorCompany,
        user,
        onSubmit,
        fetchCompensationPlan,
        fetchAcquiredCompensationPlan,
        getCompany,
        updateCompensationPlanInfo
    };
}