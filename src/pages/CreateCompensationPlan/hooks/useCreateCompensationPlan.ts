import { useFieldArray, useForm } from 'react-hook-form';
import { CompensationPlanModel } from '../../../models/CompensationPlan/CompensationPlanModel';
import { yupResolver } from '@hookform/resolvers/yup';
import { CompensationPlanSchema } from '../schemas';
import { ActionsModel } from '../../../models/Actions';

const useCreateCompensationPlan = () => {
  const {
    getValues,
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

  const addAction = (actions: ActionsModel) => {
    append(actions);
  };

  const removeAction = (index: number) => {
    console.log(index);
    remove(index);
  };

  return {
    fields,
    errors,
    addAction,
    removeAction,
    getValues,
    register,
    handleSubmit,
  };
};

export default useCreateCompensationPlan;
