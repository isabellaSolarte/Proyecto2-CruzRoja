import { useFieldArray, useForm } from 'react-hook-form';
import { CompensationPlanModel } from '../../../models/CompensationPlan/CompensationPlanModel';
import { yupResolver } from '@hookform/resolvers/yup';
import { CompensationPlanSchema } from '../schemas';
import { CompensationPlanActionModel } from '../../../models/Actions';
import { useMemo, useState } from 'react';
import {
  getCompensationPlanById,
  postCompensationPlan,
  putCompensationPlan,
} from '../../../services/AxiosRequests/Plans/PlanRequests';
import Swal from 'sweetalert2';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { PathNames } from '../../../core';
import { defaultCompensationPlan } from '../schemas/CompensationPlanSchema';
import { useUserActions } from '../../../recoil';

const useCreateCompensationPlan = () => {
  const { getLoggedUser } = useUserActions();
  const path = useLocation().pathname;
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentPlan, setCurrentPlan] = useState<CompensationPlanModel>(
    defaultCompensationPlan,
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [actionsSelected, setActionsSelected] = useState<{
    actions: CompensationPlanActionModel[];
    totalUfp: number;
    totalPrice: number;
  }>({ actions: [], totalUfp: 0, totalPrice: 0 });

  const {
    getValues,
    setValue,
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<CompensationPlanModel>({
    defaultValues: useMemo(() => currentPlan, [id, currentPlan]),
    resolver: yupResolver(CompensationPlanSchema),
  });

  const { append, fields, remove, update } = useFieldArray({
    control: control,
    name: 'actions',
  });

  const getTotalUfp = (actions: CompensationPlanActionModel[]) => {
    return actions.reduce((acc, action) => acc + action.totalActionUfp, 0);
  };

  const generateInitalPlanState = async () => {
    setIsLoading(true);
    if (!id) {
      setCurrentPlan(defaultCompensationPlan);
      setIsLoading(false);
      return;
    }
    try {
      const plan = await getCompensationPlanById(Number(id));
      setCurrentPlan(plan);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: `Ocurrió un error al obtener el plan de compensación`,
      }).then(() => {
        navigate(PathNames.PLANS, { replace: true });
      });
    } finally {
      setIsLoading(false);
    }
  };

  const updateAction = (index: number, action: CompensationPlanActionModel) => {
    update(index, action);
  };

  const updateActions = (actions: CompensationPlanActionModel[]) => {
    actions.forEach(action => {
      const index = fields.findIndex(
        field => field.action.id === action.action.id,
      );
      if (index === -1) append(action);
      else update(index, action);
    });
  };

  const addAction = (action: CompensationPlanActionModel) => {
    append(action);
  };

  const addAllActions = (actions: CompensationPlanActionModel[]) => {
    actions.forEach(action => {
      append(action);
    });
  };

  const removeAction = (index: number) => {
    remove(index);
  };

  const updateSelectedBusiness = (businessName: string) => {
    setValue(
      'name',
      `${
        getValues('name').length === 0
          ? 'Nombre del nuevo plan'
          : getValues('name')
      }_${businessName}_${new Date().getTime()}`,
    );
  };

  const onSubmit = async (data: CompensationPlanModel) => {
    try {
      setIsLoading(true);

      if (!id) {
        await postCompensationPlan(
          data,
          path.includes('custom') ? 'custom' : 'generic',
        );
      } else {
        await putCompensationPlan(data);
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: `Ocurrió un error al crear el plan de compensación`,
      });
      console.error(error);
    } finally {
      setIsLoading(false);
      Swal.fire({
        icon: 'success',
        title: 'Plan de compensación creado',
        text: `El plan de compensación fue ${
          id ? 'editado' : 'creado'
        } con éxito`,
        confirmButtonText: 'Aceptar',
      }).then(() => {
        navigate(PathNames.PLANS, { replace: true });
      });
    }
  };

  return {
    userId: getLoggedUser()?.id,
    fields,
    errors,
    actionsSelected,
    isLoading,
    id,
    path,
    currentPlan,
    getTotalUfp,
    onSubmit,
    setActionsSelected,
    addAction,
    addAllActions,
    removeAction,
    getValues,
    setValue,
    register,
    handleSubmit,
    generateInitalPlanState,
    reset,
    updateAction,
    updateActions,
    updateSelectedBusiness,
  };
};

export default useCreateCompensationPlan;
