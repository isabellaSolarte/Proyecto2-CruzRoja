import { useCalculatorHook } from '../../hooks';
import { CategoryModel } from '../../../../models';

const useCostsAndUsageForm = () => {
  const { updateCalculatorState, getCalculatorState } = useCalculatorHook();

  const listSources = () => {
    const state = getCalculatorState();
    return state.flatMap(category => 
      category.pollutans.flatMap(pollutant => 
        pollutant.sources.map(source => ({
          categoryId: category.id,
          sourceId: source.id,
          name: source.name,
        }))
      )
    );
  };

  const updateSourceCostAndMonth = (
    categoryId: number,
    sourceId: number,
    newCost: number,
    newMonth: number
  ) => {
    const state = getCalculatorState();
    const category = state.find((cat) => cat.id === categoryId);

    if (category) {
      const updatedPollutants = category.pollutans.map((pollutant) => {
        const updatedSources = pollutant.sources.map((source) => {
          if (source.id === sourceId) {
            return {
              ...source,
              facturation: {
                ...source.facturation,
                cost: newCost,
                month: newMonth,
              },
            };
          }
          return source;
        });
        return { ...pollutant, sources: updatedSources };
      });

      const updatedCategory: CategoryModel = {
        ...category,
        pollutans: updatedPollutants,
      };

      updateCalculatorState(updatedCategory);
    }
  };

  return {
    listSources,
    updateSourceCostAndMonth,
  };
};

export default useCostsAndUsageForm;
