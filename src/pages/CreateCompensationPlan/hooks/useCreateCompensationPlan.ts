import { useFieldArray, useForm } from 'react-hook-form';
import { CompensationPlanModel } from '../../../models/CompensationPlan/CompensationPlanModel';
import { yupResolver } from '@hookform/resolvers/yup';
import { CompensationPlanSchema } from '../schemas';
import { ActionsModel } from '../../../models/Actions';
import { useMemo, useState } from 'react';
import {
  getCompensationPlanById,
  postCompensationPlan,
  putCompensationPlan,
} from '../../../services/AxiosRequests/Plans/PlanRequests';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';
import { PathNames } from '../../../core';
import { defaultCompensationPlan } from '../schemas/CompensationPlanSchema';

const useCreateCompensationPlan = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentPlan, setCurrentPlan] = useState<CompensationPlanModel>(
    defaultCompensationPlan,
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [actionsSelected, setActionsSelected] = useState<{
    actions: ActionsModel[];
    totalUfp: number;
    totalCosto: number;
  }>({ actions: [], totalUfp: 0, totalCosto: 0 });

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

  const { append, fields, remove } = useFieldArray({
    control: control,
    name: 'actions',
  });

  const getTotalUfp = (actions: ActionsModel[]) => {
    return actions.reduce((acc, action) => acc + action.footPrintUnity, 0);
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

  const addAction = (action: ActionsModel) => {
    append(action);
  };

  const addAllActions = (actions: ActionsModel[]) => {
    actions.forEach(action => {
      append(action);
    });
  };

  const removeAction = (index: number) => {
    console.log(index);
    remove(index);
  };

  const onSubmit = async (data: CompensationPlanModel) => {
    try {
      setIsLoading(true);
      if (!id) {
        await postCompensationPlan(data);
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
    fields,
    errors,
    actionsSelected,
    isLoading,
    id,
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
  };
};

export default useCreateCompensationPlan;
