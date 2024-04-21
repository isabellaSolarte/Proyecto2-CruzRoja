/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from 'axios';
import { useEffect } from 'react';

const useAsync = (
  asyncFunc: Promise<AxiosResponse>,
  successFuntion: (data: any) => void,
  errorFunction: (data: any) => void,
  returnFuntion: () => void,
  dependencies: any[],
) => {
  useEffect(() => {
    let isActive = true;
    asyncFunc
      .then(response => {
        if (isActive) {
          successFuntion(response);
        }
      })
      .catch((error: unknown) => {
        if (isActive) {
          errorFunction(error);
        }
      });
    return () => {
      returnFuntion();
      isActive = false;
    };
  }, dependencies);
};

export default useAsync;
