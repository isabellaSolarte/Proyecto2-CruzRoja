import { ReactInstance, useRef } from 'react';
import { CalculatorResult, sourceResult } from '../../../models';
import { useReactToPrint } from 'react-to-print';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userAtom } from '../../../recoil';

const useCalculatorResults = () => {
  const { state } = useLocation();
  const pageComponentRef = useRef<ReactInstance | null>(null);
  const result: CalculatorResult = state.processedResult;
  const user = useRecoilState(userAtom);

  console.log(user[0]);

  const handlePrint = useReactToPrint({
    content: () => pageComponentRef.current,
  });

  const getPercentageOnBase100 = (): sourceResult[] => {
    return result.percentage
      .map(data => {
        return {
          source: data.source,
          total: Number(
            ((Math.round(data.total * 100) / 100) * 100).toFixed(0),
          ),
        };
      })
      .sort((a, b) => b.total - a.total);
  };

  return {
    fakeCalculatorResult: result,
    total: result.total,
    totalBySources: result.totalBySources,
    totalByMonth: result.totalByMonth,
    percentage: getPercentageOnBase100(),
    pageComponentRef,
    state,
    user: user[0],
    handlePrint,
  };
};

export default useCalculatorResults;
