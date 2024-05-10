import { Box } from "@mui/material";
import { CustomText, ManagmentLayout } from "../../../components";
import { useTranslation }  from 'react-i18next';
import { useCategoriesCalculatorForm } from "../hooks/userCategoriesCalculatorForm";
import CustomCardCategory from "../../../components/orgamisms/CustomCardCategory/CustomCardCategory";

const CategoriesForm = () => {
    const {t} = useTranslation('commons');
    const{
        categoryList
    }= useCategoriesCalculatorForm()
    return (
        <ManagmentLayout 
            title={
                    <Box>
                        <CustomText 
                            texto={t('pageTitles.listCategories')} 
                            variante={'titulo'} 
                         />
                        <Box mt = {2}>
                            <CustomText texto={t('calculatorPage.descriptions.descriptionCategories')} variante="texto" />
                        </Box>
                    </Box>
                }
            generalContents={
                <Box mt={1} sx={{ borderTop: '1px solid #C8C8C8', paddingTop: '20px', display: "flex", flexWrap: 'wrap', gap: '20px' }}>
                    {categoryList.map((category) => (
                        <CustomCardCategory
                            idCategory={category.id}
                            categoryName={category.name}
                            categoryScope={category.scope}
                            categoryDescription={category.descripction}
                            
                        />
                    ))}     
                </Box>
            } 
        />
    );
};
export default CategoriesForm;
