/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslation } from 'react-i18next';
import { CategoryModel } from '../../../../models';
import { useContext, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import CoverageResolver from '../schemas/CoverageSchema';
import { CalculatorContext } from '../../../../contexts';
import PollutionTypeResolver from '../schemas/PollutionTypeSchema';
import { useFieldArray, useForm } from 'react-hook-form';
import { PollutionTypeModel } from '../../../../models';


type PollutanCoverage = {
  id: number;
  name: string;
  totalSources: number;
  informedSources: number;
  //errors: string[];
};



const usePollutionTypeForm = () => {
  const { t } = useTranslation('commons');

  const [pollutionTypeList, setPollutionTypeList] = useState<PollutionTypeModel[]>([]);

  const {
    control,
    handleSubmit,
    register,
    getValues,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { pollutionType: pollutionTypeList },
    resolver: yupResolver(PollutionTypeResolver),
  });

  const { fields, append, update, remove } = useFieldArray({
    control,
    name: 'pollutionType',
  });


  const addPollutionType = (newPollutionType: PollutionTypeModel) => {
    append(newPollutionType);
    register(`pollutionType.${fields.length}.id`);
    console.log('getValues add: ', getValues());
  };

  const removePollutionType = (pollutionTypeName: string) => {
    const indexToRemove = fields.findIndex(field => field.name === pollutionTypeName);
    
    if (indexToRemove !== -1) {
      remove(indexToRemove);
      console.log('getValues remove: ', getValues());
    }
  };


  const onSubmit = (data: any) => {
    console.log(data);
    console.log('getValues: ', getValues());
    
  };

  return {
    handleSubmit,
    onSubmit,
    register,
    getValues,
    addPollutionType,
    removePollutionType,
    errors,
    control,
    t,
    reset
  };
};

export default usePollutionTypeForm;
