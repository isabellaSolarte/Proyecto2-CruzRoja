import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useCategoriesCalculatorForm } from '../hooks/useCategoriesCalculatorForm';
import CustomCardCalculatorCategory from '../../../../components/orgamisms/CustomCardCalculatorCategory/CustomCardCalculatorCategory';
import { useEffect } from 'react';
import { CustomButton, CustomLoader, CustomText, ManagmentLayout } from '../../../../components';

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
    onSubmit,
    handleSubmit,
    errors,
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


        <form onSubmit={handleSubmit(onSubmit)}>
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
            {errors.selectedCategories && (
              <Typography color="error">{errors.selectedCategories.message}</Typography>
            )}

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
        
        </form>
       
      }
    />
  );
};
export default CategoriesForm;
