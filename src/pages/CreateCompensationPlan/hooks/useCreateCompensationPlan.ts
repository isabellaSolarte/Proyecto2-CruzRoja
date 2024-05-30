import { useFieldArray, useForm } from 'react-hook-form';
import { CompensationPlanModel } from '../../../models/CompensationPlan/CompensationPlanModel';
import { yupResolver } from '@hookform/resolvers/yup';
import { CompensationPlanSchema } from '../schemas';
import { ActionsModel } from '../../../models/Actions';
import { useState } from 'react';
import { postCompensationPlan } from '../../../services/AxiosRequests/Plans/PlanRequests';

const useCreateCompensationPlan = () => {
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
    control,
    formState: { errors },
  } = useForm<CompensationPlanModel>({
    resolver: yupResolver(CompensationPlanSchema),
  });

  const { append, fields, remove } = useFieldArray({
    control: control,
    name: 'actions',
  });

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
    setIsLoading(true);
    console.log('data:', data);
    const response = await postCompensationPlan({ ...data });
    console.log('Response:', response);
    setIsLoading(false);
  };

  return {
    fields,
    errors,
    actionsSelected,
    isLoading,
    onSubmit,
    setActionsSelected,
    addAction,
    addAllActions,
    removeAction,
    getValues,
    setValue,
    register,
    handleSubmit,
  };
};

export default useCreateCompensationPlan;
