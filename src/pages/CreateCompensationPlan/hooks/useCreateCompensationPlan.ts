import { useFieldArray, useForm } from 'react-hook-form';
import { CompensationPlanModel } from '../../../models/CompensationPlan/CompensationPlanModel';
import { yupResolver } from '@hookform/resolvers/yup';
import { CompensationPlanSchema } from '../schemas';
import { ActionsModel } from '../../../models/Actions';
import { useState } from 'react';

const useCreateCompensationPlan = () => {
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

  return {
    fields,
    errors,
    actionsSelected,
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
