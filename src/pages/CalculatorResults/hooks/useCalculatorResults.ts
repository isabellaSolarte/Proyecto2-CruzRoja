import { ReactInstance, useRef, useState } from 'react';
import { CalculatorResult } from '../../../models';
import { useReactToPrint } from 'react-to-print';

const useCalculatorResults = () => {
  const pageComponentRef = useRef<ReactInstance | null>(null);
  const [fakeCalculatorResult, setFakeCalculatorResult] =
    useState<CalculatorResult>({
      total: 1000,
      totalBySources: [
        { source: 'Electricity', total: 300 },
        { source: 'Gas', total: 200 },
        { source: 'Water', total: 100 },
        { source: 'Transportation', total: 400 },
      ],
      totalByMonth: [
        {
          year: '2024',
          month: [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0, 0],
          total: 550,
        },
        {
          year: '2023',
          month: [90, 80, 70, 60, 50, 40, 30, 20, 10, 0, 0, 0],
          total: 450,
        },
      ],
      percentage: [
        { source: 'Electricity', total: 30 },
        { source: 'Gas', total: 20 },
        { source: 'Water', total: 10 },
        { source: 'Transportation', total: 40 },
      ],
    });

  const handlePrint = useReactToPrint({
    content: () => pageComponentRef.current,
  });

  return {
    fakeCalculatorResult,
    total: fakeCalculatorResult.total,
    totalBySources: fakeCalculatorResult.totalBySources,
    totalByMonth: fakeCalculatorResult.totalByMonth,
    pageComponentRef,
    handlePrint,
  };
};

export default useCalculatorResults;
