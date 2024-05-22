/* eslint-disable @typescript-eslint/use-unknown-in-catch-callback-variable */
import { Box } from '@mui/material';
import { CustomButton, CustomLoader, CustomText, ManagmentLayout } from '../../../components';
import { useTranslation } from 'react-i18next';
import { useCategoriesCalculatorForm } from '../hooks/userCategoriesCalculatorForm';
import CustomCardCalculatorCategory from '../../../components/orgamisms/CustomCardCalculatorCategory/CustomCardCalculatorCategory';
import { useEffect } from 'react';

interface CategoriesFormProps {
  nextStep: () => void;
  stepBack: () => void;
}

const CategoriesForm = ({ nextStep, stepBack }: CategoriesFormProps) => {
  const { t } = useTranslation('commons');
  const {
    categoryList,
    selectedIsCategory,
    isLoading,
    handleCategorySelect,
    saveSelectedCategories,
    loadCategories,
  } = useCategoriesCalculatorForm();

  const handleOnClick = () => {
    saveSelectedCategories()
      .then(() => {
        nextStep();
      })
      .catch(console.error);
  };
  console.log(selectedIsCategory);

  useEffect(() => {
    void loadCategories();
  }, []);

  return (
    <ManagmentLayout
      title={
        <Box>
          <CustomText texto={t('pageTitles.caculatorCatogories')} variante={'titulo'} />
          <Box mt={2}>
            <CustomText
              texto={t('calculatorPage.descriptions.descriptionCategories')}
              variante="texto"
            />
          </Box>
        </Box>
      }
      generalContents={
        <Box
          mt={1}
          sx={{
            borderTop: '1px solid #C8C8C8',
            paddingTop: '20px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '50px',
          }}
        >
          {isLoading && <CustomLoader />}
          {categoryList.map(category => (
            <CustomCardCalculatorCategory
              key={category.id}
              idCategory={category.id}
              categoryName={category.name}
              categoryScope={category.scope}
              categoryDescription={category.descripction}
              isSelected={selectedIsCategory.includes(category.id)}
              onSelect={handleCategorySelect}
            />
          ))}

          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              mt: 3,
            }}
          >
            <CustomButton
              variant="contained"
              color="primary"
              content={t('generalButtonText.back')}
              onClick={stepBack}
            />

            <CustomButton
              variant="contained"
              color="info"
              content={t('components.stepper.next')}
              onClick={handleOnClick}
            />
          </Box>
        </Box>
      }
    />
  );
};
export default CategoriesForm;
