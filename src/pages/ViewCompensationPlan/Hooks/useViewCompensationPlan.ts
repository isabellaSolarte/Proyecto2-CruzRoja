import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PathNames } from '../../../core';
import {
  getCompensationPlanById,
  postAcquiredPlan,
} from '../../../services/AxiosRequests/Plans';
import { CompensationPlanModel } from '../../../models/CompensationPlan/CompensationPlanModel';
import { defaultCompensationPlan } from '../../CreateCompensationPlan/schemas/CompensationPlanSchema';
import { getCompanies, getVolunteerById } from '../../../services';
import { allowedPagesBaseOnPermissions } from '../../../utils';
import { CompanyUserModel, UserModel } from '../../../models';
import { getActionById } from '../../../services/AxiosRequests/Actions';
import { ActionsModel } from '../../../models/Actions';
import { userAtom } from '../../../recoil/Login/States';
import { useRecoilState } from 'recoil';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';

const useViewCompensationPlan = () => {
  const [loading, setLoading] = useState(true);
  const [currentPlan, setCurrentPlan] = useState<CompensationPlanModel>(
    defaultCompensationPlan,
  );
  const { t } = useTranslation('commons');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentActionsPlan, setCurrentActionsPlan] = useState<any[]>();
  const [actionSelect, setActionSelect] = useState<ActionsModel>();

  const [idAction, setIdAction] = useState<number>();

  const [user, setUser] = useRecoilState(userAtom);
  const [companies, setCompanies] = useState<CompanyUserModel[]>([]);
  interface FlagCompany {
    companyId: number;
    planId: number;
    vendedorId: number;
  }
  let flagCompany: FlagCompany = {
    companyId: 0,
    planId: 0,
    vendedorId: 0,
  };

  let allowed;

  const fetchPlan = async () => {
    try {
      let userV;
      const plan = await getCompensationPlanById(Number(id));
      const idUser = plan.volunterId;
      if (typeof idUser === 'number') {
        userV = await getVolunteerById(idUser);
      }
      allowed = allowedPagesBaseOnPermissions(userV as UserModel, 1005);
      setCurrentPlan(plan);
      setCurrentActionsPlan(plan.actions);
      console.log('PLAN' + JSON.stringify(plan));
    } catch (error) {
      setError(
        'No se pueden obtener el en este momento. Por favor, inténtalo de nuevo más tarde.',
      );
      console.error('Error fetching plan:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = () => {
    navigate(PathNames.EDIT_PLAN.replace(':id', id?.toString() || ''), {
      replace: true,
    });
  };
  const handleAcquire = () => {
    navigate(PathNames.EDIT_PLAN.replace(':id', id?.toString() || ''), {
      replace: true,
    });
  };
  const fetchActionById = async (id: number) => {
    try {
      const actionData = await getActionById(id);
      setActionSelect(actionData);
      setError(null);
    } catch (error) {
      setError(
        'No se puede obtener la acción en este momento. Por favor, inténtalo de nuevo más tarde.',
      );
      console.error('Error fetching action by ID:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCompanies = async () => {
    try {
      const companiesData = await getCompanies();
      if (Array.isArray(companiesData) && companiesData.length > 0) {
        const adaptedCompanies = companiesData.map(company => ({
          label: company.companyName,
          value: company.companyNit,
        }));
        setCompanies(adaptedCompanies);
      } else {
        setCompanies([]);
      }
    } catch (error) {
    } finally {
    }
  };

  const onSubmit = async (companyPlan: any) => {
    companyPlan.planId = currentPlan.id;
    try {
      await postAcquiredPlan(companyPlan);
      void Swal.fire({
        title: t('alertText.correctOperation'),
        text: t('alertText.acquiredPlan'),
        icon: 'success',
        confirmButtonText: t('generalButtonText.accept'),
      });
    } catch (error: any) {
      console.error('Error posting acquired plan:', error); // Add more error logging here
      void Swal.fire({
        title: t('alertText.error'),
        text: t('alertText.errorDescription'),
        icon: 'error',
        confirmButtonText: t('generalButtonText.accept'),
      });
    }
  };

  useEffect(() => {
    if (idAction !== undefined) {
      fetchActionById(idAction);
    }
  }, [idAction]);

  useEffect(() => {
    console.log('Updated action:', actionSelect);
  }, [actionSelect]);
  return {
    currentPlan,
    currentActionsPlan,
    loading,
    fetchPlan,
    error,
    handleEdit,
    handleAcquire,
    allowed,
    fetchActionById,
    actionSelect,
    setIdAction,
    user,
    onSubmit,
    companies,
    fetchCompanies,
  };
};

export default useViewCompensationPlan;
