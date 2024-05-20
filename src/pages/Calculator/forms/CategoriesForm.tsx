import { Box } from "@mui/material";
import { CustomButton, CustomText, ManagmentLayout } from "../../../components";
import { useTranslation }  from 'react-i18next';
import { useCategoriesCalculatorForm } from "../hooks/userCategoriesCalculatorForm";
import CustomCardCalculatorCategory from "../../../components/orgamisms/CustomCardCalculatorCategory/CustomCardCalculatorCategory";

const CategoriesForm = () => {
    const {t} = useTranslation('commons');
    const{categoryList,handleCategorySelect,selectedCategory,saveSelectedCategories}= useCategoriesCalculatorForm();
    
    return (
        <ManagmentLayout 
            actionsContent = {
                <Box>
                   <CustomButton
                        content={t('generalButtonText.saveCategoriesSelected')} 
                        onClick={saveSelectedCategories}
                    />
                </Box>
                }
            title={
                    <Box>
                        <CustomText 
                            texto={t('pageTitles.caculatorCatogories')} 
                            variante={'titulo'} 
                         />
                        <Box mt = {2}>
                            <CustomText texto={t('calculatorPage.descriptions.descriptionCategories')} variante="texto" />
                        </Box>
                    </Box>
                }
            generalContents={
                <Box mt={1} sx={{ borderTop: '1px solid #C8C8C8', paddingTop: '20px', display: "flex", flexWrap: 'wrap', gap: '50px' }}>
                    {categoryList.map((category) => (
                        <CustomCardCalculatorCategory
                            idCategory={category.id}
                            categoryName={category.name}
                            categoryScope={category.scope}
                            categoryDescription={category.descripction}
                            isSelected={selectedCategory.includes(category.id)}
                            onSelect={handleCategorySelect}
                        />
                    ))}     
                </Box>
            } 
        />
    );
};
export default CategoriesForm;
